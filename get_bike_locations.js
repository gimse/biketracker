var axios = require('axios');
const { warning } = require('py-logging');
require('dotenv').config()
var logging = require('py-logging');
logging.basicConfig({level: 'DEBUG' });

logging.info('Starting bike locations download script')


if(!process.env.COUCHDB_USER){throw 'Environment variable COUCHDB_USER is not added'}
if(!process.env.COUCHDB_PASSWORD){throw 'Environment variable COUCHDB_PASSWORD is not added'}
if(!process.env.COUCHDB_URL){throw 'Environment variable COUCHDB_URL is not added'}

//Connecting to caochDb
db_full_url=null
if(process.env.COUCHDB_URL.startsWith('https://')){
    db_full_url=`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@${process.env.COUCHDB_URL.replace('https://','')}`
}else if(process.env.COUCHDB_URL.startsWith('http://')){
    db_full_url=`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@${process.env.COUCHDB_URL.replace('http://','')}`
}else{
    logging.error('The coachdb url are missing https or http')
    throw 'The coachdb url are missing https or http'
}
const nano = require('nano')(db_full_url);

db_name='bike_locations'

// Setting up db is not there.
main= async () => {
    try {
        const dblist = await nano.db.list()
        if(!dblist.includes(db_name)){
            logging.warning(`Db ${db_name} do not exist. Trying to create new.`)
            try{
                await nano.db.create(db_name);
                logging.warning(`Created new db ${db_name}`)
            }catch (e) {
            // failed
            if(e.description){logging.error(`CaochDB failed to create db: ${e.description}`)}
            else{logging.error('Failed to create new db. Se error below');logging.error(e)}
            return;
    
          }


            logging.info(`Creating new db with name ${db_name}`)
        }
        else{logging.info(`Db is okay`)}
      } catch (e) {
        // failed
        if(e.description){logging.error(`CaochDB: ${e.description}`)}
        else{logging.error('Probably failed to connect to CoachDB. See error below.');logging.error(e)}
        return;

      }


    var data = JSON.stringify({
    query: `{
    vehicles(lat: 59.911491, lon: 10.757933, range: 50000, count: 100000) {
        lat
        lon
        id
    }
    }`,
    variables: {}
    });
    var config = {method: 'post',url: 'https://api.entur.io/mobility/v2/graphql',
    headers: { 'Content-Type': 'application/json'},data : data
    };

    try{
        response= await axios(config)
        logging.info('Bike location successfully resived')
    }
    catch(e){
        logging.error(`Failed to get bike locations: `+error);
        return
    };
    if(response.data.data.vehicles){
        logging.info(`Resived info on ${response.data.data.vehicles.length} vehicles.`)
    }
    else{logging.error(`Missing vehicles list`)}

    response.data.data.vehicles.forEach(vehicle=>{

        vehicle.datetime=new Date().toISOString()

        db = nano.use(db_name);
        try{
            db.insert(vehicle)
        }
        catch(e){
            logging.error(`Upload to db for vehicle with id ${vehicle.id} failed:`+e)
        }
    });


}
main()

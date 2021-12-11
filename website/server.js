const express = require('express')
const path = require('path');
var logging = require('py-logging');
require('dotenv').config()
var axios = require('axios');

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/random_bike_path', function(req, res) {
    res.sendFile(path.join(__dirname, 'random_bike_path.html'));
});


app.get('/lastUpdatedLocations', function(req, res, next) {
    if (!req.query.count){
        const err = new Error('Required query parameter "count" missing.');
        err.status = 400;
        return next(err);
    }
    else if (isNaN(req.query.count)){
        const err = new Error('Parameter "count" is not a number.');
        err.status = 400;
        return next(err);
    }
    else if (0>Number(req.query.count)){
        const err = new Error('Parameter "count" is a negative number.');
        err.status = 400;
        return next(err);
    }
    count=req.query.count


    var config = {
        method: 'get',
        url: `${process.env.COUCHDB_URL}/bike_locations/_design/datetime_doc/_view/datetime-index?limit=${count}&include_docs=true&descending=true`,
        auth: {
            username: process.env.COUCHDB_USER,
            password: process.env.COUCHDB_PASSWORD
        }
      
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));

        const bike_locations = response.data.rows.map(bike => {
        return {
        'id':bike.doc.id,
        'datetime': bike.doc.datetime,
        'lat': bike.doc.lat,
        'lon': bike.doc.lon
        }})
    res.json({'bikes': bike_locations});
    }).catch(function (error) {
        console.log(error);
        const err = new Error('Failed to get data from database.');
        err.status = 400;
        return next(err);
    });
    
});


app.get('/getBikePath', function(req, res, next) {
    if (!req.query.bike_id){
        const err = new Error('Missing parameter "bike_id"');
        err.status = 400;
        return next(err);
    }


    var config = {
        method: 'get',
        url: `${process.env.COUCHDB_URL}/bike_locations/_design/bike-path/_view/bike-path-view?include_docs=true&startkey=["${req.query.bike_id}","0001-12-07T17:15:11.129Z"]&endkey=["${req.query.bike_id}",{}]`,
        auth: {
            username: process.env.COUCHDB_USER,
            password: process.env.COUCHDB_PASSWORD
        }
          
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    
        const bike_locations = response.data.rows.map(bike => {
            return {
            'id':bike.doc.id,
            'datetime': bike.doc.datetime,
            'lat': bike.doc.lat,
            'lon': bike.doc.lon
            }})
        res.json({'bikes': bike_locations});
    }).catch(function (error) {
        console.log(error);
        const err = new Error('Failed to get data from database.');
        err.status = 400;
        return next(err);
    });
    

});

const port = 28704
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const path = require('path');
var logging = require('py-logging');
require('dotenv').config()

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
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

    var axios = require('axios');

    var config = {
    method: 'get',
    url: `${process.env.COUCHDB_URL}/bike_locations/_design/datetime_doc/_view/datetime-index?limit=10&include_docs=true&descending=true`,
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
    })
    .catch(function (error) {
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
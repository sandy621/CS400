const express = require('express');
const router = express.Router();
const request = require('request');
const MongoClient = require('mongodb').MongoClient;


const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("ps6");

    router.get('/', function(req, res, next) {
        const ip = req.query.ip;
        const query={};
        query['ip'] = ip;

        dbo.collection("geolocations").find(query).toArray(function(err, result1) {
            if (err) throw err;
            else if (result1.length !== 0) {
                res.render('ps6', {title: 'Curious about your exact location?', longitude: result1[0].longitude, latitude: result1[0].latitude, result: "Result from cache."});
            }
            else {
                const options = {
                    method: 'GET',
                    url: 'https://freegeoip.app/json/' + ip,
                    hostname: 'freegeoip.app',
                    port: null,
                    path: '/json/',
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    }
                };
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);
                    const data = JSON.parse(body);
                    dbo.collection("geolocations").insertOne(data, function(err, result2) {
                        if (err) throw err;
                        res.render('ps6', {title: 'Curious about your exact location?', longitude: data.longitude, latitude: data.latitude, result: "Result from third-party API."});
                    });
                });
            }
        });
    });
});

module.exports = router;

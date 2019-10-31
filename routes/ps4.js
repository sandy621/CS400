const express = require('express');
const router = express.Router();
const request = require('request')

router.get('/', function(req, res, next) {
    const options = {
        method: 'GET',
        url: 'https://freegeoip.app/json/',
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

        console.log("body:", body);

        const data = JSON.parse(body);
        console.log("results parsed:", data);

        res.render('ps4', {title: 'Curious about your exact location?', longitude: data.longitude, latitude: data.latitude});
        })
    });

module.exports = router;
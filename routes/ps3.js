const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('ps3', {Output: 'Welcome to PS3!'});
});

router.post('/', function(req, res, next) {
    res.render('ps3', {OriginalString: req.body.input, StringLength: req.body.input.length});
});

module.exports = router;
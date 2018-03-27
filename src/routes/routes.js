// router.js - application route module.
var express = require('express');
var router = express.Router();
const connector = require('../database/connector');
const Simple = require('../models/simple');

// service information path
router.get('/info', function (req, res) {
    var info = { name: "docker nodejs", version: "1.0" };
    res.send(info);
});

router.get('/all', function (req, res) {
    Simple.find({}, function (error, all) {
        res.send(all);
    });
});

module.exports = router;
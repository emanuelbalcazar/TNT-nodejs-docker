// router.js - application route module.
var express = require('express');
var router = express.Router();

// service information path
router.get('/info', function (req, res) {
    var info = { name: "docker nodejs", version: "1.0" };
    res.send(info);
});

module.exports = router;
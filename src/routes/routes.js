// router.js - application route module.
var express = require('express');
var router = express.Router();

const connector = require('../database/connector');
const User = require('../models/user');

// service information path.
router.get('/info', (req, res) => {
    var info = { name: "docker nodejs", version: "1.0" };
    defaultCallback(res, false, info);
});

// get all users.
router.get('/users', (req, res) => {
    User.find({}, (err, all) => {
        defaultCallback(res, err, all);
    });
});

// create a new user.
router.post('/users/add', (req, res) => {
    var user = new User(req.body);

    user.save((err) => {
        defaultCallback(res, err, user);
    });
});

// find user by id.
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        defaultCallback(res, err, user);
    });
});

// delete user by id.
router.delete('/users/:id', (req, res) => {
    User.remove({ _id: req.params.id }, (err) => {
        defaultCallback(res, err, { user: req.params.id, status: 'deleted' });
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send({ error: error });

    return res.status(200).send({ response: result });
}

module.exports = router;
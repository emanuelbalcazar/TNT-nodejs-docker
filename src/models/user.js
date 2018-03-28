var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { type: String },
    surname: { type: String }
});

var User = mongoose.model('users', schema);

module.exports = User;
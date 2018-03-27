var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { type: String }
});

var Simple = mongoose.model('simple', schema);

module.exports = Machine;
// module of connection to the database.
var mongoose = require('mongoose');

var connection = mongoose.connect("mongo");

mongoose.connection.on('connected', function () {
    console.log('[Mongoose] - conectado en:', url);
});

mongoose.connection.on('error',function (err) {
    console.log('[Mongoose] - error de conexion:', err);
});

module.exports = connection;
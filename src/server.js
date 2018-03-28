// server.js - application main module.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// configure all environments.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// declare all routes.
var router = require('./routes/routes');
app.use(router);

app.set('host', "localhost");
app.set('port', 8000);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Nodejs Docker iniciado en %s:%s', app.get('host'), app.get('port'));
});
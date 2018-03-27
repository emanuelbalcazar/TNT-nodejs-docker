// server.js - application main module.
const express = require('express');
const app = express();

var router = require('./routes/routes');
app.use(router);

app.set('host', "localhost");
app.set('port', 8000);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Nodejs Docker iniciado en %s:%s', app.get('host'), app.get('port'));
});
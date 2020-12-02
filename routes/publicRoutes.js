var express = require('express');
var app = express();
path = require('path')
var logger = require('../log_format');

app.get('/', (req, res, next) => {
    logger("ok", `Someone Hit US! is from ${req.connection.remoteAddress}`)
    res.status(200).sendFile(path.join(__dirname, '../views/home.html'))
});

module.exports = app;
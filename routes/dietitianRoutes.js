const express = require('express');
const { Dietitians } = require('../model/models')
const { DietitiansAttr } = require('../model/modelAttr')

var app = express();
var logger = require('../log_format');

var success_response = (data) => {
    return {
        status: 200,
        message: "Request Success",
        result: data
    }
}

var failed_response = (stat, msg) => {
    return {
        status: stat,
        message: msg
    }
}

app.get('/dietitians', (req, res, next) => {
    logger("info", `Someone get DIETITIANS data from ${req.connection.remoteAddress}`)
    Dietitians
    .findAll({attributes: Object.keys(DietitiansAttr)})
    .then((dataku) => {
        // console.log(dataku[0].dataValues)
        res.status(200).send(success_response(dataku))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

app.get('/dietitians/:id', (req, res, next) => {
    logger("info", `Someone get DIETITIANS ID=${req.params.id} data from ${req.connection.remoteAddress}`)
    Dietitians
    .findAll({attributes: Object.keys(DietitiansAttr), where: {did: req.params.id}})
    .then((dataku) => {
        // console.log(dataku[0].dataValues)
        res.status(200).send(success_response(dataku[0].dataValues))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

module.exports = app;
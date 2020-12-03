const express = require('express');
const { PayMethod } = require('../model/models')
const { PaymethodsAttr } = require('../model/modelAttr')

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

app.get('/paymethods', (req, res, next) => {
    logger("info", `Someone get PAY METHODS data from ${req.connection.remoteAddress}`)
    PayMethod
    .findAll({attributes: Object.keys(PaymethodsAttr)})
    .then((dataku) => {
        // console.log(dataku[0].dataValues)
        res.status(200).send(success_response(dataku))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

app.get('/paymethods/atm', (req, res, next) => {
    logger("info", `Someone get PAY METHODS type=ATM data from ${req.connection.remoteAddress}`)
    PayMethod
    .findAll({attributes: Object.keys(PaymethodsAttr), where: {pmtype: 'atm'}})
    .then((dataku) => {
        // console.log(dataku)
        res.status(200).send(success_response(dataku))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

app.get('/paymethods/internet', (req, res, next) => {
    logger("info", `Someone get PAY METHODS type=INTERNET data from ${req.connection.remoteAddress}`)
    PayMethod
    .findAll({attributes: Object.keys(PaymethodsAttr), where: {pmtype: 'internet'}})
    .then((dataku) => {
        // console.log(dataku)
        res.status(200).send(success_response(dataku))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

app.get('/paymethods/emoney', (req, res, next) => {
    logger("info", `Someone get PAY METHODS type=EMONEY data from ${req.connection.remoteAddress}`)
    PayMethod
    .findAll({attributes: Object.keys(PaymethodsAttr), where: {pmtype: 'emoney'}})
    .then((dataku) => {
        // console.log(dataku)
        res.status(200).send(success_response(dataku))
    })
    .catch((err) => {
        // console.log(err)
        res.status(400).send(failed_response(400, err))
    })
});

module.exports = app;
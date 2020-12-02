const { DBUSER, DBPASS, DBSERVER, DBPORT, DBNAME } = require('./dbconfig')
const { UsersAttr, DietitiansAttr, BoothsAttr } = require('./modelAttr')

const { Sequelize } = require('sequelize');
var dburl = `postgres://${DBUSER}:${DBPASS}@${DBSERVER}:${DBPORT}/${DBNAME}`
var seq = new Sequelize(dburl)

const Users = seq.define('users', UsersAttr);
const Dietitians = seq.define('dietitians', DietitiansAttr);
const Booths = seq.define('booths', BoothsAttr);

module.exports = {
    Users, Dietitians, Booths
}
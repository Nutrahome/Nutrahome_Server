const dotenv = require('dotenv');
dotenv.config({ path: './../.env' });

module.exports = {
    DBUSER: process.env.DBUSER,
    DBPASS: process.env.DBPASS,
    DBSERVER: process.env.DBSERVER,
    DBPORT: process.env.DBPORT,
    DBNAME: process.env.DBNAME
};

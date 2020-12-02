const dotenv = require('dotenv');
dotenv.config({ path: './../.env' });

module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    SWAGGERURL: process.env.SWAGGERURL,
};
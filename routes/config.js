const dotenv = require('dotenv');
dotenv.config({ path: './../.env' });

module.exports = {
    ALTOAUTH: process.env.ALTOAUTH,
    ALTOAPIKEY: process.env.ALTOAPIKEY,
    ALTOVALIDKEY: process.env.ALTOVALIDKEY,
    ZIPAYNNS: process.env.ZIPAYNNS,
    ALTOAUTHORIZEID: process.env.ALTOAUTHORIZEID
};
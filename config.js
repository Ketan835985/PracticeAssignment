const dotenv = require('dotenv').config();

const {PORT, MONGOOSE_CONNECTION, SECRET_KEY} = process.env

module.exports = {
    PORT: PORT, MONGOOSE_CONNECTION : MONGOOSE_CONNECTION, SECRET_KEY : SECRET_KEY
}
require('dotenv').config()
const config = {
host: process.env.DB_HOST || 'localhost',
user: process.env.DB_USER || '',
pass: process.env.DB_PASS || '',
schema: process.env.DB_SCHEMA || '',
}
module.exports = config

require('dotenv').config()
const env = {
host: process.env.DB_HOST || 'localhost',
user: process.env.DB_USER || '',
pass: process.env.DB_PASS || '',
schema: process.env.DB_SCHEMA || '',
}
module.exports = env

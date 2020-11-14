require('dotenv').config()
const env = {
    port: process.env.PORT || 8080,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || '',
        pass: process.env.DB_PASS || '',
        schema: process.env.DB_SCHEMA || '',
        dialect: process.env.DB_DIALECT || 'sqlite::memory:',
        storage: process.env.DB_STORAGE || '',
        URL: process.env.DB_URL || 'sqlite::memory:'
    },
    auth: {
        jwtSecret: process.env.jwtSecret || 'secret',
    }
}
module.exports = env

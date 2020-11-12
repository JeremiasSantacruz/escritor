const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize('sqlite::memory:')
/*
const sequelize = new Sequelize (
    '',
    config.user,
    config.pass,
    {
        dialecct: 'mysql',
        host: config.host,
        schema: config.schema
    }
)
*/

const modelDefiners = [
    require('./models/User.model')
    //Add more models here
]

for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);


//testing
sequelize.sync({ force: true })

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
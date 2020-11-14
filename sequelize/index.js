const Sequelize = require('sequelize')
const config = require('../env')

// const sequelize = new Sequelize('sqlite::memory:')

const sequelize = new Sequelize (
    config.db.URL
)

const modelDefiners = [
    require('./models/User.model'),
    require('./models/Book.model')
    //Add more models here
]

for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
} 

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

//testing
sequelize.sync({force: true})

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
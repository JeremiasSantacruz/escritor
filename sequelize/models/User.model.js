const Sequelize = require('sequelize')
// Exportamos la uncion que define el modelo 
// La funcion recive Sequelize
module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        emai: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                is: /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32})$/
            }
        }
    })
}
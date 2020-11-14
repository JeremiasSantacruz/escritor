const Sequelize = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: Sequelize.STRING,
        },
        genre: {
            type: Sequelize.STRING,
        },
        author: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        price: {
            type: Sequelize.FLOAT
        },
        pdf: {
            type: Sequelize.BLOB
        },

    })

    return Book
}
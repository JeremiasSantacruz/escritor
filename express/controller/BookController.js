const {models} = require('../../sequelize')
const jwt = require('jsonwebtoken')
const config = require('../../env')


module.exports = {
    async create(req, res){
        try {
            const book = await models.Book.create(req.body)
            res.send(book)

        } catch (error) {
            res.status(400).send({
                error: 'Can\'t create the book entry.'
            })
        }

    },
    
    async index (req, res) {
        try {
            const book = await models.Book.findAll({
                limit: 20
            })
            res.send(book)
         } catch (error) {
            res.status(500).send({
                error: 'Something wrong'
            })
        }
    },

    async findOne(req, res) {
        try {
            const ID = req.Id       
            const book = await models.Book.find({
                where: {id : ID}
            })
            if(book){
                return res.status(404).send({
                    error: 'Book not found'
                })
            }
            res.send({book: book.toJSON()})
        } catch (error) {
            res.status(400).send({
                error: 'Something Wrong'
            })
        }
    },

    async delete(req, res){
        try {
            const ID = req.Id       
            const book = await models.Book.find({
                where: {id : ID}
            })
            if(book){
                return res.status(404).send({
                    error: 'Book not found'
                })
            }
            book.destroy()
        } catch (error) {
            res.status(400).send({
                error: 'Something Wrong'
            })
        }
    }
}

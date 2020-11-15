const {models} = require('../../sequelize')
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
            const books = await models.Book.findAll({
                limit: 20
            })
            res.send(books)
         } catch (error) {
            res.status(500).send({
                error: 'Something wrong'
            })
        }
    },

    async findBook(req, res) {
        try {      
            const book = await models.Book.findByPk(req.params.id)
            if(!book){
                return res.status(404).send({
                    error: 'Book not found'
                })
            }
            res.send(book)
        } catch (error) {
            res.status(400).send({
                error: 'Something Wrong'
            })
        }
    },

}

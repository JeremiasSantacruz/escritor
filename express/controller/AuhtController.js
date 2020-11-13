const {models} = require('../../sequelize')

module.exports = {
    async register(req, res) {
        
        try {
            const user = await models.User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'Email already in use'
            })
        }
    }
}

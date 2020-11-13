const {models} = require('../../sequelize')
const jwt = require('jsonwebtoken')
const config = require('../../env')

function jwtSignUp(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK,
    })        
} 

module.exports = {
    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await models.User.findOne({
                where: {
                    email: email
                }
            })

            if(!user){
                return res.status(403).send({
                    error: 'The login iformation was incorrect'
                })
                
            }
            const isPasswordValid = await user.comparePassword(password)

            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login iformation was incorrect'
                })
            }

            const userJSON = user.toJSON()
             res.send({
                token: jwtSignUp(userJSON),
                user: userJSON,
            })

        } catch (error) {
            res.status(500).send({
                error: 'Something wrong'
            })
        }
    },

    async register(req, res) {
        try {       
            const user = await models.User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'Email already in use./'
            })
        }
    }
}

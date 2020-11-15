const { models } = require('../../sequelize')
const jwt = require('jsonwebtoken')
const config = require('../../env')
const { index } = require('./BookController')


function jwtSignUp(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK,
    })
}

module.exports = {
    async login(req, res) {
        try {
            const { email, password } = req.body
            // SELECT * FROM 'Users' WHERE email = `"${email}"`
            const user = await models.User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
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
            // INSERT INTO 'Users' ('id', 'email', 'password', 'secret') VALUE (null, `${password}`, `${secret}`,`${email}`)
            const user = await models.User.create(req.body)
            res.send(user)
        } catch (error) {
            res.status(400).send({
                error: 'Email already in use.'
            })
        }
    },

    async recovery(req, res) {
        try {
            const { email, secret } = req.body
            const user = await models.User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'User not exist.'
                })

            }
            if (user.secret !== secret) {
                return res.status(403).send({
                    error: 'Secret is not correct.'
                })
            }
            user.password = req.body.password
            user.save()
            res.send(user)    //Send a password without bycrpt need fix       
        } catch (error) {
            res.status(400).send({
                error: 'Body need an user, secret and password.'
            })
        }
    },

    async registerAdmin(req, res) {
        try {
            if (req.body.secret !== 'God') {
                return res.status(400).send({
                    error: 'Something Wromg.'
                })
            }
            const { email } = req.body
            const user = await models.User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'User not exist.'
                })

            }
            user.role = 'Admin'
            user.save()
            res.send(user)
        } catch (error) {
            res.status(400).send({
                error: 'Something Wrong'
            })
        }
    },
    }


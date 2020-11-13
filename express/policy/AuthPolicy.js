const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().pattern(
                new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32})$')
            )
        })

        const {error, value} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key){
                case "email":
                    res.status(400).send({
                        error: `You must provide a valid email addres`
                    })
                    break
                case "password":
                    res.status(400).send({
                        error: `You must provide a password with the rules:
                        <br> 1. Length of 8 to 32
                        <br> 2. Have at least one upper case, lower case, digit and special char`
                    })
                    break
                default:
                    res.status(400).send({
                        error: `Invalid registrer information`
                    })
                    break
            }            
        } else {
            next()
        }
    }
}
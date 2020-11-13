const AuthController = require('./controller/AuhtController')
const AuthPolicy = require('./policy/AuthPolicy')

module.exports = (app) => {
    app.post("/user", 
        AuthPolicy.register,
        AuthController.register
        ),
        
    app.post("/ping", (req, res) => {
        res.send(req.body.ping)
    })
}
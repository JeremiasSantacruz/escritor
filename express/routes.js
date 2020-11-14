const AuthController = require('./controller/AuhtController')
const AuthPolicy = require('./policy/AuthPolicy')
const bookController = require('./controller/BookController.js')

module.exports = (app) => {
    app.post("/user", 
        AuthPolicy.register,
        AuthController.register
        ),

    app.post("/login", 
        AuthController.login,
    ),

    app.get('/books',
        bookController.index
        ),

    app.get('/books/:id',
        bookController.findOne
    )
}
const AuthController = require('./controller/AuhtController')
const AuthPolicy = require('./policy/AuthPolicy')
const BookController = require('./controller/BookController')

module.exports = (app) => {
    app.post("/user", 
        AuthPolicy.register,
        AuthController.register
        ),

    app.post("/admin", 
        AuthPolicy.register,
        AuthController.registerAdmin
        ),
        
    app.post("/login",
        AuthController.login
    ),

    app.post('/user/recovery',
        AuthPolicy.register,
        AuthController.recovery
    )

    app.get('/books/index',
        BookController.index
        ),

    app.get('/books/:id',
        BookController.findBook
    )
    
    app.post("/books/add",
        BookController.create)
}
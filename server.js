const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

require('dotenv').config()
const port = process.env.PORT || 8080

const app = express()

const connection = mysql.createConnection({
    host: process.env.DB_HOST || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    schema: process.env.DB_SCHEMA || '',
})
connection.connect(err => {
    if(err) throw err
    console.log('Database server running.')
}) 

app.use(express.static(__dirname + "/dist/"))

app.get(/.*/, function (req,res){
        res.sendFile(__dirname + "/dist/index.html")
})

app.listen(port)
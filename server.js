const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const app = express()

const connection = mysql.createConnection({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b1bc10ad94850e",
    password: "0245c9f6",
    database: "heroku_1a05cfe9ca51313"
})

connection.connect(error => {
    if(error) throw error
    console.log('Database server running.')
}) 
// mysql://b1bc10ad94850e:0245c9f6@us-cdbr-east-02.cleardb.com/heroku_1a05cfe9ca51313?reconnect=true
 

app.use(express.static(__dirname + "/dist/"))


app.get(/.*/, function (req,res){
        res.sendFile(__dirname + "/dist/index.html")
})

app.listen(port)

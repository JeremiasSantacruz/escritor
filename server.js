const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

require('dotenv').config()
const port = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json());

/*
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
*/

app.use(express.static(__dirname + "/dist/"))

const {models} = require('./sequelize')

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.User.create(req.body);
		res.status(201).end();
	}
};

app.post("/user", 
    create)

app.get(/.*/, function (req,res){
        res.sendFile(__dirname + "/dist/index.html")
})

app.listen(port)
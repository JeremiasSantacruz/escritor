const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 8080
console.log(port)

const app = express()
app.use(bodyParser.json());
app.use(cors())


require('./express/routes')(app)

app.use(express.static(__dirname + "/dist/"))


app.get(/.*/, function (req,res){
       res.sendFile(__dirname + "/dist/index.html")
})

app.listen(port)


const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')

const app = express();

const rotasPessoas = require('./routes/rotasTbl_Pessoas')
const rotaLogin = require('./routes/rotaLogin')

app.use(bodyParser.json())

app.use ('/', rotasPessoas)
app.use ('/', rotaLogin)

const server = http.createServer(app)

server.listen(8080, async function(){
    console.log('listening port ' + 8080)
})
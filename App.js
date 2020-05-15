const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')

const app = express();

const rotasPessoas = require('./routes/rotasPessoas')

app.use(bodyParser.json())

app.use ('/', rotasPessoas)

const server = http.createServer(app)

server.listen(8080, async function(){
    console.log('listening port ' + 8080)
})
const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = express();

const rotasPessoas = require('./routes/rotasPessoas')
const rotasOcorrencias = require('./routes/rotasOcorrencias')

app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}))

app.use('/', rotasPessoas)
app.use('/', rotasOcorrencias)

const server = http.createServer(app)

server.listen(8080, async function () {
    console.log('listening port ' + 8080)
})
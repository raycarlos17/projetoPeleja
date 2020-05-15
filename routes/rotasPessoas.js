const express = require('express')
const router = express.Router()

const pessoa = require('../middlewares/pessoas')
const controllerPessoas = require('../controllers/controllerPessoas')

router.post('/projeto-peleja/pessoa/cadastro',
    pessoa.cadastrarPessoa,
    controllerPessoas.enviaResposta
)

router.post('/projeto-peleja/login',
    pessoa.realizaLoginPessoa,
    controllerPessoas.enviaRespostaLogin
    
)

module.exports = router
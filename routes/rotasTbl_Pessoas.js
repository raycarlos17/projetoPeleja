const express = require('express')
const router = express.Router()



const cadastrarPessoa = require('../middlewares/cadastroTbl_Pessoas')

router.post('/projeto-peleja/pessoa/cadastro',
    cadastrarPessoa.cadastrarPessoa
)

module.exports = router
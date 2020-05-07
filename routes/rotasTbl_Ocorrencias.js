const express = require('express')
const router = express.Router()



const cadastrarOcorrencia = require('../middlewares/cadastroTbl_Ocorrencias')

router.post('/projeto-peleja/registro/ocorrencia',
    cadastrarOcorrencia.registrarOcorrencia
)

module.exports = router
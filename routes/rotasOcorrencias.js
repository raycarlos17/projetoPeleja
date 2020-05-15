const express = require('express')
const router = express.Router()

const cadastrarOcorrencia = require('../middlewares/ocorrencias')

router.post('/projeto-peleja/registro/ocorrencia',
    cadastrarOcorrencia.registrarOcorrencia
)

module.exports = router
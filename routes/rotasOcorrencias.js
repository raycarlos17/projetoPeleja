const express = require('express')
const router = express.Router()

const ocorrencias = require('../middlewares/ocorrencias')
const controllerOcorrencia = require('../controllers/controllerOcorrencias')

router.post('/projeto-peleja/registro/ocorrencia',
    ocorrencias.cadastrarOcorrencia,
    controllerOcorrencia.enviaRespostaOcorrencia
)

module.exports = router
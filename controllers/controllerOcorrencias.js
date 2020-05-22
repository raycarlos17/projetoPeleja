async function enviaRespostaOcorrencia(req, res, next) {

    if (req.body.status_ocorrencia == 'Sucesso') {
        res.status(200).send({ "Message": "Ocorrencia feita com sucesso." })
    }
    else {
        res.status(404).send({ "Message": "Problema ao registrar ocorrencia." })
    }
}

async function enviaRespostaConsulta(req, res, next) {

    if (req.resultado_consulta_ocorrencia) {
        res.status(200).send({ "Message": "Consulta encontrada.", "Resultado" : req.resultado_consulta_ocorrencia })
    }
    else {
        res.status(404).send({ "Message": "Não encontrado nenhum assunto relacionado a consulta." })
    }
}


module.exports = { enviaRespostaOcorrencia, enviaRespostaConsulta }
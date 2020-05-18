async function enviaRespostaOcorrencia(req, res, next) {

    if (req.body.status_ocorrencia == 'Sucesso') {
        res.status(200).send({ "Message": "Ocorrencia feita com sucesso." })
    }
    else {
        res.status(404).send({ "Message": "Problema ao registrar ocorrencia." })
    }
}



module.exports = { enviaRespostaOcorrencia}
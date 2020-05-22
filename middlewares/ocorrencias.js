const funcoesOcorrencias = require('../funcoesBancoDeDados/funcoesOcorencias')
const moment = require('moment')

async function cadastrarOcorrencia(req, res, next) {

    dataAtual = moment().format('DD/MM/YYYY')

    let horaProtocol = moment().format('HHmmss')
    let dataProtocol = moment().format('DDMMYYYY')
    let idProtocol =  await funcoesOcorrencias.consultarId(req.body.email)
    let protocoloOcorrencia = (dataProtocol + horaProtocol + idProtocol)

    let resultadoEmail = await funcoesOcorrencias.consultarEmail(req.body.email)

    if (resultadoEmail == req.body.email) {
        try {
            funcoesOcorrencias.cadastrarOcorrencia(req.body.assunto, req.body.status, protocoloOcorrencia, dataAtual, req.body.email,
                req.body.logradouro, req.body.numero, req.body.complemento, req.body.bairro, req.body.estado, req.body.cep,
                req.body.descricao)

            req.body['status_ocorrencia'] = 'Sucesso'

        }
        catch (error) {
            res.status(404).json({ "Message": "Erro ao fazer ocorrencia" })
        }
    }
    else if (resultadoEmail == undefined) {
        res.status(404).json({ "Message": "Erro ao localizar email do usuario" })
    }

    next()
}

async function consultarOcorrencia(req, res, next) {
    const parametroConsulta = req.params.consulta;

    try {
        let resultado = await funcoesOcorrencias.consultarOcorrencia(parametroConsulta)
        req['resultado_consulta_ocorrencia'] = resultado;
    }
    catch (error) {
        res.send({ "Message": "Erro na consulta da ocorrencia" })
    }
    next()
}

module.exports = { cadastrarOcorrencia, consultarOcorrencia }
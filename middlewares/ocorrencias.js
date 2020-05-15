const funcoesTbl_Ocorrencias = require('../funcoesBancoDeDados/funcoesOcorencias')

async function cadastrarOcorrencia(req, res, next){
    
    try{
    funcoesTbl_Ocorrencias.inserirPessoa(req.body.assunto, req.body.cep, req.body.status, req.body.protocolo, req.body.data)

    res.status(200).json({"Message" : "Cadastrado com sucesso!"})

    }
    catch(error){
        res.status(404).json({"Message" : "Erro ao realizar cadastro!"})
    }
}

module.exports = {cadastrarOcorrencia}
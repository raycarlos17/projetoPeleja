const funcoesTbl_Pessoas = require('../funcoesBancoDeDados/funcoesTbl_Pessoas')

async function cadastrarPessoa(req, res, next){
    
    try{
    funcoesTbl_Pessoas.inserirPessoa(req.body.email, req.body.nome, req.body.senha, req.body.cpf)

    res.status(200).json({"Message" : "Cadastrado com sucesso!"})

    }
    catch(error){
        res.status(404).json({"Message" : "Erro ao realizar cadastro!"})
    }
}

module.exports = {cadastrarPessoa}
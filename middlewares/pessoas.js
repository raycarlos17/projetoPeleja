const funcoesPessoas = require('../funcoesBancoDeDados/funcoesPessoas')
const bcrypt = require('bcrypt');
const validaCpf = require ('@fnando/cpf') 

async function cadastrarPessoa(req, res, next) {
    
    const cpf = validaCpf.isValid(req.body.cpf)
    const hash = await bcrypt.hash(req.body.senha, 10)

    if(cpf == true){
    try {
        funcoesPessoas.inserirPessoa(req.body.email, req.body.nome, hash, req.body.cpf, req.body.telefone)
        req.body['status_insert_pessoa'] = 'Sucesso'

    }
    catch (error) {
        res.status(404).json({ "Message": "Erro ao realizar cadastro!" })
    }}
    else{
        res.status(404).json({ "Message": "CPF Invalido!" })
    }

    next()
}

async function realizaLoginPessoa(req, res, next) {

    try {
        funcoesPessoas.realizaLoginPessoa(req.body.email).then(

            async (resultado) => {
                if (resultado.length > 0) {

                    for (let linhas of resultado) {

                        let verificaHash = await bcrypt.compare(req.body.senha, linhas.senha)

                        if (verificaHash == true) {
                            req.body['status_login'] = true
                            res.send({ "Message": "Logado com sucesso" })
                        }
                        else {
                            res.send({ "Message": "Senha incorreta ou usuario incorretos" })
                        }
                    }
                }
                else {
                    res.send({ "Message": "Usuario não cadastrado" });
                }
            }
        )

    }
    catch{
        res.status(404).json({ "Message": "Erro na busca do usuario" })
    }

}


module.exports = { cadastrarPessoa, realizaLoginPessoa }
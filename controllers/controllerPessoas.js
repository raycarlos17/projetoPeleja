async function enviaResposta(req, res, next) {

    if (req.body.status_insert_pessoa == 'Sucesso') {
        res.status(200).send({ "Message": "Usuario Cadastrado com sucesso.", "token": req.body.token })
    }
    else if(req.body.status_cpf == false){
        res.status(404).send({ "Message": "CPF Invalido." })
    }
    else {
        res.status(404).send({ "Message": "Problema no cadastro do usuário." })
    }
}

async function enviaRespostaLogin(req, res, next) {

    if (req.body.status_login == true) {
        res.status(200).send({ "Message": "logado com sucesso." })
    }
    else {
        res.status(404).send({ "Message": "Problema no cadastro do usuário." })
    }
}

module.exports = { enviaResposta, enviaRespostaLogin }




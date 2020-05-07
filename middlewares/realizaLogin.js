const queries = require('../funcoesBancoDeDados/funcaoLogin')

function realizaLogin(req, res, next){

    queries.findByLogin(req.body.email).then(


        (resultado) => {
            if(resultado.length > 0){

                for(let linhas of resultado){
                    if(linhas.senha == req.body.senha){
                        res.send("Logado com sucesso")

                    }
                    else{
                        res.send("Senha incorreta ou usuario incorretos")
                    }
                }
            }
            else{
                res.send("Usuario não cadastrado");
            }
        }
    )
}

module.exports = {realizaLogin}
const conexao = require('../database/postgreslq')

async function inserirPessoa(email, nome, senha, cpf) {

    const insertQuery = {
        text: 'INSERT INTO tbl_pessoas( email, nome, senha, cpf) VALUES($1, $2, $3, $4) RETURNING id_pessoa',
        values: [email, nome, senha, cpf],
    }
    console.log(insertQuery)

    let client = await conexao.pool.connect()

    let resultado = await client.query(insertQuery)

    client.release()

    return resultado
}

module.exports = { inserirPessoa }
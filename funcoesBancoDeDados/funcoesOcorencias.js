const conexao = require('../database/postgreslq')


async function cadastrarOcorrencia(assunto, status, protocolo, data, email, logradouro, numero, complemento, bairro, estado, cep, descricao) {


    const insertQuery = {
        text: 'INSERT INTO tbl_ocorrencias( assunto, status, protocolo, data, email, logradouro, numero, complemento, bairro, estado, cep, descricao) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
        values: [assunto, status, protocolo, data, email, logradouro, numero, complemento, bairro, estado, cep, descricao],
    }
    console.log(insertQuery)

    let client = await conexao.pool.connect()

    let resultado = await client.query(insertQuery)

    client.release()

    return resultado
}

async function consultarEmail(email) {
    try {
        const selectQuery = {
            text: 'SELECT * FROM tbl_pessoas where email = $1',
            values: [email],
        }
        let client = await conexao.pool.connect();
        let resultado = await client.query(selectQuery);

        client.release();

        return resultado.rows[0].email
    }
    catch {
        return undefined
    }

}

async function consultarId(email) {
    try {
        const selectQuery = {
            text: 'SELECT * FROM tbl_pessoas where email = $1',
            values: [email],
        }
        let client = await conexao.pool.connect();
        let resultado = await client.query(selectQuery);

        client.release();

        return resultado.rows[0].id_pessoa
    }
    catch {
        return undefined
    }

}

module.exports = { cadastrarOcorrencia, consultarEmail, consultarId }
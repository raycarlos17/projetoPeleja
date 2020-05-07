const conexao = require('../database/postgreslq')

async function cadastrarOcorrencia(assunto, cep, status, protocolo, data, email) {

    const insertQuery = {
        text: 'INSERT INTO tbl_ocorrencias( assunto, cep, status, protocolo, data) VALUES($1, $2, $3, $4, $5)',
        values: [assunto, cep, status, protocolo, data, email],
    }
    console.log(insertQuery)

    let client = await conexao.pool.connect()

    let resultado = await client.query(insertQuery)

    client.release()

    return resultado
}

module.exports = { cadastrarOcorrencia }
const conexao = require('../database/postgreslq')

async function inserirPessoa(email, nome, senha, cpf, telefone) {

    const insertQuery = {
        text: 'INSERT INTO tbl_pessoas( email, nome, senha, cpf, telefone) VALUES($1, $2, $3, $4, $5) RETURNING id_pessoa',
        values: [email, nome, senha, cpf, telefone],
    }
    console.log(insertQuery)

    let client = await conexao.pool.connect()

    let resultado = await client.query(insertQuery)

    client.release()

    return resultado
}

function realizaLoginPessoa(email){

    const selectQuery = {
        text: 'SELECT * FROM tbl_pessoas where email = $1 ',
        values: [email],
    }

    const promise = new Promise((resolve, reject) =>{
        conexao.pool.connect( (err, client, release) => {
        
            if (err) {
                console.error('Error acquiring client', err.stack)
            }       
            client.query(selectQuery , (err, result) => {         
                if (err) {
                    console.error('Error executing query', err.stack)
                    reject(err)
                }
                else{
                    resolve(result.rows);
                }     
            })
        
        })
    })
    return promise;

}

module.exports = { inserirPessoa, realizaLoginPessoa }
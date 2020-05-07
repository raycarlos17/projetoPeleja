const conexao = require('../database/postgreslq')

function findByLogin(email){

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

module.exports = { findByLogin }
const { Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ProjetoPeleja',
    password: 'admin'
})

module.exports = {pool}
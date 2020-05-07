const express = require('express')
const router = express.Router()



const realizaLogin = require('../middlewares/realizaLogin')

router.post('/projeto-peleja/login',
    realizaLogin.realizaLogin
)

module.exports = router
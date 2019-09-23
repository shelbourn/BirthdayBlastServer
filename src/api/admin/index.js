const express = require('express')

const adminGet = require('./get')

const router = express.Router()

router.use('/adminGet', adminGet)

module.exports = router

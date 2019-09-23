const express = require('express')

const listGet = require('./get')

const router = express.Router()

router.use('/listGet', listGet)

module.exports = router

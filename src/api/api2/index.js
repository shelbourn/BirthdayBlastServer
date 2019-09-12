const express = require('express')

const math = require('./math')

const router = express.Router()

router.use('/math', math)

module.exports = router

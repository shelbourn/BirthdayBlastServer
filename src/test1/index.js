const express = require('express')

const randomString = require('./randomString')

const router = express.Router()

router.use('/randomString', randomString)

module.exports = router

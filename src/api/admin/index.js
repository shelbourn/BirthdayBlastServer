const express = require('express')

const adminGet = require('./get')
const adminPost = require('./post')

const router = express.Router()

router.use('/adminGet', adminGet)
router.use('/adminPost', adminPost)

module.exports = router

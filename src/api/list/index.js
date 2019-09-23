const express = require('express')

const listGet = require('./get')
const listPost = require('./post')

const router = express.Router()

router.use('/listGet', listGet)
router.use('/listPost', listPost)

module.exports = router

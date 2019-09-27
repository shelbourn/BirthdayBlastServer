const express = require('express')

const listGet = require('./get')
const listPost = require('./post')
// const listDelete = require('./delete')
// const listPut = require('./put')

const router = express.Router()

router.use('/listGet', listGet)
router.use('/listPost', listPost)
// router.use('/listDelete', listDelete)
// router.use('/listPut', listPut)

module.exports = router

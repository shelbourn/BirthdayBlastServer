const express = require('express')

const adminGet = require('./get')
const adminPost = require('./post')
// const adminDelete = require('./delete')
// const adminPut = require('./put')

const router = express.Router()

router.use('/adminGet', adminGet)
router.use('/adminPost', adminPost)
// router.use('/adminDelete', adminDelete)
// router.use('./adminPut', adminPut)

module.exports = router

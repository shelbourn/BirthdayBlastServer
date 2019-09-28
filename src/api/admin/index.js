const express = require('express')

const adminGet = require('./adminGet')
const adminPost = require('./adminPost')
// const adminDelete = require('./delete')
// const adminPut = require('./put')
// const adminPatch = require('./patch')

const router = express.Router()

router.use('/adminGet', adminGet)
router.use('/adminPost', adminPost)
// router.use('/adminDelete', adminDelete)
// router.use('./adminPut', adminPut)
// router.use('./adminPatch', adminPatch)

module.exports = router

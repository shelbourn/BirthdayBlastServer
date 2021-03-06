const express = require('express')

const listGet = require('./listGet')
const listPost = require('./listPost')
const listDelete = require('./listDelete')
const listPut = require('./listPut')
// const listPatch = require('./patch')

const router = express.Router()

router.use('/listGet', listGet)
router.use('/listPost', listPost)
router.use('/listDelete', listDelete)
router.use('/listPut', listPut)
// router.use('/listPatch', listPatch)

module.exports = router

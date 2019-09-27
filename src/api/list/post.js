const express = require('express')

const router = express.Router()

const { listData } = require('../../data')

router.post('/', (req, res) => {
	res.json(listData)
})

module.exports = router

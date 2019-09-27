const express = require('express')

const router = express.Router()

const { listData } = require('../../data')

router.get('/', (req, res) => {
	console.log(router, listData)
	res.json(listData)
})

module.exports = router

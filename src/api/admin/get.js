const express = require('express')

const router = express.Router()

const { adminData } = require('../../data')

router.get('/', (req, res) => {
	const lastInIndex = adminData.pop()
	console.log(lastInIndex)
	res.json(lastInIndex)
})

module.exports = router

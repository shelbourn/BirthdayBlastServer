const express = require('express')

const router = express.Router()

const { adminDataStore } = require('../../data')

router.get('/', (req, res) => {
	const lastInIndex = adminDataStore.pop()
	console.log(lastInIndex)
	res.json(lastInIndex)
})

module.exports = router

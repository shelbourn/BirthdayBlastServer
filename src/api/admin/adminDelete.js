const express = require('express')

const router = express.Router()

const { adminDataStore } = require('../../data')

router.delete('/', (req, res) => {
	res.json(adminDataStore)
})

module.exports = router

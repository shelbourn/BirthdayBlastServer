const express = require('express')

const router = express.Router()

const { listDataStore } = require('../../data')

router.delete('/', (req, res) => {
	console.log(listDataStore)
	res.json(listDataStore)
})

module.exports = router

const express = require('express')

const router = express.Router()

const { adminDataStore } = require('../../data')

router.post('/', (req, res) => {
	adminDataStore.push(req.body)
	console.log(adminDataStore)
	return res.json('POST SUCCESSFUL in Admin Data Store!')
})

module.exports = router

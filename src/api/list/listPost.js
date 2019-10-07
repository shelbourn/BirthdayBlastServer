const express = require('express')

const router = express.Router()

const { validateObjectSize, validateParams } = require('../../validation')
const { listDataStore } = require('../../data')

// Posts record to DB if validation passes
router.post('/', (req, res) => {
	if (validateObjectSize(req.body) && validateParams(req.body)) {
		console.log('Success! Your record has been added :): ', req.body)
		listDataStore.push(req.body)
		return res.json(listDataStore)
	}
	const error = res.status(400).send('Oops, try again!') // is this correct?
	console.log(error)
	return error
})

module.exports = router

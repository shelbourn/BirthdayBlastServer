const express = require('express')

const router = express.Router()

const { listDataStore } = require('../../data')

const { validateObjectSize, validateParams } = require('../../validation')

// Deletes record from DB if email exists and validation passes
router.delete('/', (req, res) => {
	listDataStore.forEach((data, i) => {
		if (
			data.email === req.body.email &&
			validateObjectSize(req.body) &&
			validateParams(req.body)
		) {
			console.log(
				"Success! Your record has been deleted. We're sorry to see you go. :("
			)
			listDataStore.splice(i) // Delete record if PK 'email' matches a record in database
		} else if (
			data.email === req.body.email &&
			(validateObjectSize(req.body) === false ||
				validateParams(req.body) === false)
		) {
			const error = res.status(400).send('Oops, try again!') // is this correct?
			console.log(error)
			return error
		}
		return data
	})
	console.log(listDataStore)
	res.json(listDataStore)
})

module.exports = router

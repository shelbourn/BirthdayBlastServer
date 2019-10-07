const express = require('express')

const router = express.Router()

const { listDataStore } = require('../../data')

const { validateObjectSize, validateParams } = require('../../validation')

/*
{
	"name":"Erica",
	"email": "a@aol.com",
	"phone": "562",
	"bday": "8-18",
	"notificationTime": "12pm"
}
*/

// Updated record in DB only if email exists and validation passes
router.put('/', (req, res) => {
	listDataStore.forEach((data, i) => {
		if (
			data.email === req.body.email &&
			validateObjectSize(req.body) &&
			validateParams(req.body)
		) {
			console.log('Success! Your record has been updated! :)')
			listDataStore[i] = req.body // Push data to record based on email as PK
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

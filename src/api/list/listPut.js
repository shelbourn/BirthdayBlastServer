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

// Put only if email matches PK of record in database and if validation passes
router.put('/', (req, res) => {
	listDataStore.forEach((data, i) => {
		if (
			data.email === req.body.email &&
			validateObjectSize(req.body) &&
			validateParams(req.body)
		) {
			listDataStore[i] = req.body // Push data to record based on email as PK
			// listDataStore.splice(i) ->> delete data
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

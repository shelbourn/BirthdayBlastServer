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

// router.post('/', (req, res) => {
// 	if (validationObjectSize(req.body) && validateParams(req.body)) {
// 		console.log('success: ', req.body)
// 		listDataStore.push(req.body)
// 		return res.json(listDataStore)
// 	}
// 	const error = res.status(400).send('Oops, try again!') // is this correct?
// 	console.log(error)
// 	return error
// })

// Put only if email matches PK of record in database and if validation passes

router.put('/', (req, res) => {
	listDataStore.forEach((data, i) => {
		if (
			data.email === req.body.email &&
			validateObjectSize(req.body) &&
			validateParams(req.body)
		) {
			listDataStore[i] = req.body // Pushed data to record based on email as PK
			// listDataStore.splice(i) ->> delete data
		}
		return data
		// const error = res.status(400).send('Oops, try again!') // is this correct?
		// console.log(error)
		// return error
	})
	console.log(listDataStore)
	res.json(listDataStore)
})

module.exports = router

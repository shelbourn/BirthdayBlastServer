const express = require('express')

const router = express.Router()

const {
	validationObjectSize,
	validateParams
} = require('../../validation').default
const { listDataStore } = require('../../data')

/*
const body = {
	"name":"Erica",
	"email": "a@aol.com",
	"phone": "562",
	"bday": "8-18",
	"notificationTime": "8am"
}
*/

router.post('/', (req, res) => {
	if (validationObjectSize(req.body) && validateParams(req.body)) {
		console.log('success: ', req.body)
		listDataStore.push(req.body)
		return res.json(listDataStore)
	}
	const error = res.status(400).send('Oops, try again!') // is this correct?
	console.log(error)
	return error
})

module.exports = router

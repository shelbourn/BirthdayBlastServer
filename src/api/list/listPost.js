const express = require('express')

const router = express.Router()

const { listDataStore } = require('../../data')

/*
{
	"name":"Erica",
	"email": "a@aol.com",
	"phone": "562",
	"bday": "8-18",
	"notificationTime": "8am"
}
*/

const validation = body => {
	const keys = Object.keys(body)
	console.log(keys, keys.length)
	if (keys.length === 5) {
		return keys.length // true. 5, '5', {}?, []?
	}
	return 0 // false, 0, '0', null, undefined
}

router.post('/', (req, res) => {
	if (validation(req.body)) {
		console.log('success: ', req.body)
		listDataStore.push(req.body)
		return res.json('POST SUCCESSFUL!!! And matt is a bitch!')
	}
	const error = res.status(400).send('Oops, try again!') // is this correct?
	console.log(error)
	return error
})

module.exports = router

// test

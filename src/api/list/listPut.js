const express = require('express')

const router = express.Router()

const { listDataStore } = require('../../data')

/*
{
	"name":"Erica",
	"email": "a@aol.com",
	"phone": "562",
	"bday": "8-18",
	"notificationTime": "12pm"
}
*/

// req.body.email

router.put('/', (req, res) => {
	console.log(listDataStore)
	res.json('Update Successful!!!')
})

module.exports = router

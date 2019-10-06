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
	listDataStore.forEach((data, i) => {
		if (data.email === req.body.email) {
			listDataStore[i] = req.body // Pushed data to record based on email as PK
			// listDataStore.splice(i) ->> delete data
		}
		return data
	})
	console.log(listDataStore)
	res.json(listDataStore)
})

module.exports = router

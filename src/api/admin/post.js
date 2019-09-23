const express = require('express')

const router = express.Router()

// Establishes Admin Post Route

router.post('/', (req, res) => {
	console.log(req.body)
	res.json(req.body)
})

module.exports = router

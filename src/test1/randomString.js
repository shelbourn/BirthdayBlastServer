const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.json([math.random()])
})

module.exports = router

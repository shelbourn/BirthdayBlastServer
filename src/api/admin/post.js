const express = require('express')

const router = express.Router()

const { adminData } = require('../../data')

router.post('/', (req, res) => {
	res.json(adminData)
})

module.exports = router

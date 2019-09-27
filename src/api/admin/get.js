const express = require('express')

const router = express.Router()

const { adminData } = require('../../data')

router.get('/', (req, res) => {
	res.json(adminData)
})

module.exports = router

const express = require('express')

const admin = require('./admin')
const list = require('./list')

const router = express.Router()

router.get('/', (req, res) => {
	res.json({
		message: 'API/V1 - 👋🌎🌍🌏'
	})
})

router.use('/admin', admin)
router.use('/list', list)

module.exports = router

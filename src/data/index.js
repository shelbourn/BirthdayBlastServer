// Prevents having to repeat calls to router in every route

const express = require('express')

const router = express.Router()

const data = {
	router,
	adminData: ['🦄', '🌈', '👋'],
	listData: ['😀', '😳', '🙄']
}

// Spread operator seperates data into its separate object

module.exports = { ...data }

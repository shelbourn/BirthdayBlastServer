const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')
const api2 = require('./api/api2')

const app = express()

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
console.log('ENV: ', process.env.NODE_ENV)

app.get('/', (req, res) => {
	res.json({
		message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
	})
})

app.post('/post', (req, res) => {
	console.log(req.body)
	// const value = req.body.data
	// if (typeof value === 'number') {
	// 	res.json({ message: value + 1000 })
	// } else {
	// 	res.json({ anotherMessage: 'send a number FOo! 🦄' })
	// }
	res.json(req.body)
})

app.use('/api/v1', api) // Establises 'v1' as route
app.use('/api2', api2)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app

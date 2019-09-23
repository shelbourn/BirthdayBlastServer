const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')

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

app.use('/api/v1', api) // Establises 'v1' as route

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app

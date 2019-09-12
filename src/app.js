const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

require('dotenv').config()

const middlewares = require('./middlewares')
const api = require('./api')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
console.log(process.env.test.NODE_ENV)
app.get('/', (req, res) => {
	res.json({
		message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
	})
})

app.post('/', (req, res) => {
	console.log(req)
})

app.use('/api/v1', api) // Establises 'v1' as route

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app

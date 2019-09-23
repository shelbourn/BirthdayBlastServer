// Establishes Admin Post Route

app.post('/adminPost', (req, res) => {
	console.log(req.body)
	res.json(req.body)
})

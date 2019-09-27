const { router, listData } = require('../../data')

router.post('/', (req, res) => {
	res.json(listData)
})

module.exports = router

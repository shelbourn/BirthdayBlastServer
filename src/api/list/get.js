const { router, listData } = require('../../data')

router.get('/', (req, res) => {
	res.json(listData)
})

module.exports = router

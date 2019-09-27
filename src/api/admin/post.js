const { router, adminData } = require('../../data')

router.post('/', (req, res) => {
	res.json(adminData)
})

module.exports = router

const { router, adminData } = require('../../data')

router.get('/', (req, res) => {
	res.json(adminData)
})

module.exports = router

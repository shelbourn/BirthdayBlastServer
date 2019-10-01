const validationObjectSize = body => {
	const keys = Object.keys(body)
	console.log(keys, keys.length)
	if (keys.length === 5) {
		return keys.length // true. 5, '5', {}?, []?
	}
	return 0 // false, 0, '0', null, undefined
}

const validateParams = body => {
	const regex = '/^(()?d{3}())?(-|s)?d{3}(-|s)d{4}$/'
	if (
		typeof body.name !== 'string' &&
		typeof body.email !== 'string' &&
		typeof body.phone !== 'string'
	) {
		if (regex.test(body.phone)) {
			// test using RegEx tester
			return true
		}
		return false
	}
	return false
}

module.exports = {
	validationObjectSize,
	validateParams
}

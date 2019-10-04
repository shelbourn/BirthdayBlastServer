const validationObjectSize = body => {
	const keys = Object.keys(body)
	console.log(keys, keys.length)
	if (keys.length === 5) {
		return keys.length // true. 5, '5', {}?, []?
	}
	return 0 // false, 0, '0', null, undefined
}

const validatePhone = body => {
	if (/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(body.phone)) {
		return true
	}
	return false
}

const validateParams = body => {
	// const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	if (
		typeof body.name !== 'string' ||
		typeof body.email !== 'string' ||
		typeof body.phone !== 'string' ||
		typeof body.bday !== 'string' ||
		typeof body.notificationTime !== 'string' ||
		validatePhone !== true
	) {
		return false
		// if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(body.phone)) {
		// 	return body.phone
		// }
		// return false
	}
	return true
}

module.exports = {
	validationObjectSize,
	validateParams
}

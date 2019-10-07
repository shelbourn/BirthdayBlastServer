// Validation of array size
const validateObjectSize = body => {
	const keys = Object.keys(body)
	console.log(keys, keys.length)
	if (keys.length === 5) {
		return keys.length // true. 5, '5', {}?, []?
	}
	return 0 // false, 0, '0', null, undefined
}

// Validation of array parameters
const regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/ // Tests Phone number for formattin
const regexDate = /^\d{1,2}\/\d{1,2}$/ // Tests bday date for formatting

const validateParams = body => {
	if (
		typeof body.name !== 'string' || // needed OR operator instead of AND (|| not &&)
		typeof body.email !== 'string' ||
		typeof body.phone !== 'string' ||
		typeof body.bday !== 'string' ||
		typeof body.notificationTime !== 'string' ||
		regexPhone.test(body.phone) !== true || // needed to test regex on phone within function
		regexDate.test(body.bday) !== true
	) {
		return false
	}
	return true
}

// Exports validation consts for use in other files
module.exports = {
	validateObjectSize,
	validateParams
}

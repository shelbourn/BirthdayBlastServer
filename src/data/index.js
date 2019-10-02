// NoSQL-style Database

const data = {
	adminData: ['🦄', '🌈', '👋'],
	listData: ['😀', '😳', '🙄'],
	listDataStore: [
		{
			name: 'Bob',
			email: 'b@aol.com',
			phone: '714',
			bday: '8-18',
			notificationTime: '10am'
		},
		{
			name: 'Erica',
			email: 'a@aol.com',
			phone: '562',
			bday: '9-27',
			notificationTime: '8am'
		}
	],
	adminDataStore: []
}

// Spread operator seperates data into its separate object

module.exports = { ...data }

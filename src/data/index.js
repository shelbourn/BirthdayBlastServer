// NoSQL-style Database

const data = {
	adminData: ['🦄', '🌈', '👋'],
	listData: ['😀', '😳', '🙄'],

	// ListBdayTable
	listDataStore: [
		{
			foreignKey: 1,
			name: 'Andy',
			email: 'a@aol.com',
			phone: '562',
			bday: '9-27',
			notificationTime: '8am'
		},
		{
			foreignKey: 1,
			firstName: 'Mike',
			lastName: 'Shelbourn',
			email: 'b@aol.com',
			phone: '562',
			bday: '9-27',
			notificationTime: '8am'
		}
	],
	// AdminTable
	adminDataStore: [
		{
			primaryKey: 1,
			firstName: 'Matt',
			lastName: 'Shelbourn',
			email: 'admin@aol.com',
			phone: '562',
			bday: '9-27',
			notificationTime: '8am'
		}
	]
}

// Spread operator seperates data into its separate object

module.exports = { ...data }

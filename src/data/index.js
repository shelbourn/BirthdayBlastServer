// NoSQL-style Database

const data = {
	adminData: ['🦄', '🌈', '👋'],
	listData: ['😀', '😳', '🙄'],
	listDataStore: []
}

// Spread operator seperates data into its separate object

module.exports = { ...data }

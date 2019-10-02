// NoSQL-style Database

const data = {
	adminData: ['🦄', '🌈', '👋'],
	listData: ['😀', '😳', '🙄'],
	listDataStore: [],
	adminDataStore: []
}

// Spread operator seperates data into its separate object

module.exports = { ...data }

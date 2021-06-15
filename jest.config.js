module.exports = {
	clearMocks: true,
	collectCoverage: true,
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['js', 'node'],
	modulePathIgnorePatterns: [
		'<rootDir>/.cache',
		'<rootDir>/.refs',
		'<rootDir>/coverage',
		'<rootDir>/node_modules',
	]
};

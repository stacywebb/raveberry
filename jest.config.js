module.exports = {
	preset: 'ts-jest',
	"moduleNameMapper": {
		"^@src/(.*)$": [
			"<rootDir>/static/ts/$1",
		]
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

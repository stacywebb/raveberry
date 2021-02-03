module.exports = {
	preset: 'ts-jest',
	"moduleNameMapper": {
		"^@src/(.*)$": [
			"<rootDir>/frontend/ts/$1",
		]
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

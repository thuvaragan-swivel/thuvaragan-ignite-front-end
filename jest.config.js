const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testMatch: ['**/*.test.jsx'],
};

module.exports = createJestConfig(config);

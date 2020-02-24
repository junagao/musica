module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>src/__tests__/setup/setupEnzyme.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    './src/**/*.js',
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

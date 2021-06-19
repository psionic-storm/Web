module.exports = {
  name: 'psionic-storm-test',
  moduleNameMapper: {
    '^Apis(.*)$': '<rootDir>/src/apis$1',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.js',
  ],
};

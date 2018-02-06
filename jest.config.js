module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.{ts,tsx}'],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'], //allow absolute imports eg import Button from 'src/comps/Button'
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tools/jest/fileMock.js',
    '\\.(eot|otf|ttf|woff|woff2)$': '<rootDir>/tools/jest/fileMock.js',
    '\\.(mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/jest/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/tools/jest/styleMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    window: {
      navigator: {},
    },
    'ts-jest': {
      useBabelrc: true,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/tools/jest/jest.setup.js'],
  testResultsProcessor: 'jest-junit',
  mapCoverage: true,
  coverageDirectory: '/temp/jestCoverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.story.tsx',
    '!src/**/*.d.ts',
  ],
};

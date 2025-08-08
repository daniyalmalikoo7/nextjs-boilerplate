// jest.config.mjs (ES Module version)
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'], // Runs src/test/setup.ts after Jest is set up but before each test file. This is where you'd put global test configuration like importing @testing-library/jest-dom.
  testEnvironment: 'jest-environment-jsdom', // Makes Jest simulate a browser environment instead of Node.js, so you can test React components that use DOM APIs.
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', // Finds: src/components/__tests__/Button.test.tsx
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}', // Finds: src/utils/format.test.ts
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/test/e2e/',
  ],
  coverageDirectory: 'coverage',
  coverageDirectory: 'coverage', // Put coverage reports in /coverage folder
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Test coverage for all source files
    '!src/**/*.d.ts', // EXCEPT TypeScript definition files
    '!src/test/**', // EXCEPT test files themselves
    '!src/app/layout.tsx', // EXCEPT Next.js layout (usually not much logic)
    '!src/app/globals.css', // EXCEPT CSS files
  ],
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  maxWorkers: '50%',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

export default createJestConfig(customJestConfig);

// jest.config.js
module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageReporters: ["text", "cobertura"],

  // jest.config.js

  reporters: ["default", "jest-junit"],

  // where to put the code coverage reports.
  coverageDirectory: "./coverage",

  coveragePathIgnorePatterns: ["./jest"],

  // A path to a module which exports an async function that is triggered once before all test suites
};

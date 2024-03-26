module.exports = {
  jest: {
    configure: {
      collectCoverageFrom: [
        "!**/src/types/**",
        "!**/__test__/mocks/**",
        "!**/src/index.tsx",
        "src/**/*.{ts,tsx}",
      ],
      coverageThreshold: {
        global: {
          lines: 80,
        },
      },
      coverageDirectory: "./reports/tests/unit/coverage",
      coverageReporters: ["lcov", "text", "json-summary"],
      reporters: [
        "default",
        [
          "jest-html-reporters",
          {
            publicPath: "./reports/tests/unit",
            filename: "unit-test-report.html",
            pageTitle: "Unit Test Report",
            expand: true,
            inlineSource: true,
          },
        ],
      ],
    },
  },
};

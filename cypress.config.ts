import { defineConfig } from "cypress";

const REPORTS_PATH = "reports/tests/e2e";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        },
      });
    },
  },
  env: {
    baseUrl: "http://localhost:3000",
    apiEndPointUrl: "https://astrostreakstest.co/api",
    config: "LOCAL",
  },
  videosFolder: `${REPORTS_PATH}/videos`,
  screenshotsFolder: `${REPORTS_PATH}/screenshots`,
  reporter: "mochawesome",
  // For combining multiple specs on a single HTML report,
  // check https://docs.cypress.io/guides/tooling/reporters#Spec-to-STDOUT-produce-a-combined-Mochawesome-JSON-file
  reporterOptions: {
    reportFilename: "e2e-test-report.html",
    reportDir: REPORTS_PATH,
    json: false,
  },
});

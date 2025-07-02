import { defineConfig } from 'cypress';

// @ts-ignore
import generated from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4201',
    supportFile: './cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      generated(on, config);
      return config;
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },

  video: false,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: './target/cypress-reports/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
});

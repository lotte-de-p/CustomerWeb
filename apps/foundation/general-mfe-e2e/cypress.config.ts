import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

const e2eNx = nxE2EPreset(__dirname);
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4206',
    ...e2eNx,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    video: false,
    experimentalSessionAndOrigin: true, // used  in combo with cy.session()
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 2,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../../dist/cypress/apps/foundation/general-mfe-e2e/reports/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
});

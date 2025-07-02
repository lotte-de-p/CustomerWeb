import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'cypress' }),
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:4213',
    specPattern: './**/*.cy.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: 'src/support/e2e.ts',
    video: true,

    reporter: 'junit',
    reporterOptions: {
      mochaFile: '../../dist/cypress/apps/sim-management-e2e/reports/TEST-[hash].xml',
      rootSuiteTitle: 'Cypress Tests',
      testCaseSwitchClassnameAndName: 'true',
    },
    videosFolder: '../../../dist/cypress/sim-management-e2e/videos',
    screenshotsFolder: '../../../dist/cypress/sim-management-e2e/screenshots',
  },
});

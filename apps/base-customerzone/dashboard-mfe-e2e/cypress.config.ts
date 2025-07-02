import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';

export default defineConfig({
  e2e: {
    ...nxE2EStorybookPreset(__dirname),
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: './dist/cypress-reports/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
});

import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/angular/plugins/component-testing';

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    specPattern: '**/*.cy.ts',
    supportFile: './cypress/support/component.ts',
    devServer: {
      ...nxComponentTestingPreset(__filename).devServer,
      webpackConfig: {
        ...require('./coverage.webpack').default,
      },
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,

  video: true,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../../../coverage/cypress/sales/customer-registration/ui/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
  videosFolder: '../../../../dist/cypress/sales/customer-registration/ui/videos',
  screenshotsFolder: '../../../../dist/cypress/sales/customer-registration/ui/screenshots',
  fixturesFolder: '../../../../coverage/cypress/sales/customer-registration/ui/fixtures',
});

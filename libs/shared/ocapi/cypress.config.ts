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
      options: {
        projectConfig: {
          root: '',
          sourceRoot: '.',
          buildOptions: {
            polyfills: ['../../../apps/foundation/general-mfe/src/polyfills.ts'],
            tsConfig: './cypress/tsconfig.cy.json',
          },
        },
      },
      framework: 'angular',
      bundler: 'webpack',
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,

  video: false,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../../../coverage/cypress/ocapi/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
  screenshotsFolder: '../../../../coverage/cypress/ocapi/screenshots',
  fixturesFolder: '../../../../coverage/cypress/ocapi/fixtures',
});

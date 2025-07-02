import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/angular/plugins/component-testing';

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    supportFile: './cypress/support/component.ts',
    specPattern: '**/*.cy.ts',
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
            polyfills: ['zone.js', '../../../../apps/sales/sales-mfe/src/polyfills.ts'],
            tsConfig: './cypress/tsconfig.cy.json',
            assets: [
              {
                glob: '**/*',
                input: '../../../../apps/sales/sales-mfe/src/assets',
                output: 'assets/',
              },
              {
                glob: '**/*',
                input: '../../../../node_modules/atomic-library/public',
                output: 'assets/',
              },
            ],
            styles: ['../../../../apps/sales/sales-mfe/src/styles.scss'],
          },
        },
      },
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,

  video: true,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../../../coverage/cypress/sales/shared/feat-sales-stepper/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
  videosFolder: '../../../../dist/cypress/sales/shared/feat-sales-stepper/videos',
  screenshotsFolder: '../../../../dist/cypress/sales/shared/feat-sales-stepper/screenshots',
  fixturesFolder: '../../../../coverage/cypress/sales/shared/feat-sales-stepper/fixtures',
});

import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';

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
            polyfills: ['zone.js'],
            tsConfig: './cypress/tsconfig.cy.json',
            assets: [
              {
                glob: '**/*',
                input: '../../../../../apps/telenet-customerzone-dashboard-mfe/src/assets',
                output: 'assets/',
              },
              {
                glob: '**/*',
                input: '../../../../../node_modules/atomic-library/public',
                output: 'assets/',
              },
            ],
            styles: ['../../../../../apps/telenet-customerzone-dashboard-mfe/src/styles.scss'],
          },
        },
      },
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080,

  video: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile:
      '../../../../../coverage/cypress/engagement/telenet-customerzone-dashboard/engagement/feature-device/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
});

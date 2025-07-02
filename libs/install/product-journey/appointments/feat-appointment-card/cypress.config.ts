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
            polyfills: ['../../../../../apps/install/product-journey-mfe/src/polyfills.ts'],
            tsConfig: './cypress/tsconfig.cy.json',
            assets: [
              {
                glob: '**/*',
                input: '../../../../../node_modules/atomic-library/public',
                output: 'assets',
              },
            ],
            styles: ['../../../../../apps/install/product-journey-mfe/src/styles.scss'],
          },
        },
      },
    },
    viewportWidth: 1920,
    viewportHeight: 1080,

    video: true,
    reporter: 'junit',
    reporterOptions: {
      mochaFile:
        '../../../../../coverage/cypress/product-journey-mfe/appointments/feat-appointment-card/TEST-[hash].xml',
      rootSuiteTitle: 'Cypress Tests',
      testCaseSwitchClassnameAndName: 'true',
    },
    videosFolder: '../../../../../dist/cypress/install/product-journey-mfe/appointments/feat-appointment-card/videos',
    screenshotsFolder:
      '../../../../../dist/cypress/install/product-journey-mfe/appointments/feat-appointment-card/screenshots',
    fixturesFolder: '../../../../../coverage/cypress/product-journey-mfe/appointments/feat-appointment-card/fixtures',
  },
});

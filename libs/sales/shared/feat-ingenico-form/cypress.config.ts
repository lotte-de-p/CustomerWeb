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
            polyfills: ['zone.js'],
            assets: [
              {
                glob: '**/*',
                input: '../../../../node_modules/atomic-library/public',
                output: 'assets/',
              },
            ],
            styles: [
              '../../../../node_modules/atomic-library/public/styles/telenet-generic-classes.css',
              '../../../../node_modules/atomic-library/public/styles/telenet-plugins.css',
              '../../../../node_modules/atomic-library/public/styles/telenet-themes.css',
              '../../../../node_modules/atomic-library/public/styles/telenet-fonts.css',
              '../../../../node_modules/atomic-library/public/styles/telenet-atomic-comps.css',
              '../../../../node_modules/atomic-library/public/styles/telenet-aem-cats/general.css',
            ],
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
    mochaFile: '../../../../coverage/cypress/sales',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
});

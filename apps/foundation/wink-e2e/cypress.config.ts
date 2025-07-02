import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';

export default defineConfig({
  e2e: {
    ...nxE2EStorybookPreset(__dirname),
    defaultCommandTimeout: 10000,
    experimentalSessionAndOrigin: true, // used  in combo with cy.session()
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      return config;
    },
    supportFile: 'src/support/e2e.ts',
    specPattern: '../../../libs/foundation/wink/core/src/components/**/*.cy.{js,jsx,ts,tsx}',
    includeShadowDom: true,
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

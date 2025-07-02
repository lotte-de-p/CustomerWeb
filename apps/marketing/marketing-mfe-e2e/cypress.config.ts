import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';

export default defineConfig({
  e2e: nxE2EStorybookPreset(__dirname),

  video: true,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../../dist/cypress/apps/marketing/marketing-mfe-e2e/reports/TEST-[hash].xml',
    rootSuiteTitle: 'Cypress Tests',
    testCaseSwitchClassnameAndName: 'true',
  },
});

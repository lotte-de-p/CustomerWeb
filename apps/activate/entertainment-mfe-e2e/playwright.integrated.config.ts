import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const ENVS = {
  uat_telenet: 'https://www.uat.telenet.be',
};

const baseConfig = playwrightConfig(
  'apps/activate/entertainment-mfe-e2e/',
  ENVS[process.env['E2E_ENVIRONMENT'] || 'uat_telenet']
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e/integrated' }),
  ...baseConfig,
  use: {
    ...baseConfig.use,
    trace: 'on-first-retry',
  },
});

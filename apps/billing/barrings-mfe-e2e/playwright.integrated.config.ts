import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const ENVS = {
  int_telenet: 'https://www.int.telenet.be',
  int: 'https://www.int.base.be',
};

const baseConfig = playwrightConfig('apps/billing/barrings-mfe-e2e/', ENVS[process.env['E2E_ENVIRONMENT'] || 'int']);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e/integrated' }),
  ...baseConfig,
  use: {
    ...baseConfig.use,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});

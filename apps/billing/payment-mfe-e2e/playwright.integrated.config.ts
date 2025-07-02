import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const ENVS = {
  int: 'https://www.int.telenet.be',
};

const baseConfig = playwrightConfig('apps/billing/payment-mfe-e2e/', ENVS[process.env['E2E_ENVIRONMENT'] || 'int']);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e/integrated' }),
  ...baseConfig,
  use: {
    ...baseConfig.use,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});

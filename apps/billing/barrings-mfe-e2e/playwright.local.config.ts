import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const baseConfig = playwrightConfig(
  'apps/billing/barrings-mfe-e2e/',
  'http://localhost:4211/',
  'npx nx run customer-web-billing-barrings-mfe:serve:development'
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e/local' }),
  ...baseConfig,
});

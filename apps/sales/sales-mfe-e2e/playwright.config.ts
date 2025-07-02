import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const baseConfig = playwrightConfig(
  'apps/sales/sales-mfe-e2e/',
  'http://localhost:4205',
  'npx nx run sales-mfe:serve:development'
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e-pl' }),
  ...baseConfig,
});

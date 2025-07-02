import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const baseConfig = playwrightConfig(
  'apps/account/entertainment-management-mfe-e2e/',
  'http://localhost:4207',
  'npx nx run entertainment-management-mfe:serve:development'
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e' }),
  ...baseConfig,
});

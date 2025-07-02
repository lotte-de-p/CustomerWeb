import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const baseConfig = playwrightConfig(
  'apps/foundation/general-mfe-e2e/',
  'http://localhost:4206',
  'npx nx run general-mfe:serve:development'
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e-pl' }),
  ...baseConfig,
});

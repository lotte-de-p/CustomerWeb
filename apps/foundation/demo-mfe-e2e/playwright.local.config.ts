import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const baseConfig = playwrightConfig(
  'apps/foundation/demo-mfe-e2e/',
  'http://localhost:4203',
  'npx nx run demo-mfe:serve:development'
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e' }),
  ...baseConfig,
});

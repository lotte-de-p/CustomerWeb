import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { playwrightConfig } from '@tools/e2e';

const ENVS = {
  int: 'https://www.int.telenet.be',
};

const baseConfig = playwrightConfig(
  'apps/foundation/demo-mfe-e2e/',
  ENVS[process.env['E2E_ENVIRONMENT'] || 'int'],
  undefined,
  true
);

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src/e2e/integrated' }),
  ...baseConfig,
});

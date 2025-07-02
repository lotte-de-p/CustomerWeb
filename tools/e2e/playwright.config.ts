import { PlaywrightTestConfig } from '@playwright/test';

export const playwrightConfig = (
  applicationRootPath: string,
  webServerUrl: string,
  command?: string,
  headless = true
): PlaywrightTestConfig => {
  return {
    testMatch: '*.pl.ts',
    retries: process.env['CI'] ? 3 : 0,
    maxFailures: process.env['CI'] ? 2 : 0,
    timeout: 120000,
    use: {
      headless,
      screenshot: 'only-on-failure',
      baseURL: webServerUrl,
    },
    webServer: command
      ? {
          command,
          timeout: process.env['CI'] ? 120000 : 60000,
          reuseExistingServer: !process.env['CI'],
          url: webServerUrl,
        }
      : undefined,
    projects: [
      {
        name: 'tgPlaywrightCoverageProject',
        use: {
          ignoreHTTPSErrors: true, // in case your certificate isn't properly signed
          browserName: 'chromium',
        },
      },
    ],
    reporter: [
      ['list', { printSteps: true }],
      [
        'monocart-reporter',
        {
          name: 'Playwright Reporter',
          outputFile: `./coverage/playwright/${applicationRootPath}/reports.html`,
          coverage: {
            entryFilter: (entry: { [key: string]: string }) => {
              const url = entry['url'];
              return url.includes('bootstrap_ts.js') || url.includes('_index_ts.js' || url.includes('main.js'));
            },
            sourceFilter: (sourcePath: string) => {
              return !sourcePath.includes('node_modules');
            },
            lcov: true,
            reports: [
              [
                'cobertura',
                {
                  file: '../cobertura-coverage.xml',
                },
              ],
            ],
          },
        },
      ],
    ],
  };
};

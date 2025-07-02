import { test as testBase, expect, Page as PageBase } from '@playwright/test';
import { addCoverageReport } from 'monocart-reporter';
import { LoginPage } from './login-page';

type Page = PageBase;
export type BaseFixture = {
  baseFixture: [
    ({ page }: { page: Page }, use: Function) => Promise<void>,
    { scope: 'test'; auto?: boolean; option?: boolean; timeout?: number | undefined },
  ];
};

const test = testBase.extend<BaseFixture>({
  baseFixture: [
    async ({ page }: { page: Page }, use: Function) => {
      if (process.env['E2E_ENVIRONMENT']) {
        return await use('baseFixture');
      }
      const isPlaywrightCoverageProject = test.info().project.name === 'tgPlaywrightCoverageProject';

      if (isPlaywrightCoverageProject) {
        await Promise.all([
          page.coverage.startJSCoverage({
            resetOnNavigation: false,
          }),
          page.coverage.startCSSCoverage({
            resetOnNavigation: false,
          }),
        ]);
      }

      await use('baseFixture');

      if (isPlaywrightCoverageProject) {
        const [jsCoverage, cssCoverage] = await Promise.all([
          page.coverage.stopJSCoverage(),
          page.coverage.stopCSSCoverage(),
        ]);
        const coverageList = [...jsCoverage, ...cssCoverage];
        await addCoverageReport(coverageList, test.info());
      }
    },
    {
      scope: 'test',
      auto: true,
    },
  ],
});
export { test, expect, Page, LoginPage };

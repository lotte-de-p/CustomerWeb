import { test as baseTest } from '@tools/e2e';
import { PayByMobilePage } from '../page-objects/pay-by-mobile.po';
import { devices } from 'playwright/test';

const IPHONE12 = devices['iPhone 12'];
const BROWSER = devices['Desktop Chrome'];

export type TestFixture = {
  payByMobilePage: PayByMobilePage;
};

export const APPLICATION_PREFIX = 'payment-mfe';

export const test = baseTest.extend<TestFixture>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...BROWSER,
    });
    await use(context);
  },
  page: async ({ context }, use: Function) => {
    const page = await context.newPage();
    await use(page);
  },
  payByMobilePage: async ({ page }, use: Function) => {
    await use(new PayByMobilePage(page));
  },
});

export const testMobile = baseTest.extend<TestFixture>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...IPHONE12,
    });
    await use(context);
  },
  page: async ({ context }, use: Function) => {
    const page = await context.newPage();
    await use(page);
  },
  payByMobilePage: async ({ page }, use: Function) => {
    await use(new PayByMobilePage(page));
  },
});

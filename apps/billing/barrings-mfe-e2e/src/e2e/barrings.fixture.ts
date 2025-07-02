import { test as baseTest } from '@tools/e2e';
import { BarringsPage } from '../page-objects/barrings.po';
import { devices } from 'playwright/test';

const IPHONE12 = devices['iPhone 12'];
const BROWSER = devices['Desktop Chrome'];

export type TestFixture = {
  barringsPage: BarringsPage;
};

export const APPLICATION_PREFIX = 'barrings-mfe';

export const test = baseTest.extend<TestFixture>({
  barringsPage: async ({ page }, use: Function) => {
    await use(new BarringsPage(page));
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
  barringsPage: async ({ page }, use: Function) => {
    await use(new BarringsPage(page));
  },
});

export const testBrowser = baseTest.extend<TestFixture>({
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
  barringsPage: async ({ page }, use: Function) => {
    await use(new BarringsPage(page));
  },
});

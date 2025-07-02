import { test as baseTest } from '@tools/e2e';
import { EntertainmentPage } from '../page-objects/entertainment.po';

export type TestFixture = {
  entertainmentPage: EntertainmentPage;
};

export const APPLICATION_PREFIX = 'entertainment-mfe';

export const test = baseTest.extend<TestFixture>({
  entertainmentPage: async ({ page }, use: Function) => {
    await use(new EntertainmentPage(page));
  },
});

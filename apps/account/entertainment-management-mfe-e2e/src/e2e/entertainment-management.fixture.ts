import { test as baseTest } from '@tools/e2e';
import { EntertainmentManagementPage } from '../page-objects/entertainment-management.po';

export type TestFixture = {
  entertainmentManagementPage: EntertainmentManagementPage;
};

export const APPLICATION_PREFIX = 'entertainment-management-mfe';

export const test = baseTest.extend<TestFixture>({
  entertainmentManagementPage: async ({ page }, use: Function) => {
    await use(new EntertainmentManagementPage(page));
  },
});

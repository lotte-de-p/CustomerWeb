import { test as baseTest } from '@tools/e2e';
import { BillingOverviewPage } from '../page-objects/billing-overview.po';

export type TestFixture = {
  billingOverviewPage: BillingOverviewPage;
};

export const APPLICATION_PREFIX = 'invoice-mfe';

export const test = baseTest.extend<TestFixture>({
  billingOverviewPage: async ({ page }, use: Function) => {
    await use(new BillingOverviewPage(page));
  },
});

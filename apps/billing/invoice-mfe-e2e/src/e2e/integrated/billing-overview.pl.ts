import { expect, LoginPage } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../billing-overview.fixture';
import { BillingOverviewPage } from '../../page-objects';

const BILLING_OVERVIEW_PAGE_LANDING = '/residential/nl/sandbox/ellen/selfcare/mfe/billing-overview-component';

const test = baseTest.extend<TestFixture>({
  billingOverviewPage: async ({ page }, use: Function) => {
    await page.goto(BILLING_OVERVIEW_PAGE_LANDING);
    await new LoginPage(page).login('Manager_1017569204_hssxag@telenetgroup.be', 'Test@12345');
    await page.waitForURL(BILLING_OVERVIEW_PAGE_LANDING);
    await use(new BillingOverviewPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Billing Overview`, () => {
  test('should render the page', async ({ billingOverviewPage }) => {
    await expect(billingOverviewPage.root).toBeVisible();
    await expect(billingOverviewPage.unpaidInvoices).toHaveCount(1);
    const invoice = billingOverviewPage.getUnpaidInvoice(0);
    await expect(invoice.date).toHaveText('26 februari');
    await expect(invoice.amount).toHaveText('€ 134,16');
  });
});

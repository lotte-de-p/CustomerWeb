import { expect, Page } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest } from '../billing-overview.fixture';

import billingAccounts from './mock/billing-accounts-mock.json';
import { BillingAccountSelectorComponent, BillingOverviewPage } from '../../page-objects';

const GET_BILLING_ACCOUNTS = '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts';
const URL = '/billing-account-selector';

type TestFixture = {
  billingAccountSelector: BillingAccountSelectorComponent;
};

const test = baseTest.extend<TestFixture>({
  billingAccountSelector: async ({ page }: { page: Page }, use: Function) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({ json: billingAccounts });
    });
    await page.goto(URL);
    await page.waitForURL('/billing-account-selector');
    await use(new BillingOverviewPage(page).billingAccountSelector);
  },
});

test.describe(`${APPLICATION_PREFIX}: Billing Account Selector`, () => {
  test('should be able to switch between billing accounts', async ({ billingAccountSelector }) => {
    await expect(billingAccountSelector.selected).toHaveText('123456');
    await billingAccountSelector.open();
    await expect(billingAccountSelector.list).toBeVisible();
    await expect(billingAccountSelector.items).toHaveCount(4);
    await billingAccountSelector.items.nth(2).click();
    await expect(billingAccountSelector.selected).toHaveText('453278');
  });

  test('should show different types of billing accounts', async ({ billingAccountSelector }) => {
    await billingAccountSelector.open();
    await expect(billingAccountSelector.list).toBeVisible();
    await expect(billingAccountSelector.items).toHaveCount(4);
    await checkBillingAccount(
      billingAccountSelector,
      0,
      '123456',
      'Teststraat 1, 2000 Antwerpen',
      'Betaald',
      'icon-md icon-check-shape-filled color-notification--success--light'
    );
    await checkBillingAccount(
      billingAccountSelector,
      1,
      '987654',
      'Willy Wonkastraat 101, 9000 Gent',
      'Te betalen',
      'icon-md icon-information-shape-filled color-notification--info--light'
    );
    await checkBillingAccount(
      billingAccountSelector,
      2,
      '453278',
      'Rue de la Loi 666, 1000 Brussel',
      'Aanrekening te laat',
      'icon-md icon-error-shape-filled color-notification--error--light'
    );
  });

  test('should show error if call failed', async ({ page, billingOverviewPage }) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({
        status: 404,
        json: { error: 'error' },
      });
    });
    await page.goto(URL);
    await expect(billingOverviewPage.billingAccountsError).toBeVisible();
  });

  test('should show message if no billing accounts', async ({ page, billingOverviewPage }) => {
    await page.route(GET_BILLING_ACCOUNTS, async (route) => {
      await route.fulfill({
        json: [],
      });
    });
    await page.goto(URL);
    await expect(billingOverviewPage.noBillingAccounts).toBeVisible();
  });

  async function checkBillingAccount(
    billingAccountSelector: BillingAccountSelectorComponent,
    index: number,
    billingAccountNumber: string,
    address: string,
    statusText: string,
    statusIcon: string
  ) {
    await expect(billingAccountSelector.getBillingAccount(index).billingAccountNumber).toHaveText(billingAccountNumber);
    await expect(billingAccountSelector.getBillingAccount(index).address).toContainText(address);
    await expect(billingAccountSelector.getBillingAccount(index).status).toHaveText(statusText);
    await expect(billingAccountSelector.getBillingAccount(index).status.locator('i')).toHaveClass(statusIcon);
  }
});

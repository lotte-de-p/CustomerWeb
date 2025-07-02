import { LoginPage, analyzeAnalyticsRequest, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../hardware-discount.fixture';
import { HardwareDiscountPage } from '../../page-objects';

import { int_users } from './int-users';

const HARDWARE_DISCOUNT_PAGE_LANDING = '/residential/nl/mijn-telenet/je-toestelkortingen';

const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page }, use: Function) => {
    await use(new HardwareDiscountPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Hardware discount`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING);
    const user = getUserByType('manager_with_4out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);
  });

  test('As an analytics person, I want to receive the correct analytics event when clicking on the use discount button', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const searchParam = 'v175=use discount clicked';
    const expectedParams = {
      v175: 'use discount clicked',
      v179: 'click',
      v127: 'hardware',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    hardwareDiscountPage.hardwareDiscountOverview.useDiscountButton.click();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when clicking on the see invoice button', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const searchParam = 'v175=see hardware invoice clicked';
    const expectedParams = {
      v175: 'see hardware invoice clicked',
      v179: 'click',
      v127: 'hardware',
      products: '3301130',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.click();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when clicking on the view hardware invoice button', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const searchParam = 'v175=view hardware invoices clicked';
    const expectedParams = {
      v175: 'view hardware invoices clicked',
      v179: 'click',
      v127: 'hardware',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    hardwareDiscountPage.hardwareDiscountPreviousBills.link.first().click();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when clicking on the view remaining discount link', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const searchParam = 'v175=terms and conditions clicked';
    const expectedParams = {
      v175: 'terms and conditions clicked',
      v179: 'click',
      v127: 'hardware',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink.click();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when clicking on the terms and conditions link', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const searchParam = 'v175=view remaining discount value clicked';
    const expectedParams = {
      v175: 'view remaining discount value clicked',
      v179: 'click',
      v127: 'hardware',
      products: '3301130',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    hardwareDiscountPage.hardwareDiscountDetails.remainingButton.click();
    await analyticsRequestAnalyzed;
  });
});

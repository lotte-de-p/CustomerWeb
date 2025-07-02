import { expect } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../hardware-discount.fixture';

import userdetails from './mock/userdetails-mock.json';
import hardwareInvoice from './mock/hardware-invoice-mock.json';
import allHardwareDiscountsAvailable from './mock/hardware-discount-all-discounts-available-mock.json';
import fewHardwareDiscountsAvailable from './mock/hardware-discount-few-discounts-available-mock.json';
import badPayer from './mock/hardware-discount-bad-payer.json';
import invoiceErrors from './mock/hardware-discount-invoice-errors-mock.json';
import noDiscountsLeft from './mock/hardware-discount-no-discounts-available-mock.json';

import { HardwareDiscountPage } from '../../page-objects';
import { PAGE_HARDWARE_DISCOUNT, DISCOUNT_OVERVIEW_ENDPOINT } from '../../support';

const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page, hardwareDiscountPage }, use: Function) => {
    await page.route('/oauth/userdetails', async (route) => {
      await route.fulfill({ json: userdetails });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);
    await page.waitForURL(PAGE_HARDWARE_DISCOUNT);
    await use(hardwareDiscountPage);
  },
});

test.describe(`${APPLICATION_PREFIX}: Hardware Discount`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_HARDWARE_DISCOUNT);
  });

  test('should render the page', async ({ hardwareDiscountPage }: { hardwareDiscountPage: HardwareDiscountPage }) => {
    await expect(hardwareDiscountPage.root).toBeVisible();
  });

  test('should show overview section when all discounts are available', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: allHardwareDiscountsAvailable });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountOverview.title).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.promoIcon).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableDescription).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.useDiscountButton).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsText).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink).toBeVisible();
  });

  test('should show overview section and discount details when few discounts are used', async ({
    page,
    hardwareDiscountPage,
  }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: fewHardwareDiscountsAvailable });
    });
    await page.route(
      '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview/6579123/invoices/245900090524',
      async (route) => {
        await route.fulfill({ json: hardwareInvoice });
      }
    );
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountOverview.title).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.promoIcon).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableDescription).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.useDiscountButton).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsText).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink).toBeVisible();

    await expect(hardwareDiscountPage.hardwareDiscountDetailsTitle).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceImage).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.noDeviceImage).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceBrand).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceName).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.price).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.durationLeftBadge).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingAmount).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.orderInProgressBadge).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.plannedDeliveryDate).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.parcelTrackingOrder).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingButton).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toHaveCount(2);
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.icon.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.info.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountPreviousBills.icon.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountPreviousBills.title.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountPreviousBills.link.first()).toBeVisible();

    await hardwareDiscountPage.hardwareDiscountDetails.remainingButton.first().click();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.discountTracker).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.first().click();
  });

  test('should show overview section with bad payer', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: badPayer });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountOverview.title).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.promoIcon).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableDescription).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.useDiscountButton).toBeHidden();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsText).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.badPayerMsg).toBeVisible();
  });

  test('should show error dialog when invoice is not available', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: invoiceErrors });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toHaveCount(2);

    // invoice not generated yet -> invoice == null
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.first().click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.close.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();

    // invoice generated but pdf not available yet
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.last().click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.closeCross.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
  });

  test('should render correctly when no discounts left', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: noDiscountsLeft });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toContainText('/5');
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toContainText('0');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.self).toHaveCount(5);
  });

  test('should show error dialog when invoice the API throws error', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: invoiceErrors });
    });
    await page.route(
      '/public/api/customer-web-account-discount-overview-cs/v1/discount-overview/6579124/invoices/245900090525',
      async (route) => {
        await route.fulfill({
          status: 500,
          json: { error: 'error' },
        });
      }
    );
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.last().click();

    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.close.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
  });

  test('should show contract details', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: badPayer });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await hardwareDiscountPage.hardwareDiscountDetails.remainingButton.click();

    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.self).toHaveCount(12);

    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.self.nth(0)).toHaveClass(
      /steps-tracker__step--completed/
    );
    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.date.nth(0)).toContainText('23/10/2024');
    await expect(
      hardwareDiscountPage.hardwareDiscountDetails.contractDetails.icon.locator('.icon-tick').nth(0)
    ).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.price.nth(0)).toContainText('€100,00');

    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.self.nth(2)).toHaveClass(
      /steps-tracker__step--active/
    );
    await expect(hardwareDiscountPage.hardwareDiscountDetails.contractDetails.self.nth(11)).toHaveClass(/tracker-step/);
  });

  test('should show information for pending order', async ({ page, hardwareDiscountPage }) => {
    await page.route(DISCOUNT_OVERVIEW_ENDPOINT, async (route) => {
      await route.fulfill({ json: fewHardwareDiscountsAvailable });
    });
    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceImage.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceBrand.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.orderInProgressBadge.last()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceName.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.price.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.plannedDeliveryDate).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.plannedDeliveryDate).toContainText('23/09/2024');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingButton.nth(0)).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.parcelTrackingOrder).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.parcelTrackingOrder).toContainText('44212537383');
    await hardwareDiscountPage.hardwareDiscountDetails.parcelTrackingOrder.click();
  });

  test('should show error when something goes wrong', async ({ page, hardwareDiscountPage }) => {
    await page.route('/public/api/customer-web-account-discount-overview-cs/v1/discount-overview', async (route) => {
      await route.fulfill({
        status: 500,
        json: { error: 'error' },
      });
    });

    await page.goto(PAGE_HARDWARE_DISCOUNT);

    await expect(hardwareDiscountPage.pageError.self).toContainText('ocapi.500');
  });
});

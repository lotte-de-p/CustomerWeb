import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../hardware-discount.fixture';
import { HardwareDiscountPage } from '../../page-objects';

import { int_users } from './int-users';

const HARDWARE_DISCOUNT_PAGE_LANDING = '/residential/en/sandbox/hardware-discount-migrated';
const HARDWARE_DISCOUNT_PAGE_LANDING_SOHO = '/business/nl/soho/customer-zone/discount-overview';

const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page }, use: Function) => {
    await use(new HardwareDiscountPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Hardware discount`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING);
  });

  test('As a manager, I should see an overlay error message when consulting my bill when it is not generated yet on the hardware discount page overview section', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const user = getUserByType('manager_with_4out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toContainText(
      'Sorry, the file is not available yet'
    );
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toContainText(
      'Check the details of this bill tomorrow'
    );
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.close.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.closeCross.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
  });

  test('As a soho manager, I should see an overlay error message when consulting my bill when it is not generated yet on the hardware discount page overview section', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const user = getUserByType('manager_soho_with_5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING_SOHO);
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING_SOHO);
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toContainText(
      'Sorry, the file is not available yet'
    );
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toContainText(
      'Check the details of this bill tomorrow'
    );
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.close.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
    await hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.closeCross.click();
    await expect(hardwareDiscountPage.hardwareDiscountDownloadErrorDialog.self).toBeHidden();
  });
});

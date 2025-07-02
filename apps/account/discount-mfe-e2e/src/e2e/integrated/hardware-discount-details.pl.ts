import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../hardware-discount.fixture';
import { HardwareDiscountPage } from '../../page-objects';

import { int_users } from './int-users';

const HARDWARE_DISCOUNT_PAGE_LANDING = '/residential/en/customer-zone/discount-overview/';

const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page }, use: Function) => {
    await use(new HardwareDiscountPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Hardware discount`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING);
  });

  test('As a manager, I should see the correct discount details on the hardware discount page details section', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const user = getUserByType('manager_with_4out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);

    await expect(hardwareDiscountPage.hardwareDiscountDetailsTitle).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetailsTitle).toContainText('In use');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceImage).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceImage).toHaveAttribute('src', new RegExp('png'));
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceBrand).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceBrand).toContainText('Samsung');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceName).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.deviceName).toContainText('Samsung Galaxy S24 5G 128GB');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.price).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.price).toContainText('€');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.price).toContainText('799');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingAmount).toContainText('€');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingAmount).toContainText(
      new RegExp('[0-9]+,[0-9]{2}')
    );
    await expect(hardwareDiscountPage.hardwareDiscountDetails.durationLeftBadge.last()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.durationLeftBadge.last()).toContainText('12 months left');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.showInvoiceButton).toContainText('View bill');
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingButton).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountDetails.remainingButton).toContainText('Show remaining discount');
  });

  test('As a manager with a running contract (or contract in progress), I should see an extra info message', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const user = getUserByType('manager_with_4out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);

    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.self).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.icon.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.info.first()).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.info.first()).toContainText(
      'Do you want to use another discount?'
    );
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.info.first()).toContainText(
      'You must cancel your subscription and pay the remaining amount via your Telenet settlement'
    );
  });

  test('As a contract holder without a running contract (or contract in progress), I should see no extra info message', async ({
    hardwareDiscountPage,
    page,
  }) => {
    const user = getUserByType('contractholder_with_5out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);

    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.self).toBeHidden();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.icon.first()).toBeHidden();
    await expect(hardwareDiscountPage.hardwareDiscountAdditionalInfo.info.first()).toBeHidden();
  });
});

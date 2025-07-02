import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../hardware-discount.fixture';
import { HardwareDiscountPage } from '../../page-objects';

import { int_users } from './int-users';

const HARDWARE_DISCOUNT_PAGE_LANDING = 'residential/en/customer-zone/discount-overview/';

const test = baseTest.extend<TestFixture>({
  hardwareDiscountPage: async ({ page }, use: Function) => {
    await use(new HardwareDiscountPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Hardware discount`, () => {
  test('As an anonymous user, I should see a message to login on the hardware discount page', async ({ page }) => {
    const hardwareDiscountPage = new HardwareDiscountPage(page);
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING);
    await page.locator(hardwareDiscountPage.login.acceptCookiesLocator).click();
    await expect(hardwareDiscountPage.login.button).toBeVisible();
    await expect(hardwareDiscountPage.login.message).toContainText('Log in to view your personal data.');
  });

  test('As a manager, I should see the correct discount details on the hardware discount page overview section', async ({
    hardwareDiscountPage,
    page,
  }) => {
    await page.goto(HARDWARE_DISCOUNT_PAGE_LANDING);
    const user = getUserByType('manager_with_4out5_discounts', int_users);
    await new LoginPage(page).login(user.username, user.password);
    await page.waitForURL(HARDWARE_DISCOUNT_PAGE_LANDING);
    await expect(hardwareDiscountPage.hardwareDiscountOverview.title).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.title).toContainText('Available');
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toContainText('/5 Remaining discount');
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableSlots).toContainText('4');
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableDescription).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.availableDescription).toContainText(
      'Use your discounts for the best offers in our web shop.'
    );
    await expect(hardwareDiscountPage.hardwareDiscountOverview.useDiscountButton).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsText).toBeVisible();
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsText).toContainText(
      'If you are using a discount, you commit yourself to a Telenet contract for 12 months. Do you want to cancel the contract in order to use the discount again? You can do this by paying for the remaining months.'
    );
    await expect(hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink).toBeVisible();
    await hardwareDiscountPage.hardwareDiscountOverview.termsAndConditionsLink.click();
    await page.waitForURL('/terms-and-conditions');
  });
});

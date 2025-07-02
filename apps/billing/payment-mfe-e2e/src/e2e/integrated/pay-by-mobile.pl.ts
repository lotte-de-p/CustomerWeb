import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, testMobile, TestFixture } from '../pay-by-mobile.fixture';

import { int_users } from './int-users';

const PAY_BY_MOBILE_PAGE_LANDING = '/residential/nl/mijn-telenet/mobile-new';

const testGroups = [
  { name: 'Pay by mobile - browser view', device: baseTest },
  { name: 'Pay by mobile - mobile view', device: testMobile },
];

for (const { name, device } of testGroups) {
  const test = device.extend<TestFixture>({});
  test.describe(`${APPLICATION_PREFIX}: ${name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(PAY_BY_MOBILE_PAGE_LANDING);
    });

    test('As an anonymous user, I should see a message to login on the pay-by-mobile page', async ({
      page,
      payByMobilePage,
    }) => {
      await page.goto(PAY_BY_MOBILE_PAGE_LANDING);
      await payByMobilePage.login.acceptCookiesButton.click();
      await expect(payByMobilePage.login.button).toBeVisible();
      await expect(payByMobilePage.login.message).toContainText('Meld je aan om je persoonlijke info te bekijken');
    });

    test('As a manager user, I should see a skeleton loader while loading data on the pay-by-mobile page', async ({
      page,
    }) => {
      page.route(
        '**/ocapi/public/api/pay-by-mobile-service/v1/pay-by-mobile/initial-transactions/**',
        async (route) => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await route.continue();
        }
      );
      const user = getUserByType('customer_with_pay_by_mobile', int_users);
      await new LoginPage(page).login(user.username, user.password);
      await page.waitForURL(PAY_BY_MOBILE_PAGE_LANDING);
      await expect(page.locator('.skeleton--v2')).toHaveCount(6);
    });

    test('As a manager with pay-by-mobile barred, I should see the correct error message on the pay-by-mobile page', async ({
      page,
      payByMobilePage,
    }) => {
      const user = getUserByType('customer_with_pay_by_mobile_barred', int_users);
      await new LoginPage(page).login(user.username, user.password);
      await page.waitForURL(PAY_BY_MOBILE_PAGE_LANDING);

      await expect(payByMobilePage.mobileLineSelector.selected).toBeVisible();

      await expect(payByMobilePage.notificationMessage.title).toBeVisible();
      await expect(payByMobilePage.notificationMessage.description).toBeVisible();
    });

    test('As a member with a mobile line, I should see my transactions and subscriptions on the pay-by-mobile page', async ({
      page,
      payByMobilePage,
    }) => {
      const user = getUserByType('member_with_mobile_line', int_users);
      await new LoginPage(page).login(user.username, user.password);
      await page.waitForURL(PAY_BY_MOBILE_PAGE_LANDING);
      await expect(payByMobilePage.mobileLineSelector.selected).toBeVisible();
      await expect(payByMobilePage.mobileLineSelector.selected).toContainText(user.mobile?.phoneNumber as string);
      await expect(payByMobilePage.transactionsTitle).toBeVisible();
      await expect(payByMobilePage.subscriptionsTitle).toBeVisible();
      await expect(payByMobilePage.noContentMessage.self).toHaveCount(2);
    });
  });
}

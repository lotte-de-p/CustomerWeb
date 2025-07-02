import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, testBrowser, testMobile, TestFixture } from '../barrings.fixture';
import { int_users } from './int-users';
import formatMobileNumber from '../../support/mobile.utils';

const BARRINGS_PAGE_LANDING = '/en/customer-zone/mobile/barrings';

const testGroups = [
  { name: 'Mobile barrings - browser view', device: testBrowser },
  { name: 'Mobile barrings - mobile view', device: testMobile },
];

for (const { name, device } of testGroups) {
  const test = device.extend<TestFixture>({});
  test.describe(`${APPLICATION_PREFIX}: ${name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(BARRINGS_PAGE_LANDING);
    });

    test('SECAXR-3126 Barrings - As a not logged in manager, I cannot see the mobile barrings page', async ({
      page,
      barringsPage,
    }) => {
      await page.locator(barringsPage.login.acceptCookiesLocator).click();
      await expect(barringsPage.login.icon).toBeVisible();
      await expect(barringsPage.login.message).toBeVisible();
      await expect(barringsPage.login.button).toBeVisible();
    });

    test('SECAXR-3128 As a manager with one active mobile line, I should see the mobile barrings page with my configurations', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_mobile_post_paid_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await page.route('**/ocapi/public/api/mobile-barrings-service/v1/mobile-barrings/**', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await route.continue();
      });

      await page.reload();
      await expect(page.locator('.skeleton')).toHaveCount(5);

      await expect(barringsPage.generalBarringsGroup().self).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().self).toBeVisible();
      await expect(barringsPage.premiumVoiceBarringsGroup().self).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup().self).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup().self).toBeVisible();
    });

    test(
      'SECAXR-3129 As a member with a single mobile line, I see the line selector displayed on the mobile barrings page, ' +
        'along with the correct information for my line',
      async ({ page, barringsPage }) => {
        const user = getUserByType('member_with_mobile_post_paid_subscription', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.mobileLineSelector.self).toBeVisible();
        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(user.mobile!.phoneNumber!)
        );
        await expect(barringsPage.mobileLineSelector.changeMobileLine).toBeHidden();

        await expect(barringsPage.notificationBanner.self.nth(0)).toBeVisible();
        await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toBeVisible();

        await expect(barringsPage.generalBarringsGroup().self).toBeVisible();
        await expect(barringsPage.roamingBarringsGroup().self).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().self).toBeVisible();
        await expect(barringsPage.premiumSmsBarringsGroup().self).toBeVisible();
        await expect(barringsPage.payByMobileBarringsGroup().self).toBeVisible();

        await expect(barringsPage.generalBarringsGroup().editBarringsButton).toBeHidden();
      }
    );

    test(
      'SECAXR-3130 As a manager with two mobile lines from which one of them activation is pending, ' +
        'I should see a message on the barrings page to indicate that that specific line is not activated yet',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_2_mobile_1_pending_activation', int_users);
        const memberUser = getUserByType('member_with_2_mobile_1_pending_activation_assigned', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await barringsPage.mobileLineSelector.changeMobileLine.click();
        await expect(barringsPage.mobileLineSelector.getMobileLineByIndex(1)).toBeVisible();
        await barringsPage.mobileLineSelector.getMobileLineByIndex(1).click();
        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(memberUser.mobile!.phoneNumber!)
        );
        await expect(barringsPage.noActiveProductBanner.errorImage).toBeVisible();
        await expect(barringsPage.noActiveProductBanner.entirePageMessageTitle).toBeVisible();
        await expect(barringsPage.noActiveProductBanner.entirePageMessageDescription).toBeVisible();
      }
    );

    test(
      'SECAXR-3131 As a member with one mobile line for which the activation is pending, ' +
        'I should see a message on the barrings page to indicate that the line is not activated yet',
      async ({ page, barringsPage }) => {
        const user = getUserByType('member_with_2_mobile_1_pending_activation_assigned', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(user.mobile!.phoneNumber!)
        );
        await expect(barringsPage.noActiveProductBanner.errorImage).toBeVisible();
        await expect(barringsPage.noActiveProductBanner.entirePageMessageTitle).toBeVisible();
        await expect(barringsPage.noActiveProductBanner.entirePageMessageDescription).toBeVisible();
      }
    );

    test(
      'SECAXR-3132 As a manager with multiple activated mobile lines, I should be able to use the ' +
        'line selector on the barrings page to see the configurations for the different lines',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_two_mobile_internet_billing', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(user.mobile!.phoneNumber!)
        );
        await expect(barringsPage.generalBarringsGroup().currentBarringsTitle.nth(0)).toBeVisible();
        await expect(barringsPage.generalBarringsGroup().currentBarringsDescription.nth(0)).toBeVisible();
        await barringsPage.mobileLineSelector.changeMobileLine.click();
        await barringsPage.mobileLineSelector.closeLineSelectorButton.click();
        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(user.mobile!.phoneNumber!)
        );

        await barringsPage.mobileLineSelector.changeMobileLine.click();
        await barringsPage.mobileLineSelector.getMobileLineByIndex(1).click();
        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(user.mobile!.unassignedNumber!)
        );
        await expect(barringsPage.generalBarringsGroup().currentBarringsDescription.nth(0)).toBeHidden();
      }
    );

    test('SECAXR-3133 As a member with a suspended line, I should be able to see my barrings configuration and a warning message that my barrings cannot be edited anymore', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('member_with_2_mobile_1_suspended_assigned', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toBeVisible();
      await expect(barringsPage.notificationBanner.infoIconShape.nth(1)).toBeVisible();
      await expect(barringsPage.notificationBanner.messageSpan.nth(1)).toBeVisible();
    });

    test(
      'SECAXR-3170 As a manager with multiple lines, of which one is suspended, I should be able to see ' +
        'my barrings configuration and a warning message for my suspended line that my barrings cannot be edited anymore',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_2_mobile_1_suspended', int_users);
        const memberUser = getUserByType('member_with_2_mobile_1_suspended_assigned', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.notificationBanner.self).toBeHidden();
        await barringsPage.mobileLineSelector.changeMobileLine.click();
        await barringsPage.mobileLineSelector.getMobileLineByIndex(1).click();
        await expect(barringsPage.mobileLineSelector.selectedLine).toContainText(
          formatMobileNumber(memberUser.mobile!.phoneNumber!)
        );
        await expect(barringsPage.notificationBanner.infoIconShape).toBeVisible();
        await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();
      }
    );

    test('SECAXR-3175 As a manager with no mobile lines, a message should be shown on the barrings page that I have no mobile lines', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_internet_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.errorBanner.errorImage).toBeVisible();
      await expect(barringsPage.errorBanner.self).toBeVisible();
      await expect(barringsPage.errorBanner.entirePageMessageTitle).toBeVisible();
      await expect(barringsPage.errorBanner.entirePageMessageDescription).toBeVisible();
    });

    test('SECAXR-3173 As a member with no mobile lines assigned, a message should be shown on the barrings page that I have no lines assigned', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('member_with_internet_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.errorBanner.errorImage).toBeVisible();
      await expect(barringsPage.errorBanner.self).toBeVisible();
      await expect(barringsPage.errorBanner.entirePageMessageTitle).toBeVisible();
      await expect(barringsPage.errorBanner.entirePageMessageDescription).toBeVisible();
    });
  });
}

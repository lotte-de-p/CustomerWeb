import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, testBrowser, testMobile, TestFixture } from '../barrings.fixture';
import { int_users } from './int-users';
import { BarringsGroupComponent } from '../../page-objects/barrings.po';
import { Page } from 'playwright/test';

const BARRINGS_PAGE_LANDING = '/en/customer-zone/mobile/barrings';

const ALL_SERVICES = 'All services';
const NO_BARRING_RESTRICTIONS = 'No barring restrictions';
const BAR_INCOMING_CALLS = 'Bar incoming calls';
const BAR_OUTGOING_CALLS = 'Bar outgoing calls';
const BAR_ALL_PREMIUM_RATE_NUMBERS = 'Bar all premium rate numbers';

const testGroups = [
  { name: 'Mobile barrings - browser view', device: testBrowser },
  { name: 'Mobile barrings - mobile view', device: testMobile },
];

async function waitForBarringsToBePresent(page: Page, barringsGroup: BarringsGroupComponent, expectedBarring: string) {
  let retries = 0;
  const forever = true;
  while (forever) {
    retries = retries + 1;
    if (retries > 12) {
      throw new Error('Barring setting not found');
    }
    try {
      await page.reload();
      await expect(barringsGroup.currentBarringsDescription).toContainText(expectedBarring);
      break;
    } catch (e) {
      continue;
    }
  }
}

for (const { name, device } of testGroups) {
  const test = device.extend<TestFixture>({});
  test.describe(`${APPLICATION_PREFIX}: ${name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(BARRINGS_PAGE_LANDING);
    });

    test('SECAXR-4260 As a manager with a mobile line, I should be able to manage all groups of the mobile barrings', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_mobile_post_paid_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.generalBarringsGroup().self).toBeVisible();
      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await barringsPage.generalBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.roamingBarringsGroup().self).toBeVisible();
      await barringsPage.roamingBarringsGroup().editBarringsButton.click();
      await barringsPage.roamingBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.premiumVoiceBarringsGroup().self).toBeVisible();
      await barringsPage.premiumVoiceBarringsGroup().editBarringsButton.click();
      await barringsPage.premiumVoiceBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.premiumSmsBarringsGroup().self).toBeVisible();
      await barringsPage.premiumSmsBarringsGroup().editBarringsButton.click();
      await barringsPage.premiumSmsBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.payByMobileBarringsGroup().self).toBeVisible();
      await barringsPage.payByMobileBarringsGroup().editBarringsButton.click();
      await barringsPage.payByMobileBarringsGroup().editSideSheet.cancelButton.click();
    });

    test('SECAXR-4292 As a manager with a mobile line trying to edit my barrings, I should have the option to cancel editing', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_mobile_post_paid_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await barringsPage.generalBarringsGroup().editSideSheet.cancelButton.click();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.self).toBeHidden();

      await barringsPage.roamingBarringsGroup().editBarringsButton.click();
      await barringsPage.roamingBarringsGroup().editSideSheet.cancelButton.click();
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.self).toBeHidden();

      await barringsPage.premiumVoiceBarringsGroup().editBarringsButton.click();
      await page.click('body', { position: { x: 1, y: 1 } });
      await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.self).toBeHidden();
    });

    test('SECAXR-4269 As a manager with a mobile line, I should be able to manage any barrings settings', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_mobile_post_paid_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      const currentBarrings = barringsPage
        .generalBarringsGroup()
        .currentBarringsDescription.locator(`text=${BAR_INCOMING_CALLS}`);
      try {
        await currentBarrings.waitFor({ timeout: 2000 });
        if (currentBarrings) {
          await barringsPage.generalBarringsGroup().editBarringsButton.click();
          await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(1).uncheck();
          await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
        }
      } catch (e) {
        // eslint-disable no-empty
      }
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), NO_BARRING_RESTRICTIONS);

      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(1).check();
      await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
      await expect(barringsPage.notificationBanner.successIconShape).toBeVisible();
      await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().currentBarringsDescription).toContainText(BAR_INCOMING_CALLS);
    });

    test('SECAXR-4294 As a manager with a mobile line, I can manage mutually exclusive mobile barrings', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_mobile_post_paid_subscription_unlimited_data', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      const currentBarrings = barringsPage
        .generalBarringsGroup()
        .currentBarringsDescription.locator(`text=${NO_BARRING_RESTRICTIONS}`);
      try {
        await currentBarrings.waitFor({ timeout: 2000 });
        if (currentBarrings) {
          await barringsPage.generalBarringsGroup().editBarringsButton.click();
          await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(2).check();
          await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
        }
      } catch (e) {
        // eslint-disable no-empty
      }
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), BAR_OUTGOING_CALLS);

      await barringsPage.premiumVoiceBarringsGroup().editBarringsButton.click();
      await barringsPage.premiumVoiceBarringsGroup().editSideSheet.getBarringSwitchWithIndex(0).check();
      await barringsPage.premiumVoiceBarringsGroup().editSideSheet.saveButton.click();
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), NO_BARRING_RESTRICTIONS);
      await waitForBarringsToBePresent(page, barringsPage.premiumVoiceBarringsGroup(), BAR_ALL_PREMIUM_RATE_NUMBERS);
    });

    test('SECAXR-4261 As a manager with a mobile line with global barrings enabled, I should be able to only manage the global barrings settings', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_global_all_mobile_barrings_enabled', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      const currentBarrings = barringsPage
        .generalBarringsGroup()
        .currentBarringsDescription.locator(`text=${NO_BARRING_RESTRICTIONS}`);
      try {
        await currentBarrings.waitFor({ timeout: 2000 });
        if (currentBarrings) {
          await barringsPage.generalBarringsGroup().editBarringsButton.click();
          await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(0).check();
          await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
          await barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationButton.click();
        }
      } catch (e) {
        // eslint-disable no-empty
      }
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), ALL_SERVICES);

      await expect(barringsPage.notificationBanner.infoIconShape).toBeVisible();
      await expect(barringsPage.notificationBanner.messageDiv.nth(1)).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().editBarringsButton).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().editBarringsButton).toBeHidden();
      await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
      await expect(barringsPage.premiumSmsBarringsGroup().editBarringsButton).toBeHidden();
      await expect(barringsPage.payByMobileBarringsGroup().editBarringsButton).toBeHidden();

      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(1)).toBeDisabled();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(2)).toBeDisabled();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(3)).toBeDisabled();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(4)).toBeDisabled();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(5)).toBeDisabled();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(6)).toBeDisabled();
      await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(0).uncheck();
      await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
      await expect(barringsPage.generalBarringsGroup().confirmationSideSheet.title).toBeVisible();
      await barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationButton.click();

      await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();
      await expect(barringsPage.notificationBanner.self).toHaveCount(1);
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), NO_BARRING_RESTRICTIONS);

      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(0).check();
      await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
      await barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationCancelButton.click();
      await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
      await expect(barringsPage.generalBarringsGroup().confirmationSideSheet.title).toBeVisible();
      await barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationButton.click();
      await waitForBarringsToBePresent(page, barringsPage.generalBarringsGroup(), ALL_SERVICES);
    });

    test('SECAXR-5362 As a manager with a mobile line with datasim, I can see the correct translations on the barrings page', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('manager_with_datasim', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.generalBarringsGroup().title).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().description).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().currentBarringsDescription).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().editBarringsButton).toBeVisible();
      await barringsPage.generalBarringsGroup().editBarringsButton.click();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.title).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.allBarrings).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.barrings).toHaveCount(4);
      await expect(barringsPage.generalBarringsGroup().editSideSheet.saveButton).toBeVisible();
      await expect(barringsPage.generalBarringsGroup().editSideSheet.cancelButton).toBeVisible();
      await barringsPage.generalBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.roamingBarringsGroup().title).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().description).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().currentBarringsDescription).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().editBarringsButton).toBeVisible();
      await barringsPage.roamingBarringsGroup().editBarringsButton.click();
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.title).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.allBarrings).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.barrings).toHaveCount(3);
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.saveButton).toBeVisible();
      await expect(barringsPage.roamingBarringsGroup().editSideSheet.cancelButton).toBeVisible();
      await barringsPage.roamingBarringsGroup().editSideSheet.cancelButton.click();

      await expect(barringsPage.premiumSmsBarringsGroup(2).title).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).description).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).currentBarringsDescription).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).editBarringsButton).toBeVisible();
      await barringsPage.premiumSmsBarringsGroup(2).editBarringsButton.click();
      await expect(barringsPage.premiumSmsBarringsGroup(2).editSideSheet.title).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).editSideSheet.allBarrings).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).editSideSheet.barrings).toHaveCount(4);
      await expect(barringsPage.premiumSmsBarringsGroup(2).editSideSheet.saveButton).toBeVisible();
      await expect(barringsPage.premiumSmsBarringsGroup(2).editSideSheet.cancelButton).toBeVisible();
      await barringsPage.premiumSmsBarringsGroup(2).editSideSheet.cancelButton.click();

      await expect(barringsPage.payByMobileBarringsGroup(3).title).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).description).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).currentBarringsDescription).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).editBarringsButton).toBeVisible();
      await barringsPage.payByMobileBarringsGroup(3).editBarringsButton.click();
      await expect(barringsPage.payByMobileBarringsGroup(3).editSideSheet.title).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).editSideSheet.allBarrings).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).editSideSheet.barrings).toHaveCount(1);
      await expect(barringsPage.payByMobileBarringsGroup(3).editSideSheet.saveButton).toBeVisible();
      await expect(barringsPage.payByMobileBarringsGroup(3).editSideSheet.cancelButton).toBeVisible();
      await barringsPage.payByMobileBarringsGroup(3).editSideSheet.cancelButton.click();
    });

    test(
      'SECAXR-5072 As a manager with an active mobile line with global barrings enabled, I should be able to see a message ' +
        'that the global barrings are enabled and that a member cannot adjust this',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_global_all_mobile_barrings_enabled', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.notificationBanner.infoIconShape).toBeVisible();
        await expect(barringsPage.notificationBanner.messageTitle).toBeVisible();
        await barringsPage.notificationBanner.messageSpan.click();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.allBarrings).toBeVisible();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(0)).toBeEnabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(1)).toBeDisabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(2)).toBeDisabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(3)).toBeDisabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(4)).toBeDisabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(5)).toBeDisabled();
        await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(6)).toBeDisabled();
      }
    );
  });
}

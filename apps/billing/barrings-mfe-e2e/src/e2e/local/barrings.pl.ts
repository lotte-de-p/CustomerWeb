import { expect } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../barrings.fixture';

import userdetails from './mock/userdetails-mock.json';
import noMobileLineMock from './mock/barrings-no-mobile-line-mock.json';
import mobileLineMock from './mock/barrings-mobile-line-mock.json';
import multipleMobileLinesMock from './mock/barrings-multiple-mobile-lines-mock.json';
import suspendedMobileLinesMock from './mock/barrings-suspended-mobile-lines-mock.json';

import barringsMock from './mock/barrings-no-barrings-mock.json';
import suspendedPremiumRateBarringsMock from './mock/barrings-premium-rate-barrings-suspended-mock.json';
import memberSuspendedPremiumRateBarringsMock from './mock/barrings-member-premium-rate-barrings-suspended-mock.json';
import suspendedBarringsMock from './mock/barrings-suspended-mock.json';
import memberSuspendedBarringsMock from './mock/barrings-member-no-barrings-suspended-mock.json';
import suspendedGlobalBarringsMock from './mock/barrings-global-barrings-suspended-mock.json';
import memberSuspendedGlobalBarringsMock from './mock/barrings-member-global-barrings-suspended-mock.json';
import memberGlobalBarringsMock from './mock/barrings-member-global-barrings-mock.json';

import { AUTHENTICATION_USER_DETAILS_ROUTE } from '../../support';
import { MobileLineSelectorComponent } from '../../page-objects/mobileLineSelector.component';
import NotificationBannerComponent from '../../page-objects/notificationBanner.component';
import { BarringsLabelKeys } from '../../page-objects';

const BARRINGS_PAGE = '/mobile-barrings';
const BARRINGS_API = '/public/api/mobile-barrings-service/v1/mobile-barrings/0469440450';
const MOBILE_LINES_API = '/public/api/mobile-line-selector-service/v1/mobile-lines';

const test = baseTest.extend<TestFixture>({
  barringsPage: async ({ page, barringsPage }, use: Function) => {
    await page.route(AUTHENTICATION_USER_DETAILS_ROUTE, async (route) => {
      await route.fulfill({ json: userdetails });
    });
    await page.goto(BARRINGS_PAGE);
    await page.waitForURL(BARRINGS_PAGE);
    await use(barringsPage);
  },
});

test.describe(`${APPLICATION_PREFIX}: Mobile barrings`, () => {
  test('should render the page', async ({ page, barringsPage }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: mobileLineMock });
    });
    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: barringsMock });
    });
    await page.reload();
    await expect(barringsPage.generalBarringsGroup().self).toBeVisible();
  });

  test('SECAXR-3127 As a manager, I should see an error message whenever the mobile barrings configuration could not be retrieved', async ({
    page,
    barringsPage,
  }) => {
    await page.route('**/ocapi/public/api/mobile-barrings-service/v1/mobile-barrings/**', async (route) => {
      await route.fulfill({
        status: 500,
      });
    });

    await page.reload();
    await expect(barringsPage.errorBanner.errorImage).toBeVisible();
    await expect(barringsPage.errorBanner.self).toBeVisible();
    await expect(barringsPage.errorBanner.entirePageMessageTitle).toContainText(
      MobileLineSelectorComponent.MOBILE_LINE_SELECTOR_ERROR_MESSAGE_TITLE_LABEL_KEY
    );
    await expect(barringsPage.errorBanner.entirePageMessageDescription).toContainText(
      MobileLineSelectorComponent.MOBILE_LINE_SELECTOR_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY
    );
  });

  test('SECAXR-4745 As a Base manager with a suspended mobile line and mobile barrings set by a fraud advisor, I see a message informing me about it', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: suspendedPremiumRateBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_FRAUD_MESSAGE_TITLE_LABEL_KEY
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_FRAUD_MESSAGE_DESCRIPTION_LABEL_KEY
    );

    await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
  });

  test('SECAXR-4747 As a Base member with a suspended mobile line and mobile barrings set by a fraud advisor, I see a message informing me about it', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: memberSuspendedPremiumRateBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_MEMBER_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.notificationBanner.messageSpan.nth(1)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(1)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_FRAUD_MESSAGE_TITLE_LABEL_KEY
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_FRAUD_MESSAGE_DESCRIPTION_LABEL_KEY
    );

    await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
  });

  test('translations - should show correct label keys for the mobile barrings - member - suspended line', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: mobileLineMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: memberSuspendedBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.mobileLineSelector.self).not.toContainText(
      MobileLineSelectorComponent.MOBILE_LINE_SELECTOR_OTHER_NUMBER_LABEL_KEY
    );

    await expect(barringsPage.generalBarringsGroup().title).toContainText(BarringsLabelKeys.GENERAL);
    await expect(barringsPage.generalBarringsGroup().description).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_DESCRIPTION
    );
    await expect(barringsPage.generalBarringsGroup().currentBarringsTitle).toContainText(
      BarringsLabelKeys.CURRENT_BARRINGS
    );
    await expect(barringsPage.generalBarringsGroup().currentBarringsDescription).toContainText(
      BarringsLabelKeys.NO_BARRINGS_RESTRICTIONS
    );

    await expect(barringsPage.roamingBarringsGroup().title).toContainText(BarringsLabelKeys.ROAMING);
    await expect(barringsPage.roamingBarringsGroup().description).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_DESCRIPTION
    );
    await expect(barringsPage.roamingBarringsGroup().currentBarringsTitle).toContainText(
      BarringsLabelKeys.CURRENT_BARRINGS
    );
    await expect(barringsPage.roamingBarringsGroup().currentBarringsDescription).toContainText(
      BarringsLabelKeys.NO_BARRINGS_RESTRICTIONS_ROAMING
    );

    await expect(barringsPage.premiumVoiceBarringsGroup().title).toContainText(BarringsLabelKeys.PREMIUM_VOICE);
    await expect(barringsPage.premiumVoiceBarringsGroup().description).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE_BARRINGS_DESCRIPTION
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().currentBarringsTitle).toContainText(
      BarringsLabelKeys.CURRENT_BARRINGS
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().currentBarringsDescription).toContainText(
      BarringsLabelKeys.NO_BARRINGS_RESTRICTIONS
    );

    await expect(barringsPage.premiumSmsBarringsGroup().title).toContainText(BarringsLabelKeys.PREMIUM_SMS);
    await expect(barringsPage.premiumSmsBarringsGroup().description).toContainText(
      BarringsLabelKeys.PREMIUM_SMS_BARRINGS_DESCRIPTION
    );
    await expect(barringsPage.premiumSmsBarringsGroup().currentBarringsTitle).toContainText(
      BarringsLabelKeys.CURRENT_BARRINGS
    );
    await expect(barringsPage.premiumSmsBarringsGroup().currentBarringsDescription).toContainText(
      BarringsLabelKeys.NO_BARRINGS_RESTRICTIONS
    );

    await expect(barringsPage.payByMobileBarringsGroup().title).toContainText(BarringsLabelKeys.PAY_BY_MOBILE);
    await expect(barringsPage.payByMobileBarringsGroup().description).toContainText(
      BarringsLabelKeys.PAY_BY_MOBILE_BARRINGS_DESCRIPTION
    );
    await expect(barringsPage.payByMobileBarringsGroup().currentBarringsTitle).toContainText(
      BarringsLabelKeys.CURRENT_BARRINGS
    );
    await expect(barringsPage.payByMobileBarringsGroup().currentBarringsDescription).toContainText(
      BarringsLabelKeys.NO_BARRINGS_RESTRICTIONS
    );
  });

  test('translations - should show correct label keys for the mobile barrings - manager - active + no active line', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: multipleMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: barringsMock });
    });

    await page.reload();
    await expect(barringsPage.mobileLineSelector.self).toContainText(
      MobileLineSelectorComponent.MOBILE_LINE_SELECTOR_OTHER_NUMBER_LABEL_KEY
    );

    await expect(barringsPage.noActiveProductBanner.entirePageMessageTitle).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_ACTIVATION_IN_PROGRESS_TITLE_LABEL_KEY
    );
    await expect(barringsPage.noActiveProductBanner.entirePageMessageDescription).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_ACTIVATION_IN_PROGRESS_DESCRIPTION_LABEL_KEY
    );
  });

  test('translations - should show correct label keys for the mobile barrings - manager - no mobile line', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: noMobileLineMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: barringsMock });
    });

    await page.reload();
    await expect(barringsPage.errorBanner.entirePageMessageTitle).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_ERROR_MESSAGE_TITLE_LABEL_KEY
    );
    await expect(barringsPage.errorBanner.entirePageMessageDescription).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY
    );
  });

  test('SECAXR-4291 As a manager with a mobile line, I should get an error message when saving my barrings fails', async ({
    page,
    barringsPage,
  }) => {
    await page.route('**/public/api/mobile-barrings-service/v1/mobile-barrings/**', async (route) => {
      if (route.request().method() === 'PATCH') {
        await route.fulfill({
          status: 500,
          json: { error: 'error' },
        });
      } else {
        await route.fulfill({ json: barringsMock });
      }
    });
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: mobileLineMock });
    });

    await page.reload();
    await barringsPage.generalBarringsGroup().editBarringsButton.click();
    await expect(
      barringsPage
        .generalBarringsGroup()
        .editSideSheet.getBarringWithName(BarringsLabelKeys.GENERAL_BARRINGS_INCOMING_CALLS)
    ).toBeVisible();
    await barringsPage
      .generalBarringsGroup()
      .editSideSheet.getBarringWithName(BarringsLabelKeys.GENERAL_BARRINGS_INCOMING_CALLS)
      .click();
    await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();

    await expect(barringsPage.notificationBanner.errorIconShape).toBeVisible();
    await expect(barringsPage.notificationBanner.self).toBeVisible();
    await expect(barringsPage.notificationBanner.messageDiv).toContainText(BarringsLabelKeys.BARRING_UPDATE_FAIL);
  });

  test('SECAXR-4296 As a manager with a mobile line, I can see the correct translations on the barrings page', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: mobileLineMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: barringsMock });
    });

    await page.reload();
    await expect(barringsPage.generalBarringsGroup().editBarringsButton).toContainText(
      BarringsLabelKeys.EDIT_BARRINGS_BUTTON
    );
    await barringsPage.generalBarringsGroup().editBarringsButton.click();
    await expect(barringsPage.generalBarringsGroup().editSideSheet.self).toContainText(BarringsLabelKeys.GENERAL);
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(0)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_ALL_SERVICES
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(1)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_INCOMING_CALLS
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(2)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_OUTGOING_CALLS
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(3)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_INCOMING_SMS
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(4)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_OUTGOING_SMS
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(5)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_MMS
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(6)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_MOBILE_DATA
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.getBarringWithIndex(7)).toContainText(
      BarringsLabelKeys.GENERAL_BARRINGS_INTERNATIONAL_CALLS_FROM_BELGIUM
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.saveButton).toContainText(
      BarringsLabelKeys.SAVE_BARRINGS_BUTTON
    );
    await expect(barringsPage.generalBarringsGroup().editSideSheet.cancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await barringsPage.generalBarringsGroup().editSideSheet.cancelButton.click();

    await expect(barringsPage.roamingBarringsGroup().editBarringsButton).toContainText(
      BarringsLabelKeys.EDIT_BARRINGS_BUTTON
    );
    await barringsPage.roamingBarringsGroup().editBarringsButton.click();
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.self).toContainText(BarringsLabelKeys.ROAMING);
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.getBarringWithIndex(0)).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_ALL_SERVICES
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.getBarringWithIndex(1)).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_INCOMING_CALLS
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.getBarringWithIndex(2)).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_OUTGOING_CALLS
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.getBarringWithIndex(3)).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_MOBILE_DATA
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.getBarringWithIndex(4)).toContainText(
      BarringsLabelKeys.ROAMING_BARRINGS_MOBILE_DATA_EXCESS_AMOUNT
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.saveButton).toContainText(
      BarringsLabelKeys.SAVE_BARRINGS_BUTTON
    );
    await expect(barringsPage.roamingBarringsGroup().editSideSheet.cancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await barringsPage.roamingBarringsGroup().editSideSheet.cancelButton.click();

    await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toContainText(
      BarringsLabelKeys.EDIT_BARRINGS_BUTTON
    );
    await barringsPage.premiumVoiceBarringsGroup().editBarringsButton.click();
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.self).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.getBarringWithIndex(0)).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE_BARRINGS_RATE_NUMBERS
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.getBarringWithIndex(1)).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE_BARRINGS_EROTIC_SERVICES
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.getBarringWithIndex(2)).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE_BARRINGS_GAMES_ETC
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.getBarringWithIndex(3)).toContainText(
      BarringsLabelKeys.PREMIUM_VOICE_BARRINGS_TELEVISION_GAMES
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.saveButton).toContainText(
      BarringsLabelKeys.SAVE_BARRINGS_BUTTON
    );
    await expect(barringsPage.premiumVoiceBarringsGroup().editSideSheet.cancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await barringsPage.premiumVoiceBarringsGroup().editSideSheet.cancelButton.click();

    await expect(barringsPage.premiumSmsBarringsGroup().editBarringsButton).toContainText(
      BarringsLabelKeys.EDIT_BARRINGS_BUTTON
    );
    await barringsPage.premiumSmsBarringsGroup().editBarringsButton.click();
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.self).toContainText(
      BarringsLabelKeys.PREMIUM_SMS
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.getBarringWithIndex(0)).toContainText(
      BarringsLabelKeys.PREMIUM_SMS_BARRINGS_GAMES_ETC
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.getBarringWithIndex(1)).toContainText(
      BarringsLabelKeys.PREMIUM_SMS_BARRINGS_PAYMENTS
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.getBarringWithIndex(2)).toContainText(
      BarringsLabelKeys.PREMIUM_SMS_BARRINGS_EROTIC_SERVICES
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.getBarringWithIndex(3)).toContainText(
      BarringsLabelKeys.PREMIUM_SMS_BARRINGS_FREE_SERVICES
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.saveButton).toContainText(
      BarringsLabelKeys.SAVE_BARRINGS_BUTTON
    );
    await expect(barringsPage.premiumSmsBarringsGroup().editSideSheet.cancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await barringsPage.premiumSmsBarringsGroup().editSideSheet.cancelButton.click();

    await expect(barringsPage.payByMobileBarringsGroup().editBarringsButton).toContainText(
      BarringsLabelKeys.EDIT_BARRINGS_BUTTON
    );
    await barringsPage.payByMobileBarringsGroup().editBarringsButton.click();
    await expect(barringsPage.payByMobileBarringsGroup().editSideSheet.self).toContainText(
      BarringsLabelKeys.PAY_BY_MOBILE
    );
    await expect(barringsPage.payByMobileBarringsGroup().editSideSheet.getBarringWithIndex(0)).toContainText(
      BarringsLabelKeys.PAY_BY_MOBILE_BARRINGS
    );
    await expect(barringsPage.payByMobileBarringsGroup().editSideSheet.saveButton).toContainText(
      BarringsLabelKeys.SAVE_BARRINGS_BUTTON
    );
    await expect(barringsPage.payByMobileBarringsGroup().editSideSheet.cancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await barringsPage.payByMobileBarringsGroup().editSideSheet.cancelButton.click();
  });

  test('SECAXR-5066 As a manager with a suspended mobile line with global barrings enabled, I should be able to see a message that the mobile line is suspended', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: suspendedGlobalBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageDiv.nth(0)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_GLOBAL_BARRINGS_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.notificationBanner.infoIconShape.nth(1)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(1)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );
  });

  test('SECAXR-5067 As a manager with a suspended mobile line with global barrings disabled, I should be able to see a message that the mobile line is suspended', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: suspendedBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );
  });

  test('SECAXR-5069 As a member with a suspended mobile line with global barrings disabled, I should be able to see a message that the mobile line is suspended', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: memberSuspendedBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_MEMBER_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.notificationBanner.infoIconShape.nth(1)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(1)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );
  });

  test('SECAXR-5070 As a member with a suspended mobile line with global barrings enabled, I should be able to see a message that the mobile line is suspended', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: suspendedMobileLinesMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: memberSuspendedGlobalBarringsMock });
    });

    await page.reload();
    await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_MEMBER_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.notificationBanner.infoIconShape.nth(1)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageDiv.nth(1)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_GLOBAL_BARRINGS_MESSAGE_LABEL_KEY
    );

    await expect(barringsPage.notificationBanner.infoIconShape.nth(2)).toBeVisible();
    await expect(barringsPage.notificationBanner.messageSpan.nth(2)).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SUSPENDED_MESSAGE_LABEL_KEY
    );
  });

  test(
    'SECAXR-5071 As a member with an active mobile line with global barrings enabled, I should be able to see a message ' +
      'that the global barrings are enabled and that a member cannot adjust this',
    async ({ page, barringsPage }) => {
      await page.route(MOBILE_LINES_API, async (route) => {
        await route.fulfill({ json: mobileLineMock });
      });

      await page.route(BARRINGS_API, async (route) => {
        await route.fulfill({ json: memberGlobalBarringsMock });
      });

      await page.reload();
      await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
      await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toContainText(
        NotificationBannerComponent.NOTIFICATION_BANNER_MEMBER_MESSAGE_LABEL_KEY
      );

      await expect(barringsPage.notificationBanner.infoIconShape.nth(1)).toBeVisible();
      await expect(barringsPage.notificationBanner.messageDiv.nth(1)).toContainText(
        NotificationBannerComponent.NOTIFICATION_BANNER_GLOBAL_BARRINGS_MESSAGE_LABEL_KEY
      );
    }
  );

  test('translations - should show correct label keys for the manage mobile barrings - manager - active mobile line', async ({
    page,
    barringsPage,
  }) => {
    await page.route(MOBILE_LINES_API, async (route) => {
      await route.fulfill({ json: mobileLineMock });
    });

    await page.route(BARRINGS_API, async (route) => {
      await route.fulfill({ json: barringsMock });
    });

    await page.reload();
    await barringsPage.generalBarringsGroup().editBarringsButton.click();
    await barringsPage
      .generalBarringsGroup()
      .editSideSheet.getBarringWithNameSwitch(BarringsLabelKeys.GENERAL_BARRINGS_INCOMING_CALLS)
      .check();
    await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
    await expect(barringsPage.notificationBanner.messageSpan).toContainText(
      NotificationBannerComponent.NOTIFICATION_BANNER_SAVE_SUCCESSFUL_LABEL_KEY
    );

    await barringsPage.generalBarringsGroup().editBarringsButton.click();
    await barringsPage
      .generalBarringsGroup()
      .editSideSheet.getBarringWithNameSwitch(BarringsLabelKeys.GENERAL_BARRINGS_ALL_SERVICES)
      .check();
    await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
    await expect(barringsPage.generalBarringsGroup().confirmationSideSheet.title).toContainText(
      BarringsLabelKeys.CONFIRMATION_BARRINGS_TITLE
    );
    await expect(barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationCancelButton).toContainText(
      BarringsLabelKeys.CANCEL_BARRINGS_BUTTON
    );
    await expect(barringsPage.generalBarringsGroup().confirmationSideSheet.confirmationButton).toContainText(
      BarringsLabelKeys.CONFIRMATION_SAVE_BARRINGS_BUTTON
    );
  });
});

import { LoginPage, analyzeAnalyticsRequest, expect, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../barrings.fixture';
import { BarringsPage } from '../../page-objects';
import { int_users } from './int-users';

const BARRINGS_PAGE_LANDING = '/en/customer-zone/mobile/barrings';

const test = baseTest.extend<TestFixture>({
  barringsPage: async ({ page }, use: Function) => {
    await use(new BarringsPage(page));
  },
});

test.describe(`${APPLICATION_PREFIX}: Mobile barrings`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BARRINGS_PAGE_LANDING);
  });

  test('As an analytics person, I want to receive the correct analytics event when saving/updating a barring event', async ({
    barringsPage,
    page,
  }) => {
    const user = getUserByType('manager_with_mobile_post_paid_subscription', int_users);
    await new LoginPage(page).loginBase(user.username, user.password);
    await page.waitForURL(BARRINGS_PAGE_LANDING);

    await page.route('**/ocapi/public/api/mobile-barrings-service/v1/mobile-barrings/**', async (route) => {
      if (route.request().method() === 'PATCH') {
        await route.fulfill({
          status: 200,
        });
      } else {
        await route.continue();
      }
    });

    const searchParam = 'v175=barring settings changed';
    const expectedParams = {
      v175: 'barring settings changed',
      v179: 'change-mobile-service-settings',
      v127: 'care',
      v128: 'mobile',
      v129: 'general',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    await barringsPage.generalBarringsGroup().editBarringsButton.click();
    await barringsPage.generalBarringsGroup().editSideSheet.getBarringSwitchWithIndex(1).check();
    await barringsPage.generalBarringsGroup().editSideSheet.saveButton.click();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when logging in as a member', async ({
    barringsPage,
    page,
  }) => {
    const user = getUserByType('member_with_mobile_post_paid_subscription', int_users);
    await new LoginPage(page).loginBase(user.username, user.password);
    await page.waitForURL(BARRINGS_PAGE_LANDING);

    const searchParam = 'v175=message banner';
    const expectedParams = {
      v175: 'message banner',
      v179: 'view-banner',
      v127: 'care',
      v128: 'mobile',
      v129: 'member message',
      v133: 'info',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    await page.reload();
    await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();
    await analyticsRequestAnalyzed;
  });

  test('As an analytics person, I want to receive the correct analytics event when fraud barrings are set', async ({
    barringsPage,
    page,
  }) => {
    const user = getUserByType('manager_with_mobile_post_paid_and_internet_subscription', int_users);
    await new LoginPage(page).loginBase(user.username, user.password);
    await page.waitForURL(BARRINGS_PAGE_LANDING);

    const searchParam = 'v130=premium-voice';
    const expectedParams = {
      v175: 'message banner',
      v179: 'view-banner',
      v127: 'care',
      v128: 'mobile',
      v129: 'fraud ban',
      v130: 'premium-voice',
      v133: 'info',
    };

    const analyticsRequestAnalyzed = analyzeAnalyticsRequest(page, searchParam, expectedParams);
    await page.reload();
    await expect(barringsPage.notificationBanner.self.nth(1)).toBeVisible();
    await analyticsRequestAnalyzed;
  });
});

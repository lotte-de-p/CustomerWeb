import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, test } from '../dtv-box.fixture';

import { uat_users } from './uat-users';

const ENTERTAINMENT_PAGE_LANDING = '/residential/nl/sandbox/dtv-box-management';
const MY_TELENET_HOME_PAGE = '/residential/nl/mytelenet';

test.describe(`${APPLICATION_PREFIX}: DTV Box management feature`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ENTERTAINMENT_PAGE_LANDING);
    const user = getUserByType('customer_with_dtv_box', uat_users);
    await new LoginPage(page).loginViaHeader(user.username, user.password);
    await page.waitForURL(MY_TELENET_HOME_PAGE);
    await page.goto(ENTERTAINMENT_PAGE_LANDING);
  });

  test('As a customer, I can see all required DTV Box Details on the DTV box management page', async ({
    entertainmentPage,
  }) => {
    await expect(entertainmentPage.title).toBeVisible();
    await expect(entertainmentPage.dtvBoxOverview.addressSelector).toBeVisible();
    await expect(entertainmentPage.dtvBoxDetails.deviceImage).toBeVisible();
    await expect(entertainmentPage.dtvBoxDetails.typeName).toBeVisible();
    await expect(entertainmentPage.dtvBoxDetails.macAddress).toBeVisible();
    await expect(entertainmentPage.dtvBoxDetails.modelNameAndNumber).toBeVisible();
    await expect(entertainmentPage.dtvBoxDetails.serialNumber).toBeVisible();
  });

  test('As a customer, I can generate New Pin Code on the DTV box management page', async ({ entertainmentPage }) => {
    await entertainmentPage.dtvBoxOverview.resetPinButton.click();
    await expect(entertainmentPage.dtvBoxOverview.pinResetNotification).toContainText(
      'De pincode van je decoders is correct aangepast naar'
    );
  });
});

import { expect } from '@tools/e2e';
import { APPLICATION_PREFIX, test } from '../dtv-box.fixture';
import { EntertainmentPage } from '../../page-objects';

const ENTERTAINMENT_PAGE_LANDING = '/residential/nl/sandbox/dtv-box-management';

test.describe(`${APPLICATION_PREFIX}: DTV Box management for anonymous feature`, () => {
  test('As an anonymous user, I should see the page title', async ({ page }) => {
    const entertainmentPage = new EntertainmentPage(page);
    await page.goto(ENTERTAINMENT_PAGE_LANDING);
    await page.locator(entertainmentPage.login.acceptCookiesLocator).click();
    await expect(entertainmentPage.title).toBeVisible();
  });
});

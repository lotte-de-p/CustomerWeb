import { test, expect } from '@tools/e2e';
import { HOME_NETWORK_PAGE_LANDING, HOME_NETWORK_SELECTOR_ROOT } from '../support';

test.describe('home-network-mfe: Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME_NETWORK_PAGE_LANDING);
  });

  test('should display', async ({ page }) => {
    await expect(page.locator(HOME_NETWORK_SELECTOR_ROOT)).toBeVisible();
  });
});

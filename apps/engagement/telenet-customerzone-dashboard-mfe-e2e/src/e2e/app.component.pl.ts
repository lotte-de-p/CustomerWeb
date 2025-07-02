import { test, expect } from '@tools/e2e';
import { TELENET_CUSTOMERZONE_DASHBOARD_PAGE_LANDING, TELENET_CUSTOMERZONE_DASHBOARD_SELECTOR_ROOT } from '../support';

test.describe('telenet-customerzone-dashboard-mfe: Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TELENET_CUSTOMERZONE_DASHBOARD_PAGE_LANDING);
  });

  test('should display', async ({ page }) => {
    await expect(page.locator(TELENET_CUSTOMERZONE_DASHBOARD_SELECTOR_ROOT)).toBeVisible();
  });
});

import { test, expect } from '@tools/e2e';
import { TOPUP_PAGE_LANDING, TOPUP_SELECTOR_ROOT } from '../support';

test.describe('topup-mfe: Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TOPUP_PAGE_LANDING);
  });

  test('should display', async ({ page }) => {
    await expect(page.locator(TOPUP_SELECTOR_ROOT)).toBeVisible();
  });
});

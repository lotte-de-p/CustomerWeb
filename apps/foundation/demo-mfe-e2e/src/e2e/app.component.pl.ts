import { test, expect } from '@tools/e2e';
import { DEMO_PAGE_LANDING, DEMO_SELECTOR_ROOT } from '../support';

test.describe('demo-mfe: Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_PAGE_LANDING);
  });

  test('should display', async ({ page }) => {
    await expect(page.locator(DEMO_SELECTOR_ROOT)).toBeVisible();
  });
});

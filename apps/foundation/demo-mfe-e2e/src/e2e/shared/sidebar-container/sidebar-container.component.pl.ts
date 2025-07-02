import { test, expect } from '@tools/e2e';
import { DEMO_PAGE_LANDING, DEMO_SELECTOR_SIDEBAR_CONTAINER } from '../../../support';

test.describe('demo-mfe: Sidebar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_PAGE_LANDING);
  });

  test('should render the component', async ({ page }) => {
    await expect(page.locator(DEMO_SELECTOR_SIDEBAR_CONTAINER)).toBeVisible();
  });
});

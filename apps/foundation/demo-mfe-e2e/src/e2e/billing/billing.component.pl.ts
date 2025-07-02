import { test, expect, Page } from '@tools/e2e';
import {
  DEMO_PAGE_BILLING,
  DEMO_SELECTOR_BILLING_ACCORDION_BUTTON,
  DEMO_SELECTOR_BILLING_OVERVIEW,
} from '../../support';

async function clickChevron(page: Page, index: number) {
  await page.locator(DEMO_SELECTOR_BILLING_ACCORDION_BUTTON).nth(index).click();
}

async function checkIfComponentIsVisible(page: Page, index: number, component: string) {
  await expect(page.locator(`[data-testid="${component}"]`).nth(index)).toBeInViewport();
}

async function checkIfComponentIsNotVisible(page: Page, index: number, component: string) {
  await expect(page.locator(`[data-testid="${component}"]`).nth(index)).not.toBeInViewport();
}

test.describe('demo-mfe: Billing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_PAGE_BILLING);
  });

  test('should render the page', async ({ page }) => {
    await expect(page.locator(DEMO_SELECTOR_BILLING_OVERVIEW)).toBeVisible();
  });

  test('should show the action button when a billing is expanded', async ({ page }) => {
    await clickChevron(page, 0);
    await checkIfComponentIsVisible(page, 0, 'invoice-pay-now');
    await clickChevron(page, 0);
    await checkIfComponentIsNotVisible(page, 0, 'invoice-pay-now');
    await clickChevron(page, 1);
    await checkIfComponentIsVisible(page, 1, 'invoice-open-file');
    await clickChevron(page, 1);
    await checkIfComponentIsNotVisible(page, 1, 'invoice-open-file');
  });
});

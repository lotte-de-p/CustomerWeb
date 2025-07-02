import { test, expect, Page } from '@tools/e2e';
import {
  DEMO_PAGE_PRODUCT,
  DEMO_SELECTOR_PRODUCT_BUNDLE,
  DEMO_SELECTOR_PRODUCT_SPECIFICATIONS,
  DEMO_SELECTOR_PRODUCT_COLLAPSIBLE_CONTENT,
} from '../../support';

async function clickAccordion(page: Page, index: number) {
  await page.locator(DEMO_SELECTOR_PRODUCT_SPECIFICATIONS).nth(index).click();
}

async function checkIfContentExists(page: Page) {
  await expect(page.locator(DEMO_SELECTOR_PRODUCT_COLLAPSIBLE_CONTENT)).toBeVisible();
}

async function checkIfContentNotExists(page: Page) {
  await expect(page.locator(DEMO_SELECTOR_PRODUCT_COLLAPSIBLE_CONTENT)).toBeHidden();
}

test.describe('demo-mfe: Product Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_PAGE_PRODUCT);
  });

  test('should render the page', async ({ page }) => {
    await expect(page.locator(DEMO_SELECTOR_PRODUCT_BUNDLE)).toBeVisible();
  });

  test('should show the details when a product is expanded', async ({ page }) => {
    await clickAccordion(page, 0);
    await checkIfContentExists(page);
    await clickAccordion(page, 0);
    await checkIfContentNotExists(page);
    await clickAccordion(page, 1);
    await checkIfContentExists(page);
    await clickAccordion(page, 1);
    await checkIfContentNotExists(page);
  });
});

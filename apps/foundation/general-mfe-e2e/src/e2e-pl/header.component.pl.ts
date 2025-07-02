import { test, expect } from '@tools/e2e';

import {
  GENERAL_SEARCH_BRAND_LOGO_SELECTOR,
  GENERAL_SEARCH_SUGGESTION_SELECTOR,
  GENERAL_SEARCH_SUGGESTIONS_SELECTOR,
  GENERAL_SEARCH_TOP_RESULTS_SELECTOR,
  PAGE_LANDING,
  SEARCH_BAR_BUTTON_SELECTOR,
  SEARCH_BAR_INPUT_EXPANDED_CLASS,
  SEARCH_TERM_SELECTOR,
  SELECTOR_GENERAL_SEARCH_BACKSPACE,
  SELECTOR_GENERAL_SEARCH_HEADER,
} from '../support';
import * as suggestions from '../mock/suggestions-mock.json';
import * as instantSearchResults from '../mock/instant-search-results-product-mock.json';

test.describe('search-header-component', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('*/**/suggestions', async (route) => {
      console.log('Intercepted request:', route.request().url());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(suggestions),
      });
    });

    await page.route('*/**/search', async (route) => {
      console.log('Intercepted request:', route.request().url());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(instantSearchResults),
      });
    });

    await page.goto(PAGE_LANDING);
  });

  test('should render the component', async ({ page }) => {
    await page.waitForLoadState();
    const headerComponent = page.locator(SELECTOR_GENERAL_SEARCH_HEADER);
    await expect(headerComponent).toBeVisible();
  });

  test('should expand the search bar when you click on it', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR);
    expect(await searchTerm?.getAttribute('class')).toContain(SEARCH_BAR_INPUT_EXPANDED_CLASS);
    await expect(page.locator(GENERAL_SEARCH_BRAND_LOGO_SELECTOR)).toBeVisible();
    await expect(page.locator(SEARCH_BAR_BUTTON_SELECTOR)).toBeVisible();
  });

  test('should shrink the search bar when click cancel', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.click('tg-foundation-general-search-header-button[type=cancel]');
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR);
    expect(await searchTerm?.getAttribute('class')).not.toContain(SEARCH_BAR_INPUT_EXPANDED_CLASS);
    await expect(page.locator(GENERAL_SEARCH_BRAND_LOGO_SELECTOR)).toBeHidden();
    await expect(page.locator(SEARCH_BAR_BUTTON_SELECTOR)).toBeHidden();
  });

  test('should shrink the search bar when clicking outside of the header', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.click('div.overlay-mask.position--fixed');
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR);
    expect(await searchTerm?.getAttribute('class')).not.toContain(SEARCH_BAR_INPUT_EXPANDED_CLASS);
    await expect(page.locator(GENERAL_SEARCH_BRAND_LOGO_SELECTOR)).toBeHidden();
    await expect(page.locator(SEARCH_BAR_BUTTON_SELECTOR)).toBeHidden();
    await expect(page.locator(SEARCH_TERM_SELECTOR)).toBeVisible();
  });

  test('should shrink the search bar when pressing escape', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.keyboard.press('Escape');
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR);
    expect(await searchTerm?.getAttribute('class')).not.toContain(SEARCH_BAR_INPUT_EXPANDED_CLASS);
    await expect(page.locator(GENERAL_SEARCH_BRAND_LOGO_SELECTOR)).toBeHidden();
    await expect(page.locator(SEARCH_BAR_BUTTON_SELECTOR)).toBeHidden();
  });

  test('should give suggestions when entering a search query', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.locator(SEARCH_TERM_SELECTOR).fill('samsung');
    await page.waitForLoadState();

    await expect(page.locator(GENERAL_SEARCH_SUGGESTIONS_SELECTOR)).toBeVisible();
    await expect(page.locator(GENERAL_SEARCH_TOP_RESULTS_SELECTOR)).toBeVisible();

    const items = page.locator(GENERAL_SEARCH_SUGGESTION_SELECTOR);
    await page.waitForSelector(GENERAL_SEARCH_SUGGESTION_SELECTOR);

    const liCount = await items.count();
    expect(liCount).toBe(5);
  });

  test('should clear the suggestions and results when clicking the clear button', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.fill(SEARCH_TERM_SELECTOR, 'samsung');
    await page.waitForLoadState();

    const items = page.locator(GENERAL_SEARCH_SUGGESTION_SELECTOR);
    await page.waitForSelector(GENERAL_SEARCH_SUGGESTION_SELECTOR);

    const liCount = await items.count();
    expect(liCount).toBe(5);

    await page.click(SELECTOR_GENERAL_SEARCH_BACKSPACE);

    const liCount2 = await items.count();
    expect(liCount2).toBe(0);

    await expect(page.locator(GENERAL_SEARCH_SUGGESTIONS_SELECTOR)).toBeHidden();
    await expect(page.locator(GENERAL_SEARCH_TOP_RESULTS_SELECTOR)).toBeHidden();
  });

  test('should click the suggestion and navigate to search result', async ({ page }) => {
    await page.click(SEARCH_TERM_SELECTOR);
    await page.fill(SEARCH_TERM_SELECTOR, 'samsung');
    await page.waitForLoadState();

    await page.locator(GENERAL_SEARCH_SUGGESTION_SELECTOR).first().click();

    await expect(page.locator(GENERAL_SEARCH_SUGGESTIONS_SELECTOR)).toBeHidden();
    await expect(page.locator(GENERAL_SEARCH_TOP_RESULTS_SELECTOR)).toBeHidden();
  });

  // FIXME this test is failing (CUSTPORTTM-2738)
  test.skip('should navigate through suggestions when you press the down and up arrow keys', async ({ page }) => {
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR);
    await searchTerm?.click();
    await searchTerm?.type('betalen');
    await expect(page.locator(GENERAL_SEARCH_SUGGESTIONS_SELECTOR)).toBeVisible();
    await expect(page.locator(GENERAL_SEARCH_TOP_RESULTS_SELECTOR)).toBeVisible();
    await searchTerm?.press('ArrowDown');
    const firstSuggestion = page.locator(
      'tg-foundation-general-search-suggestions > ul > li:nth-child(1) > tg-foundation-general-search-suggestion > a'
    );
    expect(await firstSuggestion?.evaluate((node) => document.activeElement === node)).toBeTruthy();
    await searchTerm?.press('ArrowDown');
    const secondSuggestion = page.locator(
      'tg-foundation-general-search-suggestions > ul > li:nth-child(2) > tg-foundation-general-search-suggestion > a'
    );
    expect(await secondSuggestion?.evaluate((node) => document.activeElement === node)).toBeTruthy();
    await searchTerm?.press('ArrowUp');
    expect(await firstSuggestion?.evaluate((node) => document.activeElement === node)).toBeTruthy();
  });
});

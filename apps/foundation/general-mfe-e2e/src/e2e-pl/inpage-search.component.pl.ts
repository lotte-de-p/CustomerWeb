import { test, expect } from '@tools/e2e';
import {
  PAGE_INPAGE_SEARCH,
  SEARCH_TERM_SELECTOR,
  SELECTOR_GENERAL_SEARCH_RESULTS,
  SELECTOR_SEARCH_BLENDED_HARDWARE_PAGES,
  SELECTOR_SEARCH_FULL_HARDWARE_PAGES,
} from '../support';
import * as suggestions from '../mock/suggestions-mock.json';
import * as pageSearchResultsFull from '../mock/instant-search-results-full-page-mock.json';
import * as pageSearchResultsEmpty from '../mock/instant-search-results-empty-page-mock.json';
import * as productSearchResults from '../mock/instant-search-results-product-mock.json';

test.describe('search-header-component', () => {
  test.beforeEach(async ({ page }) => {
    function getSearchResults(param?: string, devicesOnly?: boolean) {
      switch (param) {
        case 'page':
          return devicesOnly ? pageSearchResultsEmpty : pageSearchResultsFull;
        case 'product':
          return productSearchResults;
        default:
          return productSearchResults;
      }
    }

    await page.route('*/**/suggestions', async (route) => {
      console.log('Intercepted request:', route.request().url());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(suggestions),
      });
    });

    interface Filters {
      filters: {
        logicalFilters: {
          queryValueFilters: { name: string; values: string[] }[];
        }[];
      };
    }

    await page.route('*/**/search', async (route) => {
      const postData = route.request().postDataJSON() as unknown as Filters;
      const searchParam = postData.filters.logicalFilters[0].queryValueFilters.find(
        (value: { name: string }) => value.name === 'type'
      )?.values[0];
      const devicesOnly = postData.filters.logicalFilters[0].queryValueFilters.some((item) =>
        item.values.includes('devices')
      );

      console.log('Intercepted request:', route.request().url());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(getSearchResults(searchParam, devicesOnly)),
      });
    });

    await page.goto(PAGE_INPAGE_SEARCH);
  });

  test('should show the blended hardware pages component when searching for "samsung"', async ({ page }) => {
    const searchTerm = page.locator(SEARCH_TERM_SELECTOR).nth(1);
    await searchTerm.fill('samsung');
    await searchTerm.press('Enter');
    await page.waitForLoadState();
    await expect(page.locator(SELECTOR_GENERAL_SEARCH_RESULTS)).toBeVisible();
    await expect(page.locator(SELECTOR_SEARCH_BLENDED_HARDWARE_PAGES)).toBeVisible();
    await expect(page.locator(SELECTOR_SEARCH_FULL_HARDWARE_PAGES)).toBeHidden();
  });
});

import { expect, Page } from './playwright-fixtures';

export async function analyzeAnalyticsRequest(page: Page, searchParam: string, expectedParams: object) {
  const [key, value] = searchParam.split('=');
  const searchValue = `${key}=${encodeURIComponent(value)}`;
  const endpointBase = '**/b/ss/**/*?';
  const endpoint = `${endpointBase}${searchValue}**`;

  return new Promise((resolve, reject) => {
    page.route(endpoint, async (route) => {
      const urlObj = new URL(route.request().url());
      const params = new URLSearchParams(urlObj.search);
      console.log(params);

      try {
        for (const [key, expectedValue] of Object.entries(expectedParams)) {
          expect(params.get(key)).toContain(expectedValue as string);
        }
        resolve(params);
      } catch (error) {
        reject(error);
      }
      // await route.continue();
    });
  });
}

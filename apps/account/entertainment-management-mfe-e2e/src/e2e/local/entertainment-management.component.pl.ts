import { expect } from '@tools/e2e';
import { ENTERTAINEMNT_MANAGEMENT_ENDPOINT, PAGE_ENTERTAINMENT_MANAGEMENT } from '../../support';
import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../entertainment-management.fixture';
import { EntertainmentManagementPage } from '../../page-objects';

import userDetails from './mock/userdetails-mock.json';
import entertainmentManagementActiveOptions from './mock/entertainment-management-active-options-mock.json';
import entertainmentManagementAvailableContentPackages from './mock/entertainment-management-available-content-packages-mock.json';

const test = baseTest.extend<TestFixture>({
  entertainmentManagementPage: async ({ page, entertainmentManagementPage }, use: Function) => {
    await page.route('/oauth/userdetails', async (route) => {
      await route.fulfill({ json: userDetails });
    });
    await page.goto(PAGE_ENTERTAINMENT_MANAGEMENT);
    await page.waitForURL(PAGE_ENTERTAINMENT_MANAGEMENT);
    await use(entertainmentManagementPage);
  },
});

test.describe(`${APPLICATION_PREFIX}: Entertainment Mangement`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_ENTERTAINMENT_MANAGEMENT);
  });

  test('should render the page', async ({
    entertainmentManagementPage,
  }: {
    entertainmentManagementPage: EntertainmentManagementPage;
  }) => {
    await expect(entertainmentManagementPage.root).toBeVisible();
  });

  test('should show active entertainment options when rendered', async ({ page, entertainmentManagementPage }) => {
    await page.route(ENTERTAINEMNT_MANAGEMENT_ENDPOINT, async (route) => {
      await route.fulfill({ json: entertainmentManagementActiveOptions });
    });
    await page.goto(PAGE_ENTERTAINMENT_MANAGEMENT);

    await expect(entertainmentManagementPage.entertainmentManagementLabelActiveOptions).toBeVisible();
    await expect(entertainmentManagementPage.entertainmentOptionLogo.first()).toBeInViewport();
    await expect(entertainmentManagementPage.entertainmentOptionName.first()).toBeVisible();
    await expect(entertainmentManagementPage.entertainmentOptionPrice.first()).toBeVisible();
  });

  test('should show available content packages when rendered', async ({ page, entertainmentManagementPage }) => {
    await page.route(ENTERTAINEMNT_MANAGEMENT_ENDPOINT, async (route) => {
      await route.fulfill({ json: entertainmentManagementAvailableContentPackages });
    });
    await page.goto(PAGE_ENTERTAINMENT_MANAGEMENT);

    await expect(entertainmentManagementPage.entertainmentManagementLabelContentPackages).toBeVisible();
    await expect(entertainmentManagementPage.entertainmentOptionLogo.first()).toBeInViewport();
    await expect(entertainmentManagementPage.entertainmentOptionName.first()).toBeVisible();
    await expect(entertainmentManagementPage.entertainmentOptionPrice.first()).toBeVisible();
  });
});

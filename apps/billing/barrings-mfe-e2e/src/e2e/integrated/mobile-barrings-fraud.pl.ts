import { expect, LoginPage, getUserByType } from '@tools/e2e';
import { APPLICATION_PREFIX, testBrowser, testMobile, TestFixture } from '../barrings.fixture';
import { int_users } from './int-users';

const BARRINGS_PAGE_LANDING = '/en/customer-zone/mobile/barrings';

const testGroups = [
  { name: 'Mobile barrings - browser view', device: testBrowser },
  { name: 'Mobile barrings - mobile view', device: testMobile },
];

for (const { name, device } of testGroups) {
  const test = device.extend<TestFixture>({});
  test.describe(`${APPLICATION_PREFIX}: ${name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(BARRINGS_PAGE_LANDING);
    });

    test(
      'SECAXR-4744 As a Base manager with an active mobile line and mobile barrings set by a fraud advisor, ' +
        'I see a message informing me about it and no longer have the option to manage the barrings',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_mobile_post_paid_and_internet_subscription', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
      }
    );

    test('SECAXR-4746 As a Base member with an active mobile line and mobile barrings set by a fraud advisor, I see a message informing me about it', async ({
      page,
      barringsPage,
    }) => {
      const user = getUserByType('member_with_mobile_post_paid_subscription', int_users);
      await new LoginPage(page).loginBase(user.username, user.password);
      await page.waitForURL(BARRINGS_PAGE_LANDING);

      await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
      await expect(barringsPage.notificationBanner.messageSpan.nth(0)).toContainText(
        'Contact the manager of the BASE subscription to set barrings'
      );
      await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
      await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toBeVisible();
      await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toBeVisible();
      await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
    });

    test(
      'SECAXR-4748 As a Base manager with an active mobile line and mobile barrings set by a fraud advisor and mobile barrings that are mutually exclusive ' +
        'with others, I see a message informing me about it and no longer have the option to manage the barrings',
      async ({ page, barringsPage }) => {
        const user = getUserByType('manager_with_one_mobile_prepaid_subscription', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
      }
    );

    test(
      'SECAXR-4749 As a Base member with a suspended mobile line and mobile barrings set by a fraud advisor and mobile barrings that are mutually exclusive ' +
        'with others, I see a message informing me about it and no longer have the option to manage the barrings',
      async ({ page, barringsPage }) => {
        const user = getUserByType('member_with_mobile_prepaid_subscription', int_users);
        await new LoginPage(page).loginBase(user.username, user.password);
        await page.waitForURL(BARRINGS_PAGE_LANDING);

        await expect(barringsPage.notificationBanner.infoIconShape.nth(0)).toBeVisible();
        await expect(barringsPage.notificationBanner.messageSpan).toBeVisible();

        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.infoIconShape).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageTitle).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().notificationBanner.messageDescription).toBeVisible();
        await expect(barringsPage.premiumVoiceBarringsGroup().editBarringsButton).toBeHidden();
      }
    );
  });
}

import { APPLICATION_PREFIX, test as baseTest, TestFixture } from '../pay-by-mobile.fixture';
import { expect } from '@tools/e2e';
import { Route } from 'playwright';

import userdetails from './mock/userdetails.json';
import mobileLines from './mock/mobile-lines.json';
import mobileLinesNotActivated from './mock/mobile-lines-not-activated.json';
import initialTransactions from './mock/initial-transactions.json';
import transactions from './mock/transactions.json';
import subscriptions from './mock/subscriptions.json';
import company from './mock/company.json';
import { TransactionComponent } from '../../page-objects/components/transaction.po';
import { SubscriptionComponent } from '../../page-objects/components/subscription.po';
import { MobileLineSelectorComponent } from '../../page-objects/components/mobile-line-selector.po';
import { PayByMobilePage } from '../../page-objects/pay-by-mobile.po';

const PAY_BY_MOBILE_PATH = '/pay-by-mobile';
const GET_MOBILE_LINES = '/public/api/mobile-line-selector-service/v1/mobile-lines';
const GET_INITIAL_TRANSACTIONS = '/public/api/pay-by-mobile-service/v1/pay-by-mobile/initial-transactions';
const GET_TRANSACTIONS = '/public/api/pay-by-mobile-service/v1/pay-by-mobile/transactions';
const GET_SUBSCRIPTIONS = '/public/api/pay-by-mobile-service/v1/pay-by-mobile/subscriptions';
const CANCEL_SUBSCRIPTION = `${GET_SUBSCRIPTIONS}/{msisdn}/cancelService`;
const GET_BARRING_STATUS = '/public/api/pay-by-mobile-service/v1/pay-by-mobile/barring-status';
const GET_COMPANY = '/public/api/pay-by-mobile-service/v1/pay-by-mobile/supportinfo/companies';

const test = baseTest.extend<TestFixture>({
  payByMobilePage: async ({ page, payByMobilePage }, use: Function) => {
    await page.route('/oauth/userdetails', async (route: Route) => {
      await route.fulfill({ json: userdetails });
    });
    await page.route(GET_MOBILE_LINES, async (route) => {
      await route.fulfill({ json: mobileLines });
    });
    await page.route(`${GET_COMPANY}/111393?serviceName=applestore`, async (route) => {
      await route.fulfill({ json: company });
    });
    await page.route(`${GET_COMPANY}/111394?serviceName=YoutubeMusic`, async (route) => {
      await route.fulfill({ json: company });
    });
    await page.route(`${GET_COMPANY}/111395?serviceName=netflix`, async (route) => {
      await route.fulfill({ json: company });
    });
    await Promise.all(
      ['0489552137', '0489129746'].map(async (msisdn) => {
        await page.route(`${GET_INITIAL_TRANSACTIONS}/${msisdn}`, async (route) => {
          await route.fulfill({ json: initialTransactions });
        });
        await page.route(`${GET_TRANSACTIONS}/${msisdn}`, async (route) => {
          await route.fulfill({ json: transactions });
        });
        await page.route(`${GET_SUBSCRIPTIONS}/${msisdn}`, async (route) => {
          await route.fulfill({ json: subscriptions });
        });
        await page.route(`${GET_BARRING_STATUS}/${msisdn}`, async (route) => {
          await route.fulfill({ json: { barred: false } });
        });
      })
    );
    await page.route(CANCEL_SUBSCRIPTION.replace('{msisdn}', '0489552137'), async (route) => {
      await route.fulfill({ status: 200 });
    });
    await page.goto(PAY_BY_MOBILE_PATH);
    await page.waitForURL(PAY_BY_MOBILE_PATH);
    await use(payByMobilePage);
  },
});

const APPLE_MUSIC = 'Apple Music';
const APPLE_STORE = 'applestore';
const APPLE_EMAIL = 'info@apple.com';
const APPLE_CONTACT = 'https://www.apple.com/benl/contact/';
const YOUTUBE_MUSIC = 'Youtube Music';
const MOBILE_NUMBER = '/0489552137';
const SERVICE_NAME = 'ng-reflect-service-name';
test.describe(`${APPLICATION_PREFIX}: Pay By Mobile`, () => {
  test.describe('mobile line selector', () => {
    test('should show mobile line selector', async ({ page, payByMobilePage }) => {
      await expect(payByMobilePage.root).toBeVisible();
      const mobileLineSelector = payByMobilePage.mobileLineSelector;
      await expect(mobileLineSelector.self).toBeVisible();
      await expect(mobileLineSelector.name).toContainText('Peter');
      await expect(mobileLineSelector.selected).toContainText('0489 55 21 37');
      await mobileLineSelector.open();
      await expect(mobileLineSelector.mobileLines).toHaveCount(2);
      await mobileLineSelector.mobileLines.nth(1).click();
      await expect(mobileLineSelector.selected).toContainText('0489 12 97 46');
      await page.reload(); // Verify if session storage saves the mobile line
      await expect(mobileLineSelector.selected).toContainText('0489 12 97 46');
    });

    test('should show correct label keys for translations', async ({ payByMobilePage }) => {
      await expect(payByMobilePage.mobileLineSelector.openButton).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_OPEN_LABEL_KEY
      );
      await payByMobilePage.mobileLineSelector.open();
      await expect(payByMobilePage.mobileLineSelector.sheetTitle).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_SHEET_TITLE_LABEL_KEY
      );
      await expect(payByMobilePage.mobileLineSelector.getMobileLineByIndex(1)).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_DATA_SIM_LABEL_KEY
      );
    });

    test('should show error message with correct label keys when loading the mobile lines fails', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_MOBILE_LINES, async (route) => {
        await route.fulfill({ status: 500, json: { error: 'error' } });
      });
      await page.reload();
      await expect(payByMobilePage.mobileLineSelector.errorBanner.messageTitle).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_ERROR_MESSAGE_TITLE_LABEL_KEY
      );
      await expect(payByMobilePage.mobileLineSelector.errorBanner.messageDescription).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_ERROR_MESSAGE_DESCRIPTION_LABEL_KEY
      );
    });

    test('should show error message with correct label keys when no mobile lines are available', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_MOBILE_LINES, async (route) => {
        await route.fulfill({ status: 200, json: [] });
      });
      await page.reload();
      await expect(payByMobilePage.mobileLineSelector.errorNotification.message.nth(1)).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_NO_LINES_LABEL_KEY
      );
    });

    test('should show error message with correct label keys when no active mobile lines are available', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_MOBILE_LINES, async (route) => {
        await route.fulfill({ status: 200, json: mobileLinesNotActivated });
      });
      await page.reload();
      await expect(payByMobilePage.mobileLineSelector.activationInProgressNotification.messageTitle).toContainText(
        MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_NO_ACTIVE_LINES_TITLE_LABEL_KEY
      );
      await expect(
        payByMobilePage.mobileLineSelector.activationInProgressNotification.messageDescription
      ).toContainText(MobileLineSelectorComponent.MOBILE_LINES_SELECTOR_NO_ACTIVE_LINES_DESCRIPTION_LABEL_KEY);
    });
  });

  test.describe('transactions', () => {
    test('should render the pay by mobile overview', async ({ payByMobilePage }) => {
      await expect(payByMobilePage.transactionsTitle).toBeVisible();
      await expect(payByMobilePage.transactions).toHaveCount(2);
      await expectTransaction(payByMobilePage.getTransaction(0), APPLE_MUSIC, '17 October 2023', '0,01 €');
      await expectTransaction(payByMobilePage.getTransaction(1), YOUTUBE_MUSIC, '18 October 2023', '12,99 €');
    });

    test('should render maximally 6 transactions upon first load', async ({ payByMobilePage }) => {
      await expect(payByMobilePage.transactionsTitle).toBeVisible();
      await expect(payByMobilePage.transactions).toHaveCount(2);
      await expect(payByMobilePage.loadMoreTransactions).toBeVisible();
      await payByMobilePage.loadMoreTransactions.click();
      await expect(payByMobilePage.transactions).toHaveCount(14);
      await expect(payByMobilePage.showLessTransactions).toBeVisible();
      await payByMobilePage.showLessTransactions.click();
      await expect(payByMobilePage.transactions).toHaveCount(2);
    });

    test('should render error message with correct label keys when loading the transactions fails', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_INITIAL_TRANSACTIONS + MOBILE_NUMBER, async (route) => {
        await route.fulfill({ status: 500, json: { error: 'error' } });
      });
      await page.reload();
      await expect(payByMobilePage.message).toContainText(PayByMobilePage.PAY_BY_MOBILE_BACKEND_ERROR_LABEL_KEY);
    });

    test('should render an information message with correct label keys when no transactions are available', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_INITIAL_TRANSACTIONS + MOBILE_NUMBER, async (route) => {
        await route.fulfill({ status: 200, json: [] });
      });
      await page.reload();
      await expect(payByMobilePage.noContentMessage.title).toContainText(
        PayByMobilePage.PAY_BY_MOBILE_NO_CONTENT_TITLE_LABEL_KEY
      );
      await expect(payByMobilePage.noContentMessage.description).toContainText(
        PayByMobilePage.PAY_BY_MOBILE_NO_CONTENT_DESCRIPTION_LABEL_KEY
      );
    });

    test('should load more transactions', async ({ payByMobilePage }) => {
      await payByMobilePage.loadMoreTransactions.click();
      await expect(payByMobilePage.transactions).toHaveCount(14);
    });

    test('should show less transactions', async ({ payByMobilePage }) => {
      await payByMobilePage.loadMoreTransactions.click();
      await payByMobilePage.showLessTransactions.click();
      await expect(payByMobilePage.transactions).toHaveCount(2);
    });

    test('should show more information', async ({ payByMobilePage }) => {
      const transaction = payByMobilePage.getTransaction(0);
      await transaction.open();
      await expect(transaction.details).toBeVisible();
      await transaction.close();
      await transaction.open();
      await expect(transaction.details).toBeVisible();
      await expect(transaction.detailsLogo).toHaveAttribute(SERVICE_NAME, APPLE_STORE);
      await expect(transaction.detailsService).toContainText(APPLE_MUSIC);
      await expect(transaction.detailsPrice).toContainText('0,01 €');
      await expect(transaction.detailsDate).toContainText('17 October 2023');
      await expect(transaction.detailsCompanyName).toContainText('Apple');
      await expect(transaction.detailsCompanyEmail).toContainText(APPLE_EMAIL);
      await expect(transaction.detailsCompanyUrl).toHaveAttribute('href', APPLE_CONTACT);
    });

    async function expectTransaction(transaction: TransactionComponent, service: string, date: string, price: string) {
      await expect(transaction.service).toContainText(service);
      await expect(transaction.date).toContainText(date);
      await expect(transaction.price).toContainText(price);
    }
  });

  test.describe('subscriptions', () => {
    test.skip('should render the pay by mobile subscriptions', async ({ payByMobilePage }) => {
      await expect(payByMobilePage.subscriptionsTitle).toBeVisible();
      await expect(payByMobilePage.subscriptions).toHaveCount(3);
      await expectSubscription(payByMobilePage.getSubscription(0), APPLE_MUSIC, '10 March 2024', '12,50 €');
      await expectSubscription(
        payByMobilePage.getSubscription(1),
        YOUTUBE_MUSIC,
        '12 March 2022',
        '125,30 €',
        'expires on 12 March 2023'
      );
    });

    test('should render an information message with correct label keys when no subscriptions are available', async ({
      page,
      payByMobilePage,
    }) => {
      page.route(GET_SUBSCRIPTIONS + MOBILE_NUMBER, async (route) => {
        await route.fulfill({ status: 200, json: [] });
      });
      await page.reload();
      await expect(payByMobilePage.noContentMessage.title).toContainText(
        PayByMobilePage.PAY_BY_MOBILE_NO_CONTENT_TITLE_LABEL_KEY
      );
      await expect(payByMobilePage.noContentMessage.description).toContainText(
        PayByMobilePage.PAY_BY_MOBILE_NO_CONTENT_DESCRIPTION_LABEL_KEY
      );
    });

    test.skip('should show more information', async ({ payByMobilePage }) => {
      let subscription = payByMobilePage.getSubscription(0);
      await subscription.open();
      await expect(subscription.details).toBeVisible();
      await subscription.close();
      await subscription.open();
      await expect(subscription.detailsLogo).toHaveAttribute(SERVICE_NAME, APPLE_STORE);
      await expect(subscription.detailsService).toContainText(APPLE_MUSIC);
      await expect(subscription.detailsPrice).toContainText('12,50 €');
      await expect(subscription.detailsDate).toContainText('10 March 2024');
      await expect(subscription.detailsRenewedAfter).toContainText('Renewed after 14 days');
      await expect(subscription.detailsCompanyName).toContainText('Apple');
      await expect(subscription.detailsCompanyEmail).toContainText(APPLE_EMAIL);
      await expect(subscription.detailsCompanyUrl).toHaveAttribute('href', APPLE_CONTACT);
      await subscription.close();

      subscription = payByMobilePage.getSubscription(1);
      await subscription.open();
      await expect(subscription.details).toBeVisible();
      await subscription.close();
      await subscription.open();
      await expect(subscription.detailsLogo).toHaveAttribute(SERVICE_NAME, 'YoutubeMusic');
      await expect(subscription.detailsService).toContainText(YOUTUBE_MUSIC);
      await expect(subscription.detailsPrice).toContainText('125,30 €');
      await expect(subscription.detailsDate).toContainText('12 March 2022');
      await expect(subscription.detailsCompanyName).toContainText('Apple');
      await expect(subscription.detailsCompanyEmail).toContainText(APPLE_EMAIL);
      await expect(subscription.detailsCompanyUrl).toHaveAttribute('href', APPLE_CONTACT);
      await expect(subscription.detailsExpiryDate).toContainText('Expires on 10 March 2025');
    });

    test('should stop a subscription', async ({ payByMobilePage }) => {
      const firstSubscription = payByMobilePage.getSubscription(2);
      await firstSubscription.open();
      await expect(firstSubscription.stopSubscriptionButton).toBeHidden();
      await firstSubscription.close();

      const subscription = payByMobilePage.getSubscription(0);
      await subscription.open();
      await subscription.stopSubscription();
      await subscription.cancelStopSubscription();
      await subscription.open();
      await subscription.stopSubscription();
      await subscription.confirmStopSubscription();
      await expect(payByMobilePage.message).toBeVisible();
    });

    async function expectSubscription(
      subscription: SubscriptionComponent,
      service: string,
      date: string,
      price: string,
      expiryDate: string = ''
    ) {
      await expect(subscription.service).toContainText(service);
      await expect(subscription.date).toContainText(date);
      await expect(subscription.price).toContainText(price);
      if (expiryDate) {
        await expect(subscription.expiryDate).toContainText(expiryDate);
      }
    }
  });
});

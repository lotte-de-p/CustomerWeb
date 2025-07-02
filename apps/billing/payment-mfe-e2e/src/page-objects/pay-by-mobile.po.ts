import { Page } from '@tools/e2e';
import { MobileLineSelectorComponent } from './components/mobile-line-selector.po';
import { TransactionComponent } from './components/transaction.po';
import { SubscriptionComponent } from './components/subscription.po';
import { MfeLoginComponent } from './components/mfe-login.po';
import WinkNotificationBannerComponent from './components/winkNotificationBanner.po';
import notificationBannerComponent from './components/notificationBanner.po';
import { Locator } from 'playwright/test';

export class PayByMobilePage {
  readonly root: Locator;
  readonly login: MfeLoginComponent;
  readonly mobileLineSelector: MobileLineSelectorComponent;
  readonly message: Locator;
  readonly errorMessage: notificationBannerComponent;
  readonly notificationMessage: WinkNotificationBannerComponent;
  readonly noContentMessage: WinkNotificationBannerComponent;
  readonly transactionsTitle: Locator;
  readonly subscriptionsTitle: Locator;
  readonly transactions: Locator;
  readonly subscriptions: Locator;
  readonly loadMoreTransactions: Locator;
  readonly showLessTransactions: Locator;

  public static readonly PAY_BY_MOBILE_NO_CONTENT_TITLE_LABEL_KEY = 'Nothing to see here';
  public static readonly PAY_BY_MOBILE_NO_CONTENT_DESCRIPTION_LABEL_KEY =
    'Want to find out which services you can pay through Telenet pay?';
  public static readonly PAY_BY_MOBILE_BACKEND_ERROR_LABEL_KEY = 'ng.ocapi.500-errorfield';

  constructor(private readonly page: Page) {
    this.root = this.page.locator('[data-testid="pay-by-mobile"]');
    this.login = new MfeLoginComponent(this.page, this.page.locator('tg-login'));
    this.mobileLineSelector = new MobileLineSelectorComponent(
      this.page.locator('[data-testid="mobile-line-selector"]'),
      this.page.locator('[data-cy="mobile-line-selector-slide-in"]'),
      this.page.locator('tg-mobile-line-selector')
    );
    this.message = this.page.locator('[data-cy="app-message-flow"]');
    this.errorMessage = new notificationBannerComponent(this.page.locator('[data-cy="app-message-flow"]'));
    this.notificationMessage = new WinkNotificationBannerComponent(
      this.page.locator('tg-billing-pay-by-mobile-msisdn-blocked-warning')
    );
    this.noContentMessage = new WinkNotificationBannerComponent(
      this.page.locator('tg-billing-pay-by-mobile-no-content')
    );
    this.transactionsTitle = this.page.locator('[data-cy="transactions-title"]');
    this.subscriptionsTitle = this.page.locator('[data-testid="subscriptions-title"]');
    this.transactions = this.page.locator('[data-testid="pay-by-mobile-transaction"]');
    this.subscriptions = this.page.locator('[data-testid="pay-by-mobile-subscription"]');
    this.loadMoreTransactions = this.page.locator('[data-testid="transactions-load-more"]');
    this.showLessTransactions = this.page.locator('[data-testid="transactions-show-less"]');
  }

  getTransaction(index: number) {
    return new TransactionComponent(
      this.transactions.nth(index),
      this.transactions.nth(index).locator('..').locator('aside')
    );
  }

  getSubscription(index: number) {
    return new SubscriptionComponent(
      this.subscriptions.nth(index),
      this.subscriptions.nth(index).locator('..').locator('aside')
    );
  }
}

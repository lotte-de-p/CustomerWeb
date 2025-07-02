import { Locator } from '@playwright/test';

export class SubscriptionComponent {
  readonly self: Locator;
  readonly service: Locator;
  readonly price: Locator;
  readonly expiryDate: Locator;
  readonly date: Locator;
  readonly details: Locator;
  readonly detailsRenewedAfter: Locator;
  readonly detailsExpiryDate: Locator;
  readonly detailsService: Locator;
  readonly detailsLogo: Locator;
  readonly detailsDate: Locator;
  readonly detailsPrice: Locator;
  readonly detailsCompanyName: Locator;
  readonly detailsCompanyEmail: Locator;
  readonly detailsCompanyUrl: Locator;
  readonly stopSubscriptionButton: Locator;
  readonly subscriptionClose: Locator;
  readonly stopSubscriptionConfirm: Locator;
  readonly stopSubscriptionCancel: Locator;

  constructor(
    private readonly componentRoot: Locator,
    private readonly detailsElement: Locator
  ) {
    this.self = this.componentRoot;
    this.service = this.componentRoot.locator('[data-testid="subscription-service"]');
    this.price = this.componentRoot.locator('[data-testid="subscription-price"]');
    this.expiryDate = this.componentRoot.locator('[data-testid="subscription-expiry-date"]');
    this.date = this.componentRoot.locator('[data-testid="subscription-date"]');
    this.details = this.detailsElement;
    this.detailsRenewedAfter = this.detailsElement.locator('[data-testid="subscription-detail-renewal"]');
    this.detailsExpiryDate = this.detailsElement.locator('[data-testid="subscription-detail-expiry-date"]');
    this.detailsService = this.detailsElement.locator('[data-testid="subscription-detail-service"]');
    this.detailsLogo = this.detailsElement.locator('tg-billing-transaction-logo');
    this.detailsDate = this.detailsElement.locator('[data-testid="subscription-detail-date"]');
    this.detailsPrice = this.detailsElement.locator('[data-testid="subscription-detail-price"]');
    this.detailsCompanyName = this.detailsElement.locator('[data-testid="subscription-detail-company-name"]');
    this.detailsCompanyEmail = this.detailsElement.locator('[data-testid="subscription-detail-company-email"]');
    this.detailsCompanyUrl = this.detailsElement.locator('[data-testid="subscription-detail-company-url"]');
    this.stopSubscriptionButton = this.detailsElement.locator('[data-testid="subscription-detail-stop"]');
    this.subscriptionClose = this.detailsElement.locator('.icon-cross');
    this.stopSubscriptionConfirm = this.detailsElement.locator(
      '[data-testid="subscription-detail-stop-confirmation-confirm"]'
    );
    this.stopSubscriptionCancel = this.detailsElement.locator(
      '[data-testid="subscription-detail-stop-confirmation-cancel"]'
    );
  }

  async open() {
    await this.componentRoot.click();
  }

  async close() {
    return this.subscriptionClose.click();
  }

  stopSubscription() {
    return this.stopSubscriptionButton.click();
  }

  cancelStopSubscription() {
    return this.stopSubscriptionCancel.click();
  }

  confirmStopSubscription() {
    return this.stopSubscriptionConfirm.click();
  }
}

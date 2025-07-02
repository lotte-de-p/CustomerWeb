import { Locator } from '@playwright/test';

export class TransactionComponent {
  readonly self: Locator;
  readonly service: Locator;
  readonly price: Locator;
  readonly date: Locator;
  readonly details: Locator;
  readonly detailsService: Locator;
  readonly detailsLogo: Locator;
  readonly detailsDate: Locator;
  readonly detailsPrice: Locator;
  readonly detailsCompanyName: Locator;
  readonly detailsCompanyEmail: Locator;
  readonly detailsCompanyUrl: Locator;
  readonly detailsClose: Locator;

  constructor(
    private readonly componentRoot: Locator,
    private readonly detailsElement: Locator
  ) {
    this.self = this.componentRoot;
    this.service = this.componentRoot.locator('[data-testid="transaction-service"]');
    this.price = this.componentRoot.locator('[data-testid="transaction-price"]');
    this.date = this.componentRoot.locator('[data-testid="transaction-date"]');
    this.details = this.detailsElement;
    this.detailsService = this.detailsElement.locator('[data-testid="transaction-detail-service"]');
    this.detailsLogo = this.detailsElement.locator('tg-billing-transaction-logo');
    this.detailsDate = this.detailsElement.locator('[data-testid="transaction-detail-date"]');
    this.detailsPrice = this.detailsElement.locator('[data-testid="transaction-detail-price"]');
    this.detailsCompanyName = this.detailsElement.locator('[data-testid="transaction-detail-company-name"]');
    this.detailsCompanyEmail = this.detailsElement.locator('[data-testid="transaction-detail-company-email"]');
    this.detailsCompanyUrl = this.detailsElement.locator('[data-testid="transaction-detail-company-url"]');
    this.detailsClose = this.detailsElement.locator('.icon-cross');
  }

  async open() {
    await this.componentRoot.click();
  }

  async close() {
    return this.detailsClose.click();
  }
}

import { Locator } from '@playwright/test';

export class BillingAccountComponent {
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_NUMBER = '[data-testid="billing-accounts-option-number"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_ADDRESS = '[data-testid="billing-accounts-option-address"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_STATUS = '[data-testid="billing-accounts-option-status"]';

  constructor(private readonly element: Locator) {}

  get billingAccountNumber() {
    return this.element.locator(BillingAccountComponent.BILLING_OVERVIEW_BILLING_ACCOUNT_NUMBER);
  }

  get address() {
    return this.element.locator(BillingAccountComponent.BILLING_OVERVIEW_BILLING_ACCOUNT_ADDRESS);
  }

  get status() {
    return this.element.locator(BillingAccountComponent.BILLING_OVERVIEW_BILLING_ACCOUNT_STATUS);
  }
}

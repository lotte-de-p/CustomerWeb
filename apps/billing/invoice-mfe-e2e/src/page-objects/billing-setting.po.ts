import { Locator } from '@playwright/test';

export class BillingSettingComponent {
  private static readonly BILLING_OVERVIEW_METHOD_SUMMARY_TEXT =
    '[data-testid="billing-overview-current-summary-method-header-text"]';
  private static readonly BILLING_OVERVIEW_METHOD_SUMMARY_DESCRIPTION =
    '[data-testid="billing-overview-current-summary-method-description-text"]';
  private static readonly BILLING_OVERVIEW_MANAGE_SETTINGS =
    '[data-testid="billing-overview-current-summary-manage-billing-settings"]';
  private static readonly BILLING_OVERVIEW_METHOD_SUMMARY_DESCRIPTION_VALUE =
    '[data-testid="billing-overview-current-summary-method-description-text-value"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_METHOD_CHANGE_NOTIFICATION =
    '[data-testid="billing-overview-payment-method-change-notification"]';

  constructor(private readonly element: Locator) {}

  get self() {
    return this.element;
  }

  get header() {
    return this.element.locator(BillingSettingComponent.BILLING_OVERVIEW_METHOD_SUMMARY_TEXT);
  }

  get description() {
    return this.element.locator(BillingSettingComponent.BILLING_OVERVIEW_METHOD_SUMMARY_DESCRIPTION);
  }

  get settingsUrl() {
    return this.element.locator(BillingSettingComponent.BILLING_OVERVIEW_MANAGE_SETTINGS);
  }

  get descriptionValue() {
    return this.element.locator(BillingSettingComponent.BILLING_OVERVIEW_METHOD_SUMMARY_DESCRIPTION_VALUE);
  }

  get paymentMethodChangeNotification() {
    return this.element.locator(BillingSettingComponent.BILLING_OVERVIEW_PAYMENT_METHOD_CHANGE_NOTIFICATION);
  }
}

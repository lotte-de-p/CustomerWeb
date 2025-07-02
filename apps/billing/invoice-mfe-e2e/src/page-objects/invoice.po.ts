import { Locator } from '@playwright/test';

export class InvoiceComponent {
  private static readonly BILLING_OVERVIEW_INVOICE_DATE = '[data-testid="billing-overview-invoice-date"]';
  private static readonly BILLING_OVERVIEW_INVOICE_AMOUNT = '[data-testid="billing-overview-amount"]';
  private static readonly BILLING_OVERVIEW_INVOICE_AMOUNT_VALUE = '[data-testid="billing-overview-amount-value"]';
  private static readonly BILLING_OVERVIEW_INVOICE_REMAINING_AMOUNT =
    '[data-testid="billing-overview-amount-remaining"]';
  private static readonly BILLING_OVERVIEW_INVOICE_STATUS = '[data-testid="billing-overview-unpaid-status"]';
  private static readonly BILLING_OVERVIEW_INVOICE_ICON = '[data-testid="billing-overview-invoice-icon"]';
  private static readonly BILLING_OVERVIEW_DOWNLOAD = '[data-testid="billing-overview-download"]';
  private static readonly BILLING_OVERVIEW_PAY = '[data-testid="billing-overview-invoice-pay"]';
  private static readonly BILLING_OVERVIEW_INVOICE_STATUS_NOTIFICATION =
    '[data-testid="billing-overview-invoice-status-notification"]';

  constructor(private readonly element: Locator) {}

  get status() {
    return this.element.locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_STATUS);
  }

  get statusNotification() {
    return this.status.locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_STATUS_NOTIFICATION);
  }

  get icon() {
    return this.element.locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_ICON);
  }

  get amount() {
    return this.element
      .locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_AMOUNT)
      .locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_AMOUNT_VALUE);
  }

  get remainingAmount() {
    return this.element
      .locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_AMOUNT)
      .locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_REMAINING_AMOUNT);
  }

  get date() {
    return this.element.locator(InvoiceComponent.BILLING_OVERVIEW_INVOICE_DATE);
  }

  get download() {
    return this.element.locator(InvoiceComponent.BILLING_OVERVIEW_DOWNLOAD);
  }

  get payButton() {
    return this.element.locator(InvoiceComponent.BILLING_OVERVIEW_PAY);
  }
}

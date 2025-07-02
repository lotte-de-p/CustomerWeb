import { Page } from '@tools/e2e';
import { InvoiceComponent } from './invoice.po';
import { BillingAccountSelectorComponent } from './billing-account-selector.po';
import { DownloadErrorDialogComponent } from './download-error-dialog.po';
import { BillingSettingComponent } from './billing-setting.po';
import { ExportInvoicesComponent } from './export-invoices.po';

export class BillingOverviewPage {
  private static readonly BILLING_OVERVIEW_SELECTOR_ROOT = '[data-testid="billing-overview"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR_WRAPPER =
    '[data-testid="billing-account-selector-wrapper"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR = '[data-testid="billing-account-selector"]';
  private static readonly BILLING_OVERVIEW_UNPAID_INVOICE = '[data-testid="billing-overview-unpaid-invoice"]';
  private static readonly BILLING_OVERVIEW_PAID_INVOICE = '[data-testid="billing-overview-paid-invoice"]';
  private static readonly BILLING_OVERVIEW_LOAD_MORE = '[data-testid="billing-overview-view-all-invoices"]';
  private static readonly BILLING_OVERVIEW_ALL_LOADED = '[data-testid="billing-overview-all-loaded"]';
  private static readonly BILLING_OVERVIEW_ERROR = '[data-testid="billing-overview-error"]';
  private static readonly BILLING_OVERVIEW_SETTINGS_TITLE = '[data-testid="billing-overview-title-billing-settings"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_METHOD =
    '[data-testid="billing-overview-current-payment-method-card"]';
  private static readonly BILLING_OVERVIEW_DOWNLOAD_ERROR_DIALOG =
    '[data-testid="billing-overview-download-error-dialog"]';
  private static readonly BILLING_OVERVIEW_NO_BILLS = '[data-testid="billing-overview-no-bills"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_ERROR =
    '[data-testid="billing-overview-billing-accounts-error"]';
  private static readonly BILLING_OVERVIEW_BILLING_ACCOUNT_NO_BILLING_ACCOUNTS =
    '[data-testid="billing-overview-no-billing-accounts"]';
  private static readonly BILLING_OVERVIEW_DELIVERY_METHOD =
    '[data-testid="billing-overview-current-delivery-method-card"]';
  private static readonly BILLING_OVERVIEW_TOTAL_PAY = '[data-testid="billing-overview-invoice-pay"]';
  private static readonly BILLING_OVERVIEW_REIMBURSEMENT = '[data-testid="billing-overview-no-bills-reimbursement"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_ENCOURAGEMENT =
    '[data-testid="billing-overview-payment-encouragement"]';
  private static readonly BILLING_OVERVIEW_TREATMENT_MESSAGE = '[data-testid="billing-overview-treatment-message"]';
  private static readonly BILLING_OVERVIEW_INVOICE_STATUS_NOTIFICATION =
    '[data-testid="billing-overview-invoice-status-notification"]';
  private static readonly BILLING_OVERVIEW_INVOICE_EXPORT = '[data-testid="billing-overview-export"]';
  private static readonly BILLING_OVERVIEW_INVOICE_EXPORT_CONTENT = '[data-testid="billing-overview-export-content"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_PLAN_NOTIFICATION =
    '[data-testid="billing-overview-payment-plan-notification"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_ICON =
    '[data-testid="billing-overview-payment-method-changed-icon"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_HEADER =
    '[data-testid="billing-overview-payment-method-changed-header"]';
  private static readonly BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_DESCRIPTION =
    '[data-testid="billing-overview-payment-method-changed-description"]';
  private static readonly BILLING_OVERVIEW_PAID_BILL_SCENARIO = '[data-testid="billing-overview-paid-bill-scenario"]';
  private static readonly BILLING_OVERVIEW_UNPAID_BILL_SCENARIO =
    '[data-testid="billing-overview-unpaid-bill-scenario"]';
  private static readonly BILLING_OVERVIEW_BILL_SCENARIOS = '[data-testid="billing-overview-bill-scenarios"]';

  constructor(private readonly page: Page) {}

  get root() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_SELECTOR_ROOT);
  }

  get unpaidInvoices() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_UNPAID_INVOICE);
  }

  getUnpaidInvoice(index: number) {
    return new InvoiceComponent(this.unpaidInvoices.nth(index));
  }

  get paidInvoices() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAID_INVOICE);
  }

  getPaidInvoice(index: number) {
    return new InvoiceComponent(this.paidInvoices.nth(index));
  }

  get loadMore() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_LOAD_MORE);
  }

  get allLoaded() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_ALL_LOADED);
  }

  get billingAccountSelector() {
    return new BillingAccountSelectorComponent(
      this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR_WRAPPER),
      this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_BILLING_ACCOUNT_SELECTOR)
    );
  }

  get error() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_ERROR);
  }

  get downloadErrorDialog() {
    return new DownloadErrorDialogComponent(
      this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_DOWNLOAD_ERROR_DIALOG)
    );
  }

  get settingsHeader() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_SETTINGS_TITLE);
  }

  get paymentMethod() {
    return new BillingSettingComponent(this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_METHOD));
  }

  get noBills() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_NO_BILLS);
  }

  get noBillsReimbursement() {
    return this.noBills.locator(BillingOverviewPage.BILLING_OVERVIEW_REIMBURSEMENT);
  }

  get billingAccountsError() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_BILLING_ACCOUNT_ERROR);
  }

  get noBillingAccounts() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_BILLING_ACCOUNT_NO_BILLING_ACCOUNTS);
  }

  get deliveryMethod() {
    return new BillingSettingComponent(this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_DELIVERY_METHOD));
  }

  get totalPayButton() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_TOTAL_PAY);
  }

  get paymentEncouragement() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_ENCOURAGEMENT);
  }

  get treatmentMessage() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_TREATMENT_MESSAGE);
  }

  get statusNotification() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_INVOICE_STATUS_NOTIFICATION);
  }

  get exportInvoices() {
    return new ExportInvoicesComponent(
      this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_INVOICE_EXPORT),
      this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_INVOICE_EXPORT_CONTENT)
    );
  }

  get paymentPlanMessage() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_PLAN_NOTIFICATION);
  }

  get paymentMethodChangedIcon() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_ICON);
  }

  get paymentMethodChangedHeader() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_HEADER);
  }

  get paymentMethodChangedDescription() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAYMENT_METHOD_CHANGED_DESCRIPTION);
  }

  get paidBillScenario() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_PAID_BILL_SCENARIO);
  }

  get unpaidBillScenario() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_UNPAID_BILL_SCENARIO);
  }

  get billScenarios() {
    return this.page.locator(BillingOverviewPage.BILLING_OVERVIEW_BILL_SCENARIOS);
  }
}

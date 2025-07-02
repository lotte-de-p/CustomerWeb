import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingAccountSelectorComponent } from '@billing/shared/feat-billing-account-selector';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { BillingAccount, Invoice, InvoiceOverviewFacade } from '@billing/invoice-overview/data-access';
import { BrandImageDirective, LanguageService, PathCategorisationService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton, WinkIcon, WinkImg, WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { ErrorNotificationComponent } from '@billing/shared/ui';
import { MessagesModule } from '@telenet/ng-lib-message';
import {
  BillingOverviewAmountComponent,
  BillingOverviewCurrentSummaryComponent,
  BillingOverviewDownloadComponent,
  BillingOverviewExplicitBillScenariosComponent,
  BillingOverviewExportComponent,
  BillingOverviewIconComponent,
  BillingOverviewNoBillsComponent,
  BillingOverviewPayComponent,
  BillingOverviewPaymentMethodChangedComponent,
  BillingOverviewSkeletonComponent,
  BillingOverviewUnpaidStatusComponent,
  BRAND_TELENET,
  PaidInvoiceComponent,
  PaymentEncouragementComponent,
  ToDescriptionsPipe,
  TreatmentMessageComponent,
  UnpaidInvoiceComponent,
  UnpaidStatusNotificationComponent,
} from '@billing/invoice-overview/ui';

@Component({
  selector: 'tg-billing-overview',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BillingAccountSelectorComponent,
    LoginModule,
    BillingOverviewAmountComponent,
    BillingOverviewIconComponent,
    BillingOverviewNoBillsComponent,
    BillingOverviewSkeletonComponent,
    BillingOverviewPayComponent,
    ErrorNotificationComponent,
    MessagesModule,
    BillingOverviewDownloadComponent,
    BillingOverviewUnpaidStatusComponent,
    BillingOverviewCurrentSummaryComponent,
    ToDescriptionsPipe,
    UnpaidInvoiceComponent,
    PaidInvoiceComponent,
    PaymentEncouragementComponent,
    UnpaidStatusNotificationComponent,
    TreatmentMessageComponent,
    BillingOverviewExportComponent,
    BrandImageDirective,
    WinkIcon,
    WinkButton,
    WinkNotification,
    WinkTitle,
    WinkParagraph,
    WinkImg,
    BillingOverviewPaymentMethodChangedComponent,
    BillingOverviewExplicitBillScenariosComponent,
  ],
  templateUrl: './billing-overview.component.html',
  styleUrl: './billing-overview.component.scss',
})
export class BillingOverviewComponent {
  public static readonly MESSAGE_GROUP = 'billing-overview';
  private readonly languageService: LanguageService = inject(LanguageService);
  private readonly facade = inject(InvoiceOverviewFacade);
  private readonly pathCategorisationService = inject(PathCategorisationService);
  scopes = ['invoices'];
  allLoaded = '/content/dam/www-telenet-touch/nl/dfd/check.svg';
  allLoadedBase = '/content/dam/www-telenet-touch/nl/dfd/check-base.svg';
  noBills = '/content/dam/www-telenet-touch/nl/dfd/sleeping-bill.svg';
  noBillsBase = '/content/dam/www-telenet-touch/nl/dfd/sleeping-bill-base.svg';
  noUnpaidBills = '/content/dam/www-telenet-touch/nl/dfd/all-bills-paid.svg';
  noUnpaidBillsBase = '/content/dam/www-telenet-touch/nl/dfd/all-bills-paid-base.svg';
  @Input() billingSettingsLink: string;
  @Input() onlinePaymentLink: string;
  @Input() homePageLink: string;
  @Input() showBillScenario: boolean;

  loadMore(): void {
    this.facade.loadMore();
  }

  get loading() {
    return this.facade.loading;
  }

  get invoiceOverview() {
    return this.facade.invoiceOverview;
  }

  get showAll() {
    return this.facade.showAll;
  }

  get error() {
    return this.facade.loadError;
  }

  get locale() {
    return this.languageService.getLocaleString();
  }

  get selectedBillingAccount() {
    return this.facade.selectedBillingAccount;
  }

  get paidInvoicesAvailable() {
    return this.facade.paidInvoicesAvailable;
  }

  get isBusinessCustomer() {
    return this.facade.isBusinessCustomer;
  }

  get isPaymentPlanActive() {
    return this.facade.isPaymentPlanActive;
  }

  getBillingSettingsUrl(billingAccount: BillingAccount) {
    return (
      this.billingSettingsLink && `${this.billingSettingsLink}?accountNumber=${billingAccount?.billingAccountNumber}`
    );
  }

  getOnlinePaymentUrl(billingAccount: BillingAccount, invoice: Invoice) {
    const onlinePaymentSuffix = this.isBusinessCustomer()
      ? `&billNumber=${invoice.invoiceNumber}&ogmCode=${invoice.ogmCode}`
      : '';
    return (
      this.onlinePaymentLink &&
      `${this.onlinePaymentLink}?accountNumber=${billingAccount?.billingAccountNumber}${onlinePaymentSuffix}`
    );
  }

  get isEligibleForPayment(): boolean {
    return this.facade.isEligibleForPayment();
  }

  get isTelenetCustomer(): boolean {
    return this.pathCategorisationService.getCustomerBrand() === BRAND_TELENET;
  }

  get updatedPaymentMethod(): string {
    return this.facade.updatedPaymentMethod();
  }

  get isPaymentMethodUpdated(): boolean {
    return this.updatedPaymentMethod !== '';
  }

  get areExplicitBillScenariosAvailable(): boolean {
    return this.facade.areExplicitBillScenariosAvailable() && this.showBillScenario;
  }
}

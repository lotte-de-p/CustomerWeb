import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import {
  BillingScenario,
  BillingScenarioName,
  BillingScenarioType,
  Invoice,
  InvoiceOverviewDatalayerService,
  InvoiceOverviewService,
  PaymentMethod,
} from '@billing/invoice-overview/data-access';
import { DatePipe, JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { WinkButton, WinkIcon, WinkParagraph, WinkTitle } from '@telenet/wink-ng';
import { SlideMenuComponent } from '@billing/shared/ui';
import { TranslateModule } from '@ngx-translate/core';
import { BillingOverviewUnpaidStatusComponent } from '../billing-overview-unpaid-status/billing-overview-unpaid-status.component';
import { BillingOverviewBillShockMessageComponent } from '../billing-overview-bill-shock-message/billing-overview-bill-shock-message.component';
import { BillingOverviewPayComponent } from '../billing-overview-pay/billing-overview-pay.component';
import FileSaver from 'file-saver';
import { BillingOverviewPaidStatusComponent } from '../billing-overview-paid-status/billing-overview-paid-status.component';
import { BillingOverviewDownloadErrorNotificationComponent } from '../billing-overview-download-error-notification/billing-overview-download-error-notification.component';
import dayjs from 'dayjs';

@Component({
  selector: 'tg-billing-overview-bill-scenario-details',
  standalone: true,
  templateUrl: './billing-overview-bill-scenario-details.component.html',
  imports: [
    BillingOverviewAmountComponent,
    BillingOverviewDownloadComponent,
    BillingOverviewIconComponent,
    DatePipe,
    NgClass,
    WinkButton,
    SlideMenuComponent,
    TranslateModule,
    WinkParagraph,
    WinkTitle,
    WinkIcon,
    BillingOverviewUnpaidStatusComponent,
    NgIf,
    BillingOverviewBillShockMessageComponent,
    BillingOverviewPayComponent,
    JsonPipe,
    NgForOf,
    BillingOverviewPaidStatusComponent,
    BillingOverviewDownloadErrorNotificationComponent,
  ],
})
export class BillingOverviewBillScenarioDetailsComponent implements OnInit, AfterViewInit {
  private readonly languageService: LanguageService = inject(LanguageService);
  private readonly urlService: UrlService = inject(UrlService);
  private readonly datalayerService = inject(InvoiceOverviewDatalayerService);
  private readonly invoiceService = inject(InvoiceOverviewService);
  showMenu = false;
  groupedScenarios: { type: string; scenarioNames: BillingScenarioName[] }[] = [];
  loading = false;
  showError = false;

  @ViewChild('errorNotification', { static: false }) errorNotification: ElementRef;
  @ViewChild('billScenarios', { static: false }) billScenarios: ElementRef;
  @Input() invoice!: Invoice;
  @Input() paymentMethod: PaymentMethod;
  @Input() onlinePaymentLink?: string;
  @Input() paymentStatus: string;

  ngOnInit() {
    this.showError = false;
    if (this.invoice?.billingScenarios) {
      this.groupedScenarios = this.getScenariosGroupedByName(this.invoice.billingScenarios);
    }
  }

  ngAfterViewInit() {
    if (this.showError && this.errorNotification) {
      this.billScenarios.nativeElement.scrollTop = 0;
      this.errorNotification.nativeElement.focus();
    }
  }

  open(event?: Event) {
    event?.stopPropagation();
    this.showMenu = true;
    this.datalayerService.sendAdditionalBillScenarios(this.invoice, this.paymentStatus);
  }

  close() {
    this.showMenu = false;
  }

  get locale() {
    return this.languageService.getLocaleString();
  }

  getScenariosGroupedByName(
    billScenarios: BillingScenario[]
  ): { type: string; scenarioNames: BillingScenarioName[] }[] {
    const groupedScenarios = billScenarios.reduce(
      (acc, scenario) => {
        if (!acc[scenario.type]) {
          acc[scenario.type] = new Set<BillingScenarioName>();
        }
        acc[scenario.type].add(scenario.name);
        return acc;
      },
      {} as Record<BillingScenarioType, Set<BillingScenarioName>>
    );
    return Object.keys(groupedScenarios).map((type) => ({
      type: `ng.billing-overview.lbl.bill-shock-${type.toLowerCase().replace(/_/g, '-')}-header`,
      scenarioNames: Array.from(groupedScenarios[type as BillingScenarioType]),
    }));
  }

  redirectToOnlinePayment(event: Event): void {
    event?.stopPropagation();
    this.urlService.redirectTo(this.onlinePaymentLink || '');
  }

  downloadInvoice(): void {
    this.loading = true;
    this.showError = false;
    this.datalayerService.sendDownloadInvoice();
    this.invoiceService.downloadDocument(this.invoice).subscribe({
      next: (response: Blob) => {
        const fileName = `${this.invoice.invoiceNumber}.pdf`;
        FileSaver.saveAs(response, fileName);
      },
      error: () => {
        this.loading = false;
        this.showError = true;
      },
      complete: () => (this.loading = false),
    });
  }

  formattedInvoiceDate(): string {
    return dayjs(this.invoice.invoiceDate).format('D MMMM');
  }
}

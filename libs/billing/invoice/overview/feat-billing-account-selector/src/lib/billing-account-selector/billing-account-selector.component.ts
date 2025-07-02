import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorNotificationComponent, SlideMenuComponent } from '@billing/shared/ui';
import { BillingAccount, BillingAccountService, InvoiceOverviewFacade } from '@billing/invoice-overview/data-access';
import { BillingAccountStatusComponent } from '../billing-account-status/billing-account-status.component';
import { WinkIcon } from '@telenet/wink-ng';
import { UrlService } from '@telenet/ng-lib-page';
import { BillingOverviewNoBillingAccountsComponent } from '@billing/invoice-overview/ui';

@Component({
  selector: 'tg-billing-account-selector',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SlideMenuComponent,
    BillingAccountStatusComponent,
    ErrorNotificationComponent,
    WinkIcon,
    BillingOverviewNoBillingAccountsComponent,
  ],
  templateUrl: './billing-account-selector.component.html',
  styleUrl: './billing-account-selector.component.scss',
})
export class BillingAccountSelectorComponent implements OnInit {
  public static BILLING_ACCOUNT_STORAGE_KEY = 'selected-billing-account';

  billingAccounts: BillingAccount[] = [];
  loading = false;
  showMenu = false;
  error = false;
  @Input() homePageLink!: string;
  @Input() isTelenetCustomer!: boolean;
  @Input() showBillScenario!: boolean;

  private readonly service = inject(BillingAccountService);
  private readonly facade = inject(InvoiceOverviewFacade);
  private readonly urlService = inject(UrlService);

  ngOnInit() {
    this.loading = true;
    this.error = false;
    this.service.getBillingAccounts().subscribe({
      next: (billingAccounts: BillingAccount[]) => {
        this.billingAccounts = billingAccounts;
        const defaultBillingAccount = this.getSelectedBillingAccount(billingAccounts);
        this.selectBillingAccount(defaultBillingAccount);
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  selectBillingAccount(billingAccount?: BillingAccount): void {
    if (billingAccount) {
      this.facade.selectBillingAccount(billingAccount, this.showBillScenario);
      sessionStorage.setItem(
        BillingAccountSelectorComponent.BILLING_ACCOUNT_STORAGE_KEY,
        billingAccount.billingAccountNumber
      );
      this.close();
    }
  }

  close() {
    this.showMenu = false;
  }

  open(event?: Event) {
    event?.stopPropagation();
    this.showMenu = true;
  }

  get selectedBillingAccount() {
    return this.facade.selectedBillingAccount;
  }

  private getSelectedBillingAccount(billingAccounts: BillingAccount[]): BillingAccount | undefined {
    const storedBillingAccount = sessionStorage.getItem(BillingAccountSelectorComponent.BILLING_ACCOUNT_STORAGE_KEY);
    const queryBillingAccount = this.urlService.getRequestParamValue('accountNumber', '');
    return (
      billingAccounts.find((billingAccount) => billingAccount.billingAccountNumber === queryBillingAccount) ||
      billingAccounts.find((billingAccount) => billingAccount.billingAccountNumber === storedBillingAccount) ||
      billingAccounts.find((billingAccount) => billingAccount.defaultAccount)
    );
  }
}

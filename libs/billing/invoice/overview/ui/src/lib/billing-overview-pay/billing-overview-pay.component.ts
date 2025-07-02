import { Component, inject, Input } from '@angular/core';
import { NgIf, registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton } from '@telenet/wink-ng';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';
import { UrlService } from '@telenet/ng-lib-page';
import { InvoiceAmountPipe } from '../pipes/invoice-amount.pipe';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localeNl);

@Component({
  standalone: true,
  selector: 'tg-billing-overview-pay',
  template: ` <wink-button
    data-testid="billing-overview-invoice-pay"
    *ngIf="amount"
    (click)="redirectToOnlinePayment($event)"
    [text]="translationKey | translate: { amount: amount | invoiceAmount: locale }"
    appearance="primary"></wink-button>`,
  imports: [TranslateModule, WinkButton, NgIf, InvoiceAmountPipe],
})
export class BillingOverviewPayComponent {
  @Input() amount?: number;
  @Input() locale!: string;
  @Input() translationKey = 'ng.billing-overview.pay';
  @Input() onlinePaymentLink!: string;

  private readonly urlService = inject(UrlService);

  redirectToOnlinePayment(event: Event): void {
    event?.stopPropagation();
    this.urlService.redirectTo(this.onlinePaymentLink);
  }
}

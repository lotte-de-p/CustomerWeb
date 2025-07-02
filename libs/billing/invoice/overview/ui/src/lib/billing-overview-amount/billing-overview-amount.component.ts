import { Component, Input } from '@angular/core';
import { NgIf, registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';
import { TranslateModule } from '@ngx-translate/core';
import { InvoiceAmountPipe } from '../pipes/invoice-amount.pipe';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localeNl);

@Component({
  standalone: true,
  selector: 'tg-billing-overview-amount',
  template: ` <div data-testid="billing-overview-amount">
    <h3 data-testid="billing-overview-amount-value" class="my--n heading--nomargin">
      {{ amount | invoiceAmount: locale }}
    </h3>
    <div
      class="font--body-small color-shade_64"
      data-testid="billing-overview-amount-remaining"
      *ngIf="isPartiallyPaid">
      {{
        'ng.billing-overview.billing-overview.lbl.status.partially-paid.outstanding-debt'
          | translate: { amount: invoiceAmount | invoiceAmount: locale }
      }}
    </div>
  </div>`,
  imports: [InvoiceAmountPipe, NgIf, TranslateModule],
})
export class BillingOverviewAmountComponent {
  @Input() invoiceAmount!: number;
  @Input() outstandingDebt!: number;
  @Input() locale!: string;

  get amount() {
    if (this.outstandingDebt === 0) return this.invoiceAmount;
    return this.outstandingDebt;
  }

  get isPartiallyPaid() {
    return this.invoiceAmount > this.outstandingDebt && this.outstandingDebt > 0;
  }
}

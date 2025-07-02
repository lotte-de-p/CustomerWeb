import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgIf, registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InvoiceAmountPipe } from '../pipes/invoice-amount.pipe';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';
import { WinkImg } from '@telenet/wink-ng';
import { BrandImageDirective } from '@telenet/ng-lib-page';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localeNl);

@Component({
  standalone: true,
  selector: 'tg-billing-overview-no-bills',
  template: ` <div
    data-testid="billing-overview-no-bills"
    class="background-white mt--xxl p--l display--flex flex-direction--column align-items--center">
    <wink-img
      brandImage
      [isTelenet]="isTelenet"
      [img]="telenetImg"
      [telenetImg]="telenetImg"
      [baseImg]="baseImg"></wink-img>
    <div class="heading--4 mt--m">{{ text }}</div>
    <div
      *ngIf="totalAmount < 0"
      class="color-notification--success--light"
      data-testid="billing-overview-no-bills-reimbursement">
      <i class="mr--xxs icon-md icon-information-shape-filled" size="md"></i>
      <span
        [innerHTML]="
          'ng.billing-overview.no-unpaid.reimbursement' | translate: { amount: amount | invoiceAmount: locale }
        "></span>
    </div>
  </div>`,
  imports: [CurrencyPipe, NgIf, TranslateModule, InvoiceAmountPipe, WinkImg, BrandImageDirective],
})
export class BillingOverviewNoBillsComponent {
  @Input() totalAmount!: number;
  @Input() telenetImg!: string;
  @Input() baseImg!: string;
  @Input() isTelenet!: boolean;
  @Input() text!: string;
  @Input() locale!: string;

  get amount() {
    return Math.abs(this.totalAmount);
  }
}

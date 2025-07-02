import { Component, inject, Input } from '@angular/core';
import { UnpaidStatusNotificationComponent } from '../billing-overview-unpaid-status-notification/billing-overview-unpaid-status-notification.component';
import { WinkIcon } from '@telenet/wink-ng';
import { PaymentMethod, PaymentStatus } from '@billing/invoice-overview/data-access';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import dayjs from 'dayjs';
import { LanguageService } from '@telenet/ng-lib-page';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeNl);
registerLocaleData(localeEn);

@Component({
  standalone: true,
  selector: 'tg-billing-overview-unpaid-status',
  templateUrl: './billing-overview-unpaid-status.component.html',
  imports: [WinkIcon, CommonModule, TranslateModule, UnpaidStatusNotificationComponent],
})
export class BillingOverviewUnpaidStatusComponent {
  @Input() paymentStatus: PaymentStatus;
  @Input() paymentMethod: PaymentMethod;
  @Input() paymentDueDate?: Date;

  private readonly languageService: LanguageService = inject(LanguageService);

  getIcon(paymentStatus: PaymentStatus, paymentMethod: PaymentMethod): string {
    if (paymentStatus === PaymentStatus.OVERDUE) {
      return 'icon-error-shape-filled';
    }
    return paymentMethod === PaymentMethod.DIRECT_DEBIT ? 'icon-calendar' : 'icon-information-shape-filled';
  }

  getTextClass(paymentStatus: PaymentStatus): string {
    return paymentStatus === PaymentStatus.OVERDUE
      ? 'color-notification--error--light'
      : 'color-notification--info--light';
  }

  getDaysPastPaymentDueDate(paymentDueDate: Date): number {
    return dayjs().diff(dayjs(paymentDueDate), 'days');
  }

  get locale() {
    return this.languageService.getLocaleString();
  }

  getLabel(label: PaymentMethod | PaymentStatus) {
    return label.replace('_', '-').toLowerCase();
  }
}

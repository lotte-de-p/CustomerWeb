import { inject, Pipe, PipeTransform } from '@angular/core';
import {
  BillingAccount,
  billingAddressToDisplay,
  StatusDescription,
  DisplayPhoneNumberService,
} from '@billing/invoice-overview/data-access';

@Pipe({
  name: 'toDescriptions',
  standalone: true,
})
export class ToDescriptionsPipe implements PipeTransform {
  private readonly displayPhoneNumberService = inject(DisplayPhoneNumberService);

  transform(billingAccount: BillingAccount, method: string): StatusDescription[] {
    const descriptionsMap = {
      DIRECT_DEBIT: [{ caption: 'ng.billing-overview.lbl.current-payment-method-direct-debit' }],
      MANUAL: [{ caption: 'ng.billing-overview.lbl.current-payment-method-manual' }],
      PAPER: [
        {
          caption: 'ng.billing-overview.lbl.current-delivery-method-paper',
          value: billingAddressToDisplay(billingAccount.billingAddress),
        },
      ],
      SMS: [
        {
          caption: 'ng.billing-overview.lbl.current-delivery-method-sms',
          value: this.displayPhoneNumberService.formatPhoneNumber(billingAccount.mobilePhoneNumber || ''),
        },
      ],
      EMAIL: [{ caption: 'ng.billing-overview.lbl.current-delivery-method-email', value: billingAccount.email }],
      EMAIL_SMS: [
        { caption: 'ng.billing-overview.lbl.current-delivery-method-email', value: billingAccount.email },
        {
          caption: 'ng.billing-overview.lbl.current-delivery-method-sms',
          value: this.displayPhoneNumberService.formatPhoneNumber(billingAccount.mobilePhoneNumber || ''),
        },
      ],
      DOCCLE: [{ caption: 'ng.billing-overview.lbl.current-delivery-method-doccle' }],
      ETIS: [{ caption: 'ng.billing-overview.lbl.current-delivery-method-etis', value: billingAccount.email }],
    };

    return descriptionsMap[method];
  }
}

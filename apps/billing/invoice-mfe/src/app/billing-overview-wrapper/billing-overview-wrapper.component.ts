import { Component } from '@angular/core';
import { BillingOverviewComponent } from '@billing/invoice-overview/feat-billing-overview';

@Component({
  selector: 'tg-billing-overview-wrapper',
  template: ` <tg-billing-overview
    [billingSettingsLink]="'/some-url'"
    [onlinePaymentLink]="'/online-payment-url'"
    [homePageLink]="'/homepage-url'"
    [showBillScenario]="true">
  </tg-billing-overview>`,
  standalone: true,
  imports: [BillingOverviewComponent],
})
export class BillingOverviewWrapperComponent {}

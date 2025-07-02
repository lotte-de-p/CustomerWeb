import { NgModule } from '@angular/core';
import { BillingOverviewComponent } from '@billing/invoice-overview/feat-billing-overview';

@NgModule({})
export class BillingOverviewModule {
  static components = {
    'tg-billing-overview': BillingOverviewComponent,
  };
}

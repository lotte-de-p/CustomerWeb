import { NgModule } from '@angular/core';
import { PayByMobileOverviewComponent } from '@billing/pay-by-mobile/feat-pay-by-mobile';

@NgModule({})
export class PayByMobileModule {
  static components = {
    'tg-pay-by-mobile': PayByMobileOverviewComponent,
  };
}

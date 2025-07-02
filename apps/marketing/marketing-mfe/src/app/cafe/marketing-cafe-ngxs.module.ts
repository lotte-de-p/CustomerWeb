import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from './priced-customer-product-holding/state/priced-cph.state';

@NgModule({
  imports: [NgxsModule.forFeature([PricedCphState])],
})
export class MarketingCafeNgxsModule {}

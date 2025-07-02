import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { salesCheckoutFeature } from './sales-checkout.reducer';

@NgModule({
  imports: [StoreModule.forFeature(salesCheckoutFeature)],
})
export class SalesCheckoutNgrxModule {}

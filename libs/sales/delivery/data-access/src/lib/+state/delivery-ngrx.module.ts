import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { deliveryFeature } from './delivery.reducer';

@NgModule({
  imports: [StoreModule.forFeature(deliveryFeature)],
})
export class DeliveryNgrxModule {}

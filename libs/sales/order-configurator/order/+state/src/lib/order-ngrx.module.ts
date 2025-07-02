import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { orderFeature } from './order.reducer';

@NgModule({
  imports: [StoreModule.forFeature(orderFeature)],
})
export class OrderNgrxModule {}

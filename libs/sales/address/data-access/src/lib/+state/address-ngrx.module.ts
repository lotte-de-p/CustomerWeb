import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addressFeature } from './address.reducer';

@NgModule({
  imports: [StoreModule.forFeature(addressFeature)],
})
export class AddressNgrxModule {}

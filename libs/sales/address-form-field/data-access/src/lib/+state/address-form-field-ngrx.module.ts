import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { addressFormFieldFeature } from './address-form-field.reducer';

@NgModule({
  imports: [StoreModule.forFeature(addressFormFieldFeature)],
})
export class AddressFormFieldNgrxModule {}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { installationAddressFeature } from './address.reducer';

@NgModule({
  imports: [StoreModule.forFeature(installationAddressFeature)],
})
export class AddressNgrxModule {}

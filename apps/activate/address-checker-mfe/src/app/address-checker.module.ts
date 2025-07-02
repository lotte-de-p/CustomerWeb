import { NgModule } from '@angular/core';
import { FiberAddressCheckerComponent } from '@address-checker/feat-address-checker';

@NgModule({})
export class AddressCheckerModule {
  static components = {
    'tg-fiber-address-checker': FiberAddressCheckerComponent,
  };
}

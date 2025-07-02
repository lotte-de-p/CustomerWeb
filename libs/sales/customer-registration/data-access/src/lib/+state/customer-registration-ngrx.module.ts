import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { customerRegistrationFeature } from './customer-registration.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerRegistrationEffects } from './customer-registration.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([CustomerRegistrationEffects]),
    StoreModule.forFeature(customerRegistrationFeature),
  ],
})
export class CustomerRegistrationNgrxModule {}

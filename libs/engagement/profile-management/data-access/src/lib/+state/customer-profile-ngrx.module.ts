import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CustomerProfileEffects } from './customer-profile.effects';
import { customerProfileFeature } from './customer-profile.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([CustomerProfileEffects]), StoreModule.forFeature(customerProfileFeature)],
})
export class CustomerProfileNgrxModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RoamingInternationalEffects } from './roaming-international.effects';
import { StoreModule } from '@ngrx/store';
import { ratesFeature } from './roaming-international.reducers';

@NgModule({
  imports: [EffectsModule.forFeature([RoamingInternationalEffects]), StoreModule.forFeature(ratesFeature)],
})
export class RoamingInternationalNgrxModule {}

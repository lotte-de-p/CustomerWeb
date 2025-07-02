import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RoamingInternationalEffects } from './+state/roaming-international.effects';
import { ratesFeature } from './+state/roaming-international.reducers';

export function provideRoamingInternationalDomain() {
  return [
    importProvidersFrom(StoreModule.forFeature(ratesFeature)),
    importProvidersFrom(EffectsModule.forFeature([RoamingInternationalEffects])),
  ];
}

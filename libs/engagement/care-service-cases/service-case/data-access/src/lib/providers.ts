import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { serviceCaseFeature } from './+state/service-case.reducers';
import { ServiceCaseEffects } from './+state/service-case.effects';

export function provideServiceCaseDomain() {
  return [
    importProvidersFrom(StoreModule.forFeature(serviceCaseFeature)),
    importProvidersFrom(EffectsModule.forFeature([ServiceCaseEffects])),
  ];
}

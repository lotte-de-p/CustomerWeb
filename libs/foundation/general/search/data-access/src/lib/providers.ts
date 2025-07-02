import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from './+state/search.effects';
import { searchFeature } from './+state/search.reducer';

export function provideSearchDomain() {
  return [
    importProvidersFrom(StoreModule.forFeature(searchFeature)),
    importProvidersFrom(EffectsModule.forFeature([SearchEffects])),
  ];
}

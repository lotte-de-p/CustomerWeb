import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { searchFeature } from './search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './search.effects';
import { SearchState } from './search.state';
import { createStorageMetaReducer } from '@telenet/ng-lib-shared';

const storageReducer = createStorageMetaReducer('__unifiedSearch_storage__', ['header', 'eventData']);
const metaReducers: MetaReducer<SearchState>[] = [storageReducer];

@NgModule({
  imports: [
    EffectsModule.forFeature([SearchEffects]),
    StoreModule.forFeature(searchFeature.name, searchFeature.reducer, {
      metaReducers,
    }),
  ],
})
export class SearchNgrxModule {}

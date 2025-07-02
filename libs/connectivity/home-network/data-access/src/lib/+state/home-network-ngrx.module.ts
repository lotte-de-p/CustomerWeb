import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeNetworkEffects } from './home-network.effects';
import { homeNetworkFeature } from './home-network.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([HomeNetworkEffects]), StoreModule.forFeature(homeNetworkFeature)],
})
export class HomeNetworkNgrxModule {}

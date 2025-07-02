import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { oneConfiguratorFeature } from './one-configurator.reducers';
import { EffectsModule } from '@ngrx/effects';
import { OneConfiguratorEffects } from './one-configurator.effects';

@NgModule({
  imports: [StoreModule.forFeature(oneConfiguratorFeature), EffectsModule.forFeature(OneConfiguratorEffects)],
})
export class OneConfiguratorNgrxModule {}

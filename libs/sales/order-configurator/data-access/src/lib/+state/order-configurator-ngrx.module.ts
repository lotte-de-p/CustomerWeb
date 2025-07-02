import { OrderConfiguratorEffects } from './order-configurator.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { orderConfiguratorFeature } from './order-configurator.reducer';

@NgModule({
  imports: [StoreModule.forFeature(orderConfiguratorFeature), EffectsModule.forFeature([OrderConfiguratorEffects])],
})
export class OrderConfiguratorNgrxModule {}

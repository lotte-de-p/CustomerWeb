import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productOverviewFeature } from './store/product-overview.reducer';

@NgModule({
  imports: [StoreModule.forFeature(productOverviewFeature), EffectsModule.forFeature([])],
})
export class FleetUserProductOverviewNgrxModule {}

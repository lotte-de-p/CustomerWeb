import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsDetailsFeature } from './products-details.reducers';
import { ProductsDetailsEffects } from './products-details.effects';
import { ProductsDetailsAnalyticsEffects } from './products-details-analytics.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(productsDetailsFeature),
    EffectsModule.forFeature(ProductsDetailsEffects, ProductsDetailsAnalyticsEffects),
  ],
})
export class ProductsDetailsNgrxModule {}

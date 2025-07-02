import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ProductPriceChangesEffects } from './product-price-changes.effects';
import { StoreModule } from '@ngrx/store';
import { productPriceChangesFeature } from './product-price-changes.reducers';
import { ProductPriceChangesDatalayerEffects } from './product-price-changes-datalayer.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([ProductPriceChangesEffects, ProductPriceChangesDatalayerEffects]),
    StoreModule.forFeature(productPriceChangesFeature),
  ],
})
export class ProductPriceChangesNgrxModule {}

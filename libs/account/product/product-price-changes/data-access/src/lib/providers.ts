import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productPriceChangesFeature } from './+state/product-price-changes.reducers';
import { ProductPriceChangesEffects } from './+state/product-price-changes.effects';
import { ProductPriceChangesDatalayerEffects } from './+state/product-price-changes-datalayer.effects';

export function provideProductPriceChangesDomain() {
  return [
    importProvidersFrom(StoreModule.forFeature(productPriceChangesFeature)),
    importProvidersFrom(EffectsModule.forFeature([ProductPriceChangesEffects, ProductPriceChangesDatalayerEffects])),
  ];
}

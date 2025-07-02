import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productFinderFeature } from './product-finder.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductFinderEffects } from './product-finder.effects';
import { ProductFinderAnalyticsEffects } from './product-finder-analytics.effects';
import { ProductFinderStepperEffects } from './stepper/product-finder-stepper.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(productFinderFeature),
    EffectsModule.forFeature(ProductFinderEffects, ProductFinderAnalyticsEffects, ProductFinderStepperEffects),
  ],
})
export class ProductFinderNgrxModule {}

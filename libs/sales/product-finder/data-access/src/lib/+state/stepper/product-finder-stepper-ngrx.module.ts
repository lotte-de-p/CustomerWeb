import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productFinderStepperFeature } from './product-finder-stepper.reducers';

@NgModule({
  imports: [StoreModule.forFeature(productFinderStepperFeature)],
})
export class ProductFinderStepperNgrxModule {}

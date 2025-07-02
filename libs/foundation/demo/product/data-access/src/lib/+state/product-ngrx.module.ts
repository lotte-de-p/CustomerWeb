import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productsFeature } from './product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product.effects';

@NgModule({
  imports: [EffectsModule.forFeature([ProductEffects]), StoreModule.forFeature(productsFeature)],
})
export class ProductNgrxModule {}

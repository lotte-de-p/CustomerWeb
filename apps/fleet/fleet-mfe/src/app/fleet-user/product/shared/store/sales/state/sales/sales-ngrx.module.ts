import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { salesFeature } from './sales.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SalesEffects } from './sales.effects';

@NgModule({
  imports: [StoreModule.forFeature(salesFeature), EffectsModule.forFeature([SalesEffects])],
})
export class SalesNgrxModule {}

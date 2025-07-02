import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HardwareDiscountEffects } from './hardware-discount.effects';
import { hardwareDiscountFeature } from './hardware-discount.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([HardwareDiscountEffects]), StoreModule.forFeature(hardwareDiscountFeature)],
})
export class HardwareDiscountNgrxModule {}

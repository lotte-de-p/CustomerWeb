import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { hardwareCheckoutFeature } from './hardware-checkout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HardwareCheckoutEffects } from './hardware-checkout.effects';

@NgModule({
  imports: [StoreModule.forFeature(hardwareCheckoutFeature), EffectsModule.forFeature(HardwareCheckoutEffects)],
})
export class HardwareCheckoutNgrxModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReturnDevicesEffects } from './return-devices.effects';
import { returnDevicesFeature } from './return-devices.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([ReturnDevicesEffects]), StoreModule.forFeature(returnDevicesFeature)],
})
export class ReturnDevicesNgrxModule {}

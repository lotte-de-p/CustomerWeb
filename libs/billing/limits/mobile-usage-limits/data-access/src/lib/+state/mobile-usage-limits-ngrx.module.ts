import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MobileUsageLimitsEffects } from './mobile-usage-limits.effects';
import { mobileUsageLimitsFeature } from './mobile-usage-limits.reducers';
import { MobileUsageLimitsDatalayerEffects } from './mobile-usage-limits-datalayer.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([MobileUsageLimitsEffects, MobileUsageLimitsDatalayerEffects]),
    StoreModule.forFeature(mobileUsageLimitsFeature),
  ],
})
export class MobileUsageLimitsNgrxModule {}

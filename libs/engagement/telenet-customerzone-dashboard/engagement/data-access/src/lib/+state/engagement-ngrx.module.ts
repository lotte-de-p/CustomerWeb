import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EngagementEffects } from './engagement.effects';
import { engagementFeature } from './engagement.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([EngagementEffects]), StoreModule.forFeature(engagementFeature)],
})
export class EngagementNgrxModule {}

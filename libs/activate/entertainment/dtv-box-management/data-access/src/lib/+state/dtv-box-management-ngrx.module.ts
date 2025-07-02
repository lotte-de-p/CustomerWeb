import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DtvBoxManagementEffects } from './dtv-box-management.effects';
import { dtvBoxManagementFeature } from './dtv-box-management.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([DtvBoxManagementEffects]), StoreModule.forFeature(dtvBoxManagementFeature)],
})
export class DtvBoxManagementNgrxModule {}

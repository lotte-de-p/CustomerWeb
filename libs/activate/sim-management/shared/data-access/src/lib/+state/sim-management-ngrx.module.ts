import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SimManagementEffects } from './sim-management.effects';
import { simManagementFeature } from './sim-management.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([SimManagementEffects]), StoreModule.forFeature(simManagementFeature)],
})
export class SimManagementNgrxModule {}

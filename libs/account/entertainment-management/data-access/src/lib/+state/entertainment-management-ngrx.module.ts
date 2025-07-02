import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { EntertainmentManagementEffects } from './entertainment-management.effects';
import { entertainmentManagementFeature } from './entertainment-management.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    EffectsModule.forFeature([EntertainmentManagementEffects]),
    StoreModule.forFeature(entertainmentManagementFeature),
  ],
})
export class EntertainmentManagementNgrxModule {}

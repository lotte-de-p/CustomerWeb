import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppointmentEffects } from './appointment.effects';
import { appointmentsFeature } from './appointment.reducer';

@NgModule({
  imports: [EffectsModule.forFeature([AppointmentEffects]), StoreModule.forFeature(appointmentsFeature)],
})
export class AppointmentNgrxModule {}

import { NgModule } from '@angular/core';
import { AppointmentsOverviewComponent } from '@product-journey/appointments/feat-overview';
import { AppointmentCardComponent } from '@product-journey/appointments/feat-appointment-card';

@NgModule({})
export class AppointmentsModule {
  static components = {
    'tg-appointments-overview': AppointmentsOverviewComponent,
    'tg-appointment-card': AppointmentCardComponent,
  };
}

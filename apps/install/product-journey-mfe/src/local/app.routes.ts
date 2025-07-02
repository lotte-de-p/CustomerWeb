import { Route } from '@angular/router';
import { AppointmentsOverviewComponent } from '@product-journey/appointments/feat-overview';

export const appRoutes: Route[] = [
  {
    path: 'appointments',
    component: AppointmentsOverviewComponent,
  },
];

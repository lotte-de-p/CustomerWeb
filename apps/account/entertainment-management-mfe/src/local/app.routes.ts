import { Routes } from '@angular/router';
import { EntertainmentManagementComponent } from '@entertainment-management/feat-entertainment-management';
import { EntertainmentManagementOptionDetailsComponent } from '@entertainment-management/feat-entertainment-management-option-details';

export const appRoutes: Routes = [
  { path: '', component: EntertainmentManagementComponent },
  { path: 'option-details', component: EntertainmentManagementOptionDetailsComponent },
];

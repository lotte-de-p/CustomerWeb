import { Routes } from '@angular/router';
import { GeneralOverviewLocalComponent } from './general-overview-local/general-overview-local.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/general-overview',
    pathMatch: 'full',
  },
  {
    path: 'general-overview',
    component: GeneralOverviewLocalComponent,
  },
];

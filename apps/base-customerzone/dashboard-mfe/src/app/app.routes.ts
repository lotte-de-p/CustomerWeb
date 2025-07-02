import { Routes } from '@angular/router';
import { MyBaseDashboardComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { MyBaseDashboardDtvComponent } from '@mybase-dashboard/feat-mybase-dashboard-dtv';
import { MyBaseDashboardInternetComponent } from '@mybase-dashboard/feat-mybase-dashboard-internet';
import { MyBaseDashboardMobileComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';

export const appRoutes: Routes = [
  {
    path: '',
    component: MyBaseDashboardComponent,
  },
  {
    path: '/dtv',
    component: MyBaseDashboardDtvComponent,
  },
  {
    path: '/internet',
    component: MyBaseDashboardInternetComponent,
  },
  {
    path: '/mobile',
    component: MyBaseDashboardMobileComponent,
  },
];

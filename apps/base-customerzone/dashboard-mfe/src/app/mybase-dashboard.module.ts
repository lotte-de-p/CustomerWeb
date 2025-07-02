import { NgModule } from '@angular/core';
import { MyBaseDashboardComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { MyBaseDashboardMobileComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { MyBaseDashboardInternetComponent } from '@mybase-dashboard/feat-mybase-dashboard-internet';
import { MyBaseDashboardDtvComponent } from '@mybase-dashboard/feat-mybase-dashboard-dtv';

@NgModule({})
export class MyBaseDashboardModule {
  static components = {
    'tg-mybase-dashboard': MyBaseDashboardComponent,
    'tg-mybase-dashboard-mobile': MyBaseDashboardMobileComponent,
    'tg-mybase-dashboard-internet': MyBaseDashboardInternetComponent,
    'tg-mybase-dashboard-dtv': MyBaseDashboardDtvComponent,
  };
}

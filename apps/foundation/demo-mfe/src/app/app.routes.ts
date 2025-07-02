import { Routes } from '@angular/router';
import { BillingOverviewComponent } from '@demo/billing/overview';
import { ProductBundleDetailComponent } from '@demo/product/detail';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'billing',
  },
  {
    path: 'billing',
    component: BillingOverviewComponent, // not lazy loaded, because of issues with static imports
  },
  {
    path: 'product/detail',
    component: ProductBundleDetailComponent, // not lazy loaded, because of issues with static imports
  },
];

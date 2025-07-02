import { BillingAccountSelectorComponent } from '@billing/shared/feat-billing-account-selector';
import { Routes } from '@angular/router';
import { BillingOverviewWrapperComponent } from './billing-overview-wrapper/billing-overview-wrapper.component';

export const APP_ROUTES: Routes = [
  {
    path: 'billing-overview/:category',
    component: BillingOverviewWrapperComponent,
  },
  {
    path: 'billing-account-selector',
    component: BillingAccountSelectorComponent,
  },
  { path: '', redirectTo: '/billing-overview/RESIDENTIAL', pathMatch: 'full' },
  { path: '**', redirectTo: '/billing-overview/RESIDENTIAL' },
];

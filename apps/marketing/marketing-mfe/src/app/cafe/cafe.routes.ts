import { Routes } from '@angular/router';

export const MARKETING_CAFE_ROUTES: Routes = [
  {
    path: 'pricing',
    pathMatch: 'full',
    loadComponent: () => import('./pricing/ui/pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'wink-pricing',
    pathMatch: 'full',
    loadComponent: () => import('./wink-pricing/ui/pricing/wink-pricing.component').then((m) => m.WinkPricingComponent),
  },
  {
    path: 'marketing-priced-customer-product-holding',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './priced-customer-product-holding/ui/priced-customer-product-holding/priced-customer-product-holding.component'
      ).then((m) => m.PricedCustomerProductHoldingComponent),
  },
];

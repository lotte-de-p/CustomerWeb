import { Routes } from '@angular/router';

export const MARKETING_NC_MOCK_ROUTES: Routes = [
  {
    path: 'product-configurator',
    loadComponent: () =>
      import('./mock-product-configurator/mock-product-configurator.component').then(
        (m) => m.MockProductConfiguratorComponent
      ),
  },
  {
    path: 'mock-marketing',
    loadComponent: () =>
      import('./mock-marketing/partials/select-discount-type/select-discount-type.component').then(
        (m) => m.SelectDiscountTypeComponent
      ),
  },
  {
    path: 'klik-product-configurator',
    loadComponent: () =>
      import('./klik-mock-product-configurator/klik-mock-product-configurator.component').then(
        (m) => m.KlikMockProductConfiguratorComponent
      ),
  },
];

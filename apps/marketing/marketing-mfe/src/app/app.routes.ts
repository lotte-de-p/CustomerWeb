import { Routes } from '@angular/router';
import { provideRoamingInternationalDomain } from '@marketing/marketing/roaming-international/data-access';

export const MARKETING_ROUTES: Routes = [
  {
    path: 'roaming-international-rates',
    loadComponent: () => import('@marketing/marketing/roaming-international/feat-rates').then((m) => m.RatesComponent),
    providers: [provideRoamingInternationalDomain()],
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.routes').then((m) => m.MARKETING_CAFE_ROUTES),
  },
  {
    path: 'nc',
    loadChildren: () => import('./nc/mock/marketing-nc-mock.routes').then((m) => m.MARKETING_NC_MOCK_ROUTES),
  },
];

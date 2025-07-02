import { Routes } from '@angular/router';

export const GENERAL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../local').then((m) => m.LocalSearchHeaderComponent),
  },
  {
    path: 'header',
    loadComponent: () => import('../local').then((m) => m.LocalSearchHeaderComponent),
  },
  {
    path: 'results',
    loadComponent: () => import('../local').then((m) => m.LocalSearchResultsComponent),
  },
  {
    path: 'inpage-search',
    loadComponent: () => import('../local').then((m) => m.LocalInpageSearchComponent),
  },
];

import { Routes } from '@angular/router';
import { MobileBarringsComponent } from '@billing/mobile-barrings/feat-mobile-barrings';

export const APP_ROUTES: Routes = [
  {
    path: 'mobile-barrings',
    component: MobileBarringsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mobile-barrings',
  },
];

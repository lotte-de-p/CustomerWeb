import { Routes } from '@angular/router';
import { MobileLineDetailsLocalComponent } from './mobile-line-details/mobile-line-details-local.component';
import { ESimActivationLocalComponent } from './e-sim-activation/e-sim-activation-local.component';
import { EmptyComponent } from './empty/empty.component';
import { SimActivationLocalComponent } from './sim-activation/sim-activation-local.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ThankYouESimPortingComponent } from './thank-you-e-sim-porting/thank-you-e-sim-porting.component';
import { SmsVerificationLocalComponent } from './sms-verification/sms-verification-local.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/mobile-line-details',
    pathMatch: 'full',
  },
  {
    path: 'mobile-line-details',
    component: MobileLineDetailsLocalComponent,
  },
  {
    path: 'e-sim-activation',
    component: ESimActivationLocalComponent,
  },
  {
    path: 'sim-activation',
    component: SimActivationLocalComponent,
  },
  {
    path: 'thank-you-sim-prepaid',
    component: ThankYouComponent,
  },
  {
    path: 'thank-you-sim-postpaid',
    component: ThankYouComponent,
  },
  {
    path: 'thank-you-e-sim-porting',
    component: ThankYouESimPortingComponent,
  },
  {
    path: 'sms-verification',
    component: SmsVerificationLocalComponent,
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];

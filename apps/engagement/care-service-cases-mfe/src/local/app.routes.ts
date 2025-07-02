import { Routes } from '@angular/router';
import { provideServiceCaseDomain } from '@care-service-cases/service-case/data-access';
import { ServiceCaseOverviewComponent } from '@care-service-cases/service-case/feat-service-cases-overview';
import { ServiceCasesCardComponent } from '../app/service-case/service-cases-card/service-cases-card.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    providers: [provideServiceCaseDomain()],
    component: ServiceCaseOverviewComponent,
  },
  {
    path: '/card',
    component: ServiceCasesCardComponent,
  },
];

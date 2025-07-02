import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCaseListComponent } from './service-case-list/service-case-list.component';
import { ServiceCaseDetailComponent } from './service-case-detail/service-case-detail.component';
import { ServiceCaseFaqComponent } from './service-case-faq/service-case-faq.component';
import { ServiceCase, ServiceCaseFacade, ServiceCaseNgrxModule } from '@care-service-cases/service-case/data-access';
import { LoaderComponent, ServiceCaseErrorComponent } from '@care-service-cases/service-case/ui';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';

@Component({
  standalone: true,
  imports: [
    TranslateModule,
    ServiceCaseNgrxModule,
    ServiceCaseListComponent,
    ServiceCaseDetailComponent,
    ServiceCaseFaqComponent,
    ServiceCaseErrorComponent,
    LoaderComponent,
    AsyncPipe,
    NgIf,
    LoginModule,
  ],
  selector: 'tg-service-cases-overview',
  templateUrl: './service-cases-overview.component.html',
})
export class ServiceCaseOverviewComponent extends AbstractBaseComponent {
  scopes = ['customeraccount'];

  private readonly facade: ServiceCaseFacade = inject(ServiceCaseFacade);
  selectedServiceCase$ = this.facade.selectedServiceCase$;
  serviceCase$ = this.facade.serviceCases$;
  openServiceCases$ = this.facade.openServiceCases$;
  closedServiceCases$ = this.facade.closedServiceCases$;
  loadError$ = this.facade.loadError$;
  loading$ = this.facade.loading$;

  initAfterLoggedIn() {
    this.facade.loadServiceCases();
    this.facade.serviceCasesPageView();
  }

  selectServiceCase(serviceCase: ServiceCase): void {
    this.facade.selectServiceCase(serviceCase);
  }

  toggleHistoryEvent(toggleHistory: boolean) {
    this.facade.toggleHistory(toggleHistory);
  }
}

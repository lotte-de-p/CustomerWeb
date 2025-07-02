import { Component, ElementRef, Inject } from '@angular/core';
import { ServiceCaseFacade, ServiceCaseNgrxModule } from '@care-service-cases/service-case/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCaseCardComponent } from '@care-service-cases/service-case/feat-service-case-card';
import { AbstractCardComponent } from '@telenet/ng-lib-page';
import { DOCUMENT } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  standalone: true,
  imports: [TranslateModule, ServiceCaseNgrxModule, ServiceCaseCardComponent, LoginModule],
  selector: 'care-service-cases-card',
  template: `
    <tg-login [scopes]="scopes" (componentCanRender)="initAfterLoggedIn()">
      <tg-service-case-card></tg-service-case-card>
    </tg-login>
  `,
})
export class ServiceCasesCardComponent extends AbstractCardComponent {
  scopes = ['customeraccount'];

  constructor(
    private readonly facade: ServiceCaseFacade,
    elementRef: ElementRef,
    @Inject(DOCUMENT) document: Document
  ) {
    super(elementRef, document);
  }

  initAfterLoggedIn() {
    this.facade.loadServiceCases();
    this.showSimpleCard();
  }
}

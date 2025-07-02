import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCaseFacade, ServiceCaseNgrxModule } from '@care-service-cases/service-case/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, ServiceCaseNgrxModule, TranslateModule],
  selector: 'tg-service-case-card',
  templateUrl: './service-case-card.component.html',
})
export class ServiceCaseCardComponent {
  private readonly facade = inject(ServiceCaseFacade);
  openServiceCases$ = this.facade.openServiceCases$;
}

import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceCase,
  ServiceCasesConstants,
  ServiceCasesDatalayerService,
} from '@care-service-cases/service-case/data-access';
import { SERVICE_CASE_FAQ_TYPE_MAP } from './service-case-faq.constants';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AccordionComponent, AccordionItemComponent } from '@care-service-cases/service-case/ui';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, AccordionComponent, AccordionItemComponent],
  selector: 'tg-service-case-faq',
  templateUrl: './service-case-faq.component.html',
})
export class ServiceCaseFaqComponent {
  @Input() selectedServiceCase: ServiceCase | undefined | null;

  private readonly translateService = inject(TranslateService);
  private readonly serviceCasesDataLayerService = inject(ServiceCasesDatalayerService);

  getQuestions(serviceCase: ServiceCase): number {
    return SERVICE_CASE_FAQ_TYPE_MAP[serviceCase.type] || 0;
  }

  faqToggle(isFaqToggleOpen: boolean, serviceCase: ServiceCase, index: number) {
    if (isFaqToggleOpen) {
      this.serviceCasesDataLayerService.sendDataLayerEventWithAttributes(
        ServiceCasesConstants.FAQ_SERVICE_CASES_EVENT_NAME,
        ServiceCasesConstants.EVENT_INFO_TYPE_CLICK,
        serviceCase.status,
        serviceCase.type,
        this.translateService.instant(('ng.service-cases.faq.' + serviceCase.type + '.question-' + index).toLowerCase())
      );
    }
  }
}

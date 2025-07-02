import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCaseStatusComponent } from '@care-service-cases/service-case/ui';
import { ServiceCase } from '@care-service-cases/service-case/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, ServiceCaseStatusComponent],
  selector: 'tg-service-case-detail',
  templateUrl: './service-case-detail.component.html',
})
export class ServiceCaseDetailComponent {
  @Input() selectedServiceCase: ServiceCase | undefined | null;
}

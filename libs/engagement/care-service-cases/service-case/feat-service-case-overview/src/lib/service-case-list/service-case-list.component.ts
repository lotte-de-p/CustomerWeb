import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCase } from '@care-service-cases/service-case/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCaseStatusComponent, ServiceCaseIconComponent } from '@care-service-cases/service-case/ui';
import { ServiceCaseMobileListComponent } from './mobile-list/service-case-mobile-list.component';
import { OrderByPipe } from './order-service-case/order-service-case.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ServiceCaseStatusComponent,
    ServiceCaseIconComponent,
    ServiceCaseMobileListComponent,
    OrderByPipe,
  ],
  selector: 'tg-service-case-list',
  templateUrl: './service-case-list.component.html',
})
export class ServiceCaseListComponent {
  @Input() serviceCases: ServiceCase[] = [];
  @Input() openServiceCases: ServiceCase[] = [];
  @Input() closedServiceCases: ServiceCase[] = [];
  @Input() selectedServiceCase: ServiceCase | undefined | null;

  @Output() selectServiceCase: EventEmitter<ServiceCase> = new EventEmitter<ServiceCase>();
  @Output() toggleHistoryEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  showHistory = false;

  toggleHistory() {
    this.showHistory = !this.showHistory;
    this.toggleHistoryEvent.emit(this.showHistory);
  }
}

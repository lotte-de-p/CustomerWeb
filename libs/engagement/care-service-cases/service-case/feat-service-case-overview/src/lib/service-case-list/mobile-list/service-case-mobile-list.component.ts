import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ServiceCase } from '@care-service-cases/service-case/data-access';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderByPipe } from '../order-service-case/order-service-case.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, OrderByPipe],
  styleUrls: ['service-case-mobile-list.component.scss'],
  selector: 'tg-service-case-mobile-list',
  templateUrl: './service-case-mobile-list.component.html',
})
export class ServiceCaseMobileListComponent {
  @Input() serviceCases: ServiceCase[] = [];
  @Input() openServiceCases: ServiceCase[] = [];
  @Input() closedServiceCases: ServiceCase[] = [];
  @Input() selectedServiceCase: ServiceCase | undefined | null = undefined;
  @Output() selectServiceCase: EventEmitter<ServiceCase> = new EventEmitter<ServiceCase>();
  @ViewChild('list') element: ElementRef | undefined = undefined;

  showSelector = false;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.element?.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.showSelector = false;
    }
  }

  toggleSelector() {
    if (this.serviceCases.length) {
      this.showSelector = !this.showSelector;
    }
  }

  selectServiceCaseItem(serviceCase: ServiceCase): void {
    this.selectServiceCase.emit(serviceCase);
    this.showSelector = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { AssetService } from '@telenet/ng-lib-page';
import { stepImage } from '../config/config';
import { ViewModel } from '../interfaces/view-model.interface';
import { stepLoaded } from '../events/step-loaded.const';
import { DeliverInfoComponent, DepreciationTableComponent, FooterComponent } from '@sales/summary/ui';
import { InstallationAddressSummaryComponent } from '@sales/order-configurator/feat-installation-address';
import { DeliverySummaryComponent } from '@sales/order-configurator/delivery/feat-delivery-summary';
import { OrderTotalsSummaryComponent } from '@sales/order-configurator/order/feat-order-totals-summary';
import { OrderItemsSummaryComponent } from '@sales/order-configurator/order/feat-order-items-summary';
import { ContactInfoSummaryComponent } from '@sales/order-configurator/contact-info/feat-contact-info-summary';

@Component({
  selector: 'tg-sales-order-configurator-step-summary',
  standalone: true,
  imports: [
    TranslateModule,
    InlineSVGModule,
    AsyncPipe,
    NgClass,
    NgTemplateOutlet,
    DeliverInfoComponent,
    DepreciationTableComponent,
    InstallationAddressSummaryComponent,
    DeliverySummaryComponent,
    ContactInfoSummaryComponent,
    OrderItemsSummaryComponent,
    FooterComponent,
    OrderTotalsSummaryComponent,
    DeliverySummaryComponent,
  ],
  templateUrl: './step-summary.component.html',
})
export class StepSummaryComponent implements OnInit, StepComponent {
  viewModel: ViewModel | undefined;

  constructor(private readonly eventFacade: EventFacade) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
    };
  }

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }

  onOrderClick() {
    console.log('order clicked');
  }
}

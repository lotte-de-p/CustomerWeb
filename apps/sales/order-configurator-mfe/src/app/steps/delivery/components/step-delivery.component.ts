import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { StepComponent } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { stepLoaded } from '../events/step-loaded.const';
import { DeliveryAddressComponent, DeliveryItemsComponent } from '@sales/delivery/ui';
import { AnalyticsClickEventDirective } from '@sales/events/feat-analytics';
import { stepImagePath } from '../config/config';
import { DeliveryContentComponent } from '@sales/order-configurator/delivery/feat-delivery-content';
import { ManageRecipientInfoComponent } from '@sales/order-configurator/delivery/feat-manage-recipient-info';
import { ChangeRecipientInfoComponent } from '@sales/order-configurator/delivery/feat-change-recipient-info';

@Component({
  selector: 'tg-sales-order-configurator-step-delivery',
  standalone: true,
  imports: [
    TranslateModule,
    InlineSVGModule,
    AsyncPipe,
    NgClass,
    NgTemplateOutlet,
    DeliveryAddressComponent,
    AnalyticsClickEventDirective,
    DeliveryContentComponent,
    ManageRecipientInfoComponent,
    DeliveryItemsComponent,
    ChangeRecipientInfoComponent,
  ],
  templateUrl: './step-delivery.component.html',
})
export class StepDeliveryComponent implements OnInit, StepComponent {
  constructor(private readonly eventFacade: EventFacade) {}
  isFormVisible = false;

  ngOnInit() {
    this.eventFacade.triggerEvent(stepLoaded);
  }

  onNextStep(): Observable<boolean> {
    return of(true);
  }

  protected readonly stepImagePath = stepImagePath;

  openChangeRecipientInfoForm() {
    this.isFormVisible = true;
  }
}

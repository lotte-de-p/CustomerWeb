import { Component, OnInit } from '@angular/core';
import { StepComponent } from '@sales/shared/data-access';
import { EventFacade, hideNavigationEvent, showNavigationEvent } from '@sales/events/data-access';
import { deliveryStepFinished } from './events/delivery-step-finished.const';
import { ViewModel } from './interfaces/view-model.interface';
import {
  ChangePersonalInfoInterface,
  DeliveryAddress,
  DeliveryFacade,
  ViewStateEnum,
} from '@sales/delivery/data-access';
import {
  DeliveryAddressComponent,
  DeliveryItemsComponent,
  NotificationComponent,
  PersonalInfoComponent,
} from '@sales/delivery/ui';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { CommonModule } from '@angular/common';
import { DeliveryUtil } from './utils/delivery.util';
import { deliveryStepLoaded } from './events/delivery-step-loaded.const';
import { Observable, of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { AssetService } from '@telenet/ng-lib-page';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { stepImage } from './constants/delivery-event-step-key.const';
import { ChangeDeliveryInfoComponent } from './components/change-delivery/change-delivery-info.component';
import { SharedToolModule } from '@telenet/ng-lib-shared';
import { AnalyticsClickEventDirective } from '@sales/events/feat-analytics';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    PersonalInfoComponent,
    DeliveryAddressComponent,
    AddressFormFieldComponent,
    ChangeDeliveryInfoComponent,
    SharedToolModule,
    DeliveryItemsComponent,
    TranslateModule,
    NotificationComponent,
    InlineSVGModule,
    AnalyticsClickEventDirective,
  ],
  selector: 'tg-sales-delivery',
  templateUrl: './delivery.component.html',
})
export class DeliveryComponent implements StepComponent, OnInit {
  messageGroup = 'delivery';
  viewModel: ViewModel;
  deliveryAddress: DeliveryAddress | undefined;

  viewState = ViewStateEnum.OVERLAY_CLOSED;
  viewStateEnum = ViewStateEnum;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly deliveryFacade: DeliveryFacade
  ) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
      validatePersonalInfoOnInit: false,
      personalInfo$: this.deliveryFacade.personalInfo$,
      deliveryItems$: this.deliveryFacade.deliveryItems$,
      deliveryAddress$: this.deliveryFacade.deliveryAddress$,
      notifications$: this.deliveryFacade.notifications$,
    };
  }

  ngOnInit(): void {
    this.eventFacade.triggerEvent(deliveryStepLoaded);
    this.ifMissingRequiredDeliveryInfoThenShowOverlay();
  }

  onNextStep(): Observable<boolean> {
    this.eventFacade.triggerEvent(deliveryStepFinished);
    return of(false);
  }

  setChangeAddressState() {
    this.eventFacade.triggerEvent(hideNavigationEvent);
    this.viewState = ViewStateEnum.OVERLAY_OPEN;
  }

  cancelNewPersonalInfo() {
    this.eventFacade.triggerEvent(showNavigationEvent);
    this.viewState = ViewStateEnum.OVERLAY_CLOSED;
  }

  saveNewPersonalInfo(personalInfo: ChangePersonalInfoInterface) {
    this.eventFacade.triggerEvent(showNavigationEvent);
    this.eventFacade.triggerEvent(DeliveryUtil.createDeliveryStateEvent(ViewStateEnum.OVERLAY_CLOSED, personalInfo));
    this.viewState = ViewStateEnum.OVERLAY_CLOSED;
    this.viewModel.validatePersonalInfoOnInit = false;
  }

  private ifMissingRequiredDeliveryInfoThenShowOverlay() {
    this.deliveryFacade.personalInfo$.pipe(untilDestroyed(this)).subscribe((personalInfo) => {
      if (!personalInfo || personalInfo.email === '' || personalInfo.mobile === '') {
        this.viewModel.validatePersonalInfoOnInit = true;
        this.setChangeAddressState();
      }
    });
  }
}

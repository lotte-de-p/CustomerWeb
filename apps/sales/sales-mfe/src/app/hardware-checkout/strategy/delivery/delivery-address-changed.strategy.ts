import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { DeliveryStateChangeInterface, PersonalInfo } from '@sales/delivery/data-access';
import { EventFacade } from '@sales/events/data-access';
import { SalesOrder } from '@sales/hardware-checkout/data-access';
import { AddressUtil } from '../../utils/address.util';

export class DeliveryAddressChangedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly eventFacade: EventFacade,
    private readonly personalInfoChanges: DeliveryStateChangeInterface
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      this.handleDeliveryInfoChange(),
      tap(() => {
        const personalInfo = this.personalInfoChanges.personalInfo.personalInfo;
        if (personalInfo) {
          this.triggerMobileChangedEvent(personalInfo);
        }
      }),
      map(() => {
        return true;
      })
    );
  }

  private handleDeliveryInfoChange(): UnaryFunction<
    Observable<SalesOrder | undefined>,
    Observable<SalesOrder | undefined>
  > {
    const personalInfo = this.personalInfoChanges.personalInfo.personalInfo;
    const DeliveryAddress = this.personalInfoChanges.personalInfo.deliveryAddress;

    return pipe(
      tap(() => {
        if (personalInfo) {
          this.hardwareCheckoutFacade.setDeliveryPersonalInfo(personalInfo);
          this.hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo(personalInfo);
        }
        if (DeliveryAddress) {
          const deliveryAddress = AddressUtil.convertFieldValueToDeliveryAddress(DeliveryAddress);

          if (deliveryAddress) {
            this.hardwareCheckoutFacade.setDeliveryAddress(deliveryAddress);
            this.hardwareCheckoutFacade.setSummaryDeliveryAddress(deliveryAddress);
          }
        }
      })
    );
  }

  private triggerMobileChangedEvent(newPersonalInfo: PersonalInfo) {
    this.hardwareCheckoutFacade.deliveryPersonalInfo$
      .pipe(
        take(1),
        filter((personalInfo) => personalInfo?.mobile !== newPersonalInfo.mobile)
      )
      .subscribe(() => this.eventFacade.triggerAnalyticsClickEvent({ name: 'phone number updated' }));
  }
}

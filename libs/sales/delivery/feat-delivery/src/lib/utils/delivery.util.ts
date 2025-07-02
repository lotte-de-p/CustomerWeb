import { ChangePersonalInfoInterface, DeliveryStateChangeInterface, ViewStateEnum } from '@sales/delivery/data-access';
import { changeAddressStateEvent } from '../events/change-address-state.event';
import { EventInterface } from '@sales/events/data-access';

export class DeliveryUtil {
  public static createDeliveryStateEvent(
    viewState: ViewStateEnum,
    personalInfo: ChangePersonalInfoInterface
  ): EventInterface<DeliveryStateChangeInterface> {
    changeAddressStateEvent.body = Object.assign(
      {},
      {
        state: viewState,
        personalInfo: personalInfo,
      }
    );

    return changeAddressStateEvent;
  }
}

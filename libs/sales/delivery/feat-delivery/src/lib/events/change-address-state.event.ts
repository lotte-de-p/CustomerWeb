import { DeliveryEventTypeEnum } from '../enums/event-type.enum';
import { DeliveryStateChangeInterface } from '@sales/delivery/data-access';
import { EventInterface } from '@sales/events/data-access';

export const changeAddressStateEvent: EventInterface<DeliveryStateChangeInterface> = {
  eventType: DeliveryEventTypeEnum.CHANGE_ADDRESS,
};

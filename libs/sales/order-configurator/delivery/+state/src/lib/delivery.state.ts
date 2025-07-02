import { deliveryStateTestfactory } from './delivery.testfactory';
import { DeliveryContentItem, RecipientAddress, RecipientDetails } from '@sales/order-configurator/delivery/domain';

export interface DeliveryState {
  recipientDetails: RecipientDetails;
  recipientAddress: RecipientAddress;
  deliveryContent: DeliveryContentItem[];
}

export const defaultState: DeliveryState = deliveryStateTestfactory.build();

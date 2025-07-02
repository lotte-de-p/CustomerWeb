import { DeliveryState } from './delivery.state';
import { Factory } from 'fishery';
import {
  deliveryContentTestFactory,
  recipientAddressTestfactory,
  recipientDetailsTestfactory,
} from '@sales/order-configurator/delivery/domain';

export const deliveryStateTestfactory = Factory.define<DeliveryState>(() => {
  return {
    recipientDetails: recipientDetailsTestfactory.build(),
    deliveryContent: deliveryContentTestFactory.build(),
    recipientAddress: recipientAddressTestfactory.build(),
  };
});

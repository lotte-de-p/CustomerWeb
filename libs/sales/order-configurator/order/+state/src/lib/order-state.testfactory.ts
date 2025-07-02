import { OrderState } from './order.state';
import { Factory } from 'fishery';
import { orderTestfactory } from '@sales/order-configurator/order/domain';

export const orderStateTestfactory = Factory.define<OrderState>(() => {
  return {
    order: orderTestfactory.build(),
  };
});

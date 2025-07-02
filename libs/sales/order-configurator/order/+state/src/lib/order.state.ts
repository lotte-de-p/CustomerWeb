import { orderStateTestfactory } from './order-state.testfactory';
import { Order } from '@sales/order-configurator/order/domain';

export interface OrderState {
  order: Order;
}

export const defaultState: OrderState = orderStateTestfactory.build();

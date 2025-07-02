import { createAction, props } from '@ngrx/store';
import { DeliveryMethod } from '@sales/order-configurator/installation-type/domain';

export const setDeliveryMethod = createAction(
  '[Order Configurator] Set Delivery Method',
  props<{ deliveryMethod: DeliveryMethod }>()
);

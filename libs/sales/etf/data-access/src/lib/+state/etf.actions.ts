import { createAction, props } from '@ngrx/store';
import { UsedSlot } from '../interfaces/customer-discounts.interface';
import { OrderItemWithDiscount } from '../interfaces/order-item-with-discount.interface';

export const resetEtfState = createAction('[etf] reset state');
export const setOrderItemsWithDiscount = createAction(
  '[etf] set order items with discount',
  props<{ orderItemsWithDiscount: OrderItemWithDiscount[] }>()
);
export const setUsedSlots = createAction('[etf] set used slots', props<{ usedSlots: UsedSlot[] }>());

export const setOrderItemTerminationState = createAction(
  '[etf] set order item termination state',
  props<{ orderItemWithDiscount: OrderItemWithDiscount; markedForDiscount: boolean }>()
);

export const setShowEtfOptions = createAction(
  '[etf] set show etf options',
  props<{ orderItemWithDiscount: OrderItemWithDiscount; showEtfOptions: boolean }>()
);

export const setOrderItemToMarkedForBuyingWithoutDiscount = createAction(
  '[etf] set order item to marked for buying without discount',
  props<{ orderItemWithDiscount: OrderItemWithDiscount }>()
);

export const resetOrderItem = createAction(
  '[etf] reset order item',
  props<{ orderItemWithDiscount: OrderItemWithDiscount }>()
);

export const cancelEtfTermination = createAction(
  '[etf] cancel etf termination',
  props<{ orderItemWithDiscount: OrderItemWithDiscount }>()
);

export const setUsedDiscountToTerminate = createAction(
  '[etf] set used discount termination',
  props<{ orderItemWithDiscount: OrderItemWithDiscount; usedDiscount: UsedSlot }>()
);

import { UsedSlot } from '../interfaces/customer-discounts.interface';
import { OrderItemWithDiscount } from '../interfaces/order-item-with-discount.interface';

export interface EtfState {
  orderItemsWithDiscount: OrderItemWithDiscount[] | undefined;
  usedSlots: UsedSlot[] | undefined;
}

export const defaultState: EtfState = {
  orderItemsWithDiscount: undefined,
  usedSlots: undefined,
};

import { OrderItem, SdataDiscount } from '@sales/hardware-checkout/data-access';

export interface OrderItemWithMatchingDiscount {
  orderItem: OrderItem;
  customerChosenDiscount: SdataDiscount;
}

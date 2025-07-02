import { UsedSlot } from './customer-discounts.interface';
import { Prices, Rule } from '@sales/hardware-checkout/data-access';

export interface OrderItemWithDiscount {
  name: string;
  id: string;
  rule: Rule;
  showEtfOptions: boolean;
  hasMadeASelection: boolean;
  selectedEtfDiscountSlot?: UsedSlot;
  prices: Prices;
}

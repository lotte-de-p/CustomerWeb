import { Prices } from '../models/sales-order/prices.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface DiscountItemInterface {
  discounts?: Discount[];
}

export class Discount {
  prices: Prices;
  productInfo?: OmapiProduct;
}

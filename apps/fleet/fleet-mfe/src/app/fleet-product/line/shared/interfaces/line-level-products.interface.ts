import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Prices } from '../models/sales-order/prices.model';
import { DiscountItemInterface } from './discount-item.interface';

export interface LineLevelProductsInterface {
  category: string;
  identifier: string;
  specUrl?: string;
  productInfo?: OmapiProduct;
  prices: Prices;
  isFree: boolean;
  discountItem?: DiscountItemInterface;
}

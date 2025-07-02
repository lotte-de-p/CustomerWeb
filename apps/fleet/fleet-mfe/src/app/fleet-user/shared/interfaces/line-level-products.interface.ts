import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Prices } from '../models/prices.model';
import { DiscountItemInterface } from './discount-item.interface';

export interface LineLevelProductsInterface {
  category: string;
  identifier: string;
  productInfo: OmapiProduct;
  prices: Prices;
  isFree: boolean;
  discountItem: DiscountItemInterface;
}

import { Prices } from './sales-order/prices.model';
import { ContractDetailsInterface } from '../interfaces/contract-details.interface';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { CharsInterface } from '../interfaces/chars.interface';
import { OmapiProductInfo } from '../interfaces/omapi-products.interface';

export class Option {
  id?: string;
  label: string;
  productInfo?: OmapiProductInfo;
  prices?: Prices;
  price?: Prices;
  specUrl?: string;
  contract?: ContractDetailsInterface;
  status: string;
  category?: string;
  rank?: string;
  discountItem?: DiscountItemInterface;
  discountItems?: DiscountItemInterface;
  isIncluded?: boolean;
  isSelected?: boolean;
  isAffected?: boolean;
  hwcvpItemCode?: string;
  isIncludedOption?: boolean;
  isOptionRemoved?: boolean;
  isOptionUpgraded?: boolean;
  isOptionAdded?: boolean;
  productType?: string;
  visible?: boolean;
  parentId?: string;
  productId?: string;
  name?: string;
  volume?: string;
  isFree?: boolean;
  chars?: CharsInterface;
  oldVolume?: string;
  optionCategory?: string;
}

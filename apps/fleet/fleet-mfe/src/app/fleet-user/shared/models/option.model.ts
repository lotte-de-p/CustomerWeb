import { ContractDetailsInterface } from '../interfaces/contract-details.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Prices } from './prices.model';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { TrialPack } from './trial-pack.model';
import { CharsModel } from './chars.model';
import { ProductOptionsConstants } from '../constants/product/product-options.constant';

export class Option {
  label: string;
  productInfo: OmapiProduct;
  prices: Prices;
  contract?: ContractDetailsInterface;
  status: string;
  category?: string;
  rank?: string;
  discountItem: DiscountItemInterface;
  isIncluded?: boolean;
  activeTrialPack?: TrialPack;
  hwcvpItemCode?: string;
  isIncludedOption?: boolean;
  productType?: string;
  visible: boolean;
  parentId: string;
  isOptionRemoved?: boolean;
  productId?: string;
  name?: string;
  volume?: string;
  isFree?: boolean;
  optionCount?: number;
  chars?: CharsModel;

  isWifiBusiness(): boolean {
    return this.productInfo.externalProductCode === ProductOptionsConstants.WIFI_BUSINESS;
  }
}

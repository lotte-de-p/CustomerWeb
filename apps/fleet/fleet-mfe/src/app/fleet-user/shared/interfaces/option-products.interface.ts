import { PriceInterface } from './price.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface OptionProductInterface {
  productInfo: OmapiProduct;
  price: PriceInterface;
  isIncluded?: boolean;
  category?: string;
  discountedPrice?: string;
  rank?: string;
  discount?: string;
  isDiscountForPlayMore?: boolean;
  otherPlatformWarningMsg?: boolean;
  parentId?: string;
  isFree?: boolean;
  optionCount?: number;
  isFixedIP: () => boolean;
  isBackupService: () => boolean;
  isSafespotPlus: () => boolean;
  isSafespotPro: () => boolean;
  isWifiBusiness: () => boolean;
  variants?: OptionProductInterface[];
  includedOptions?: OptionProductInterface[];
  bundleOptions?: OptionProductInterface[];
}

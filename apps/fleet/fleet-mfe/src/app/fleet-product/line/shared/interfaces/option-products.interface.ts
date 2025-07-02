import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { PriceInterface } from '../../../../shared/common/models/product.model';

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
  variants?: OptionProductInterface[];
  includedOptions?: OptionProductInterface[];
  bundleOptions?: OptionProductInterface[];
}

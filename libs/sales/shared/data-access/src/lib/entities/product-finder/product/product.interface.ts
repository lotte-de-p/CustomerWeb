import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductSpec } from './product-spec.interface';

export interface Product {
  localizedOmapiProductName: string;
  omapiProduct: OmapiProduct;
  productSpec: ProductSpec;
  amountOfLimitedSims?: number;
}

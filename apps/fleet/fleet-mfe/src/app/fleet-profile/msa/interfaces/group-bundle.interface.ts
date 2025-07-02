import { PriceInterface } from './price.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface GroupBundleInterface {
  label: string;
  specUrl: string;
  productInfo: OmapiProduct;
  price: PriceInterface;
}

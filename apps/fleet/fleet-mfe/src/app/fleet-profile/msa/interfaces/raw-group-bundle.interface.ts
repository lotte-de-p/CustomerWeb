import { RawPriceInterface } from './raw-eligiblie-products.interface';
import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawGroupBundleInterface {
  label: string;
  specUrl: string;
  productInfo: RawOmapiProductInterface;
  price: RawPriceInterface;
  rawOmapi?: RawOmapiProductInterface;
}

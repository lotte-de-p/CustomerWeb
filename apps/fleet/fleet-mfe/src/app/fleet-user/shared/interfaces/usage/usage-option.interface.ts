import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { IncludedInterface } from '../included.interface';

export interface UsageOptionInterface extends IncludedInterface {
  productInfo?: OmapiProduct;
  label: string;
  productCode: string;
}

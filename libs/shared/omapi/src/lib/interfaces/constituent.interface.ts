import { OmapiProduct } from '../models/omapi-product.model';

export interface ConstituentInterface {
  type: string;
  specurl: string;
  productInfo?: OmapiProduct;
}

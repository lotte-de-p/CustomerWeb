import { RawCustomerProductHoldingAddress } from './raw-customer-product-holding-address.interface';
import { RawCustomerProductHoldingOption } from './raw-customer-product-holding-option.interface';
import { RawCustomerProductHoldingProduct } from './raw-customer-product-holding-product.interface';

export interface RawCustomerProductHolding {
  identifier: string;
  specurl: string;
  products: RawCustomerProductHoldingProduct[];
  options: RawCustomerProductHoldingOption[];
  address: RawCustomerProductHoldingAddress;
}

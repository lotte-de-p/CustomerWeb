import { RawCustomerProductHoldingAddress } from './raw-customer-product-holding-address.interface';
import { RawCustomerProductHoldingOption } from './raw-customer-product-holding-option.interface';

export interface RawCustomerProductHoldingProduct {
  identifier: string;
  specurl: string;
  products: RawCustomerProductHoldingProduct[];
  options: RawCustomerProductHoldingOption[];
  address?: RawCustomerProductHoldingAddress;
}

import { CustomerProductHoldingAddress } from './customer-product-holding-address.interface';
import { CustomerProductHoldingProduct } from './customer-product-holding-product.interface';
import { CustomerProductHoldingOption } from './customer-product-holding-option.interface';

export interface CustomerProductHolding {
  identifier: string;
  specUrl: string;
  products: CustomerProductHoldingProduct[];
  options: CustomerProductHoldingOption[];
  address: CustomerProductHoldingAddress;
}

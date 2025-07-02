import { CustomerProductHoldingAddress } from './customer-product-holding-address.interface';
import { CustomerProductHoldingOption } from './customer-product-holding-option.interface';

export interface CustomerProductHoldingProduct {
  identifier: string;
  specUrl: string;
  products: CustomerProductHoldingProduct[];
  options: CustomerProductHoldingOption[];
  address?: CustomerProductHoldingAddress;
}

import { CustomerProductHoldingAddressRequest } from './customer-product-holding-address-request.interface';
import { CustomerProductHoldingOptionRequest } from './customer-product-holding-option-request.interface';

export interface CustomerProductHoldingProductRequest {
  identifier: string;
  specUrl: string;
  products: CustomerProductHoldingProductRequest[];
  options: CustomerProductHoldingOptionRequest[];
  address?: CustomerProductHoldingAddressRequest;
}

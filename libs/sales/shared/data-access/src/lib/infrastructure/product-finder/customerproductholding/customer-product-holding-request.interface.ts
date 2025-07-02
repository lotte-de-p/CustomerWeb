import { CustomerProductHoldingAddressRequest } from './customer-product-holding-address-request.interface';
import { CustomerProductHoldingOptionRequest } from './customer-product-holding-option-request.interface';
import { CustomerProductHoldingProductRequest } from './customer-product-holding-product-request.interface';

export interface CustomerProductHoldingRequest {
  identifier: string;
  specUrl: string;
  products: CustomerProductHoldingProductRequest[];
  options: CustomerProductHoldingOptionRequest[];
  address: CustomerProductHoldingAddressRequest;
}

import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

export interface SalesOfferRequest {
  products: ProductRequest[];
  promotions: Promotion[];
  customerProductHolding: CustomerProductHolding[];
  campaignCode: string;
}

export interface ProductRequest {
  omapiId: string;
  options: string[];
  streamingServices: StreamingServiceRequest[];
  optins: string[];
  amountOfLimitedSims?: number;
  installationAddress?: AddressRequest;
}

export interface AddressRequest {
  addressId?: string;
  municipality?: string;
  postalCode: string;
  street?: string;
  houseNr?: string;
  country?: string;
}

export interface StreamingServiceRequest {
  omapiId: string;
  options: string[];
}

export interface RawSalesOfferRequest {
  products: RawProductRequest[];
  promotions: RawPromotionRequest[];
  customerproductholding: RawCustomerProductHoldingRequest[];
  campaigncode: string;
  voucherpromo: string;
}

export interface RawProductRequest {
  omapiid: string;
  options: string[];
  streamingservices?: RawStreamingServiceRequest[];
  optinproducts: string[];
  amountoflimitedsims?: number;
  installationaddress?: RawAddressRequest;
}

export interface RawStreamingServiceRequest {
  omapiid: string;
  options: string[];
}

export interface RawAddressRequest {
  addressid?: string;
  municipality?: string;
  postalcode: string;
  street?: string;
  housenr?: string;
  country?: string;
}

export interface RawPromotionRequest {
  description: string;
}

export interface RawCustomerProductHoldingRequest {
  identifier: string;
  specurl: string;
  products: CustomerProductHoldingProductRequest[];
  options: CustomerProductHoldingOptionRequest[];
  address: CustomerProductHoldingAddressRequest;
}

export interface CustomerProductHoldingProductRequest {
  identifier: string;
  specurl: string;
  products: CustomerProductHoldingProductRequest[];
  options: CustomerProductHoldingOptionRequest[];
  address?: CustomerProductHoldingAddressRequest;
}

export interface CustomerProductHoldingOptionRequest {
  specurl: string;
}

export interface CustomerProductHoldingAddressRequest {
  addressid: string;
  municipality: string;
  postalcode: string;
  street: string;
  housenr: string;
  country: string;
}

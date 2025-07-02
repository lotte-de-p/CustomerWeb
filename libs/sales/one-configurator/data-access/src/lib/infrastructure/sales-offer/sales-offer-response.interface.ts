export interface SalesOfferResponse {
  products: SalesOfferProductResponse[];
}

export interface SalesOfferProductResponse {
  omapiid: string;
  price: number;
  options: SalesOfferProductOptionResponse[];
  streamingservices: SalesOfferProductStreamingServiceResponse[];
  optinproducts: SalesOfferProductOptinResponse[];
}

export interface SalesOfferProductOptionResponse {
  omapiid: string;
  price: number;
  selected: boolean;
}

export interface SalesOfferProductStreamingServiceResponse {
  omapiid: string;
  price: number;
  selected: boolean;
  options: SalesOfferProductOptionResponse[];
}

export interface SalesOfferProductOptinResponse {
  omapiid: string;
  price: number;
  selected: boolean;
}

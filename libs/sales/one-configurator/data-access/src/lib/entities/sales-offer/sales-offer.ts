export interface SalesOffer {
  products: SalesOfferProduct[];
}

export interface SalesOfferProduct {
  omapiId: string;
  price: number;
  options: SalesOfferProductOption[];
  streamingServices: SalesOfferProductStreamingService[];
  optins: SalesOfferProductOptin[];
}

export interface SalesOfferProductOption {
  omapiId: string;
  price: number;
}

export interface SalesOfferProductStreamingService {
  omapiId: string;
  price: number;
  options: SalesOfferProductOption[];
}

export interface SalesOfferProductOptin {
  omapiId: string;
  price: number;
}

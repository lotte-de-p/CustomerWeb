import { SalesOfferProductOption } from './sales-offer-product-option.model';

export interface SalesOfferProductStreamingService extends SalesOfferProductOption {
  options: SalesOfferProductOption[];
}

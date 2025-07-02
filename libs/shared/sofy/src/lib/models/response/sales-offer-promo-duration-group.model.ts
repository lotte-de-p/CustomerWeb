import { SalesOfferPromo } from './sales-offer-promo.model';

export interface SalesOfferPromoDurationGroup {
  duration: number;
  promos: SalesOfferPromo[];
}

import { SalesOfferPricedItem } from './sales-offer-priced-item.model';
import { SalesOfferPromoPeriod } from './sales-offer-promo-period.model';

export interface SalesOfferPromo extends SalesOfferPricedItem {
  backendid: number;
  duration: number;
  legalid: string;
  name: string;
  period: SalesOfferPromoPeriod;
  puk: string;
  tags: string[];
  legalInformation?: string;
}

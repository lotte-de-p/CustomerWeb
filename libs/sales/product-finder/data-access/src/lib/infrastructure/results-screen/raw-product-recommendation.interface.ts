import { RawOffer } from './raw-offer.interface';
import { RawSalesOffer } from '@sales/shared/data-access';

export interface RawProductRecommendation {
  offers: RawOffer[];
  salesOffer: RawSalesOffer;
}

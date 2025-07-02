import { RawPromo } from './raw-promo.interface';

export interface RawSalesOffer {
  price: number;
  promo: RawPromo | null;
}

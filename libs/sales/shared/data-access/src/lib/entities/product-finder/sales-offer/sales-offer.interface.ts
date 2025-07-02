import { Promo } from './promo.interface';

export interface SalesOffer {
  price: number;
  promo: Promo | null;
}

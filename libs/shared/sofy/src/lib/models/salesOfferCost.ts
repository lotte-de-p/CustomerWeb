import { CostInterface } from '../interfaces/cost.interface';
import { PromoModel } from './promo.model';

export class SalesOfferCost implements CostInterface {
  name: string;
  price: number;
  priceexclvat: number;
  promotions: PromoModel[];
  recurring: number;
}

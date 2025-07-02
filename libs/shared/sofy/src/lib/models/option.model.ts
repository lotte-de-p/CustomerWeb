import { OptionInterface } from '../interfaces/option.interface';
import { PromoModel } from './promo.model';

export class OptionModel implements OptionInterface {
  description: string;
  mutuallyExclusive: string;
  omapiId: string;
  originalprice: number;
  price: number;
  priceexclvat: number;
  promos: PromoModel[];
  selected: boolean;
  specUrl: string;
}

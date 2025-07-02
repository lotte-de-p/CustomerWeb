import { SalesOfferPromo } from '../models/response';
import { DeliveryOptionInterface } from './delivery-option.interface';

export interface InstallTypeInterface {
  selected: boolean;
  description: string;
  price: number;
  priceexclvat: number;
  mutuallyexclusive: string;
  promos: SalesOfferPromo[];
  options?: DeliveryOptionInterface[];
}

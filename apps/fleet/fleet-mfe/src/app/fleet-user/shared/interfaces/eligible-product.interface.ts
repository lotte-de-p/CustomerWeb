import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { EligibleOfferInterface } from './eligible-offers.interface';
import { OptionProductInterface } from './option-products.interface';
import { PriceInterface } from './price.interface';

export interface EligibleProductInterface {
  id: string;
  label: string;
  productInfo: OmapiProduct;
  eligibleOffers: EligibleOfferInterface[];
  optionProducts: OptionProductInterface[];
  price: PriceInterface;
  isIncluded?: boolean;
}

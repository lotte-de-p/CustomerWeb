import { EligibleOfferInterface } from '../eligible-offers.interface';
import { PriceInterface } from '../price.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { OptionProductsModel } from '../../models/option-products.model';

export interface EligibleProductInterface {
  id: string;
  label: string;
  productInfo: OmapiProduct;
  eligibleOffers: EligibleOfferInterface[];
  optionProducts: OptionProductsModel[];
  price: PriceInterface;
  isIncluded?: boolean;
}

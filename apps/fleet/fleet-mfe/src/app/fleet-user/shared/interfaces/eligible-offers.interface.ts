import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { PriceInterface } from './price.interface';
import { OptionProductsModel } from '../models/option-products.model';

export interface EligibleOfferInterface {
  label: string;
  productInfo: OmapiProduct;
  price: PriceInterface;
  optionProducts: OptionProductsModel[];
  isSelected?: boolean;
  isPreviouslyAdded?: boolean;
  isDisabled?: boolean;
}

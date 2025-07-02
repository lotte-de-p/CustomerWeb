import { OmapiProduct } from '@telenet/ng-lib-omapi';
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

interface PriceInterface {
  currency: string;
  amount: string;
  earlyTerminationFee?: string;
}

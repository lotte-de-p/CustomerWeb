import { Discount } from '../models/discount.model';
import { Prices } from '../models/prices.model';

export interface ConfiguredLineInterface {
  msisdn?: string;
  productId?: string;
  omapiId?: string;
  type: string;
  changePlanName?: string;
  name?: string;
  productType?: string;
  recurrentDiscountedPrice?: string;
  totalPrice?: string;
  discountPrice?: string;
  isPhone2Go?: boolean;
  usageType?: string;
  labelKey?: string;
  isNetflixStandard?: boolean;
  prices?: Prices;
  discount?: Discount[];
  status?: string;
  billingCycle?: string;
  optionCount?: number;
  showNewLabel?: boolean;
  isESim?: boolean;
}

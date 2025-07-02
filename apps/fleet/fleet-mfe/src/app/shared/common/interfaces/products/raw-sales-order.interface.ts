import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { YUPUpfrontPaymentInterface } from '@telenet/ng-lib-form';

export interface RawPricesInterface {
  taxInclPrices: RawPriceAttributeInterface;
  taxExclPrices: RawPriceAttributeInterface;
  earlyTerminationFee?: string;
}

export interface RawPriceAttributeInterface {
  currency: string;
  oneTimeDiscount?: string;
  oneTimeTotal: string;
  oneTimeDiscounted: string;
  recurrentDiscount?: string;
  recurrentTotal: string;
  recurrentDiscounted: string;
  oneTimeDiscountedOnNextInvoice?: string;
  upfrontTotal: string;
  discountPrice?: string;
  yupUpfrontPayment?: YUPUpfrontPaymentInterface;
}
export interface RawDiscountItemInterface {
  discountDescriptions?: RawDiscountDescriptionInterface[];
  discounts?: RawDiscountInterface[];
}

export interface RawDiscountInterface {
  prices: RawPricesInterface;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RawDiscountDescriptionInterface {
  localizedNames: RawLocalizedDiscountNamesInterface;
  name: string;
}

export interface RawLocalizedDiscountNamesInterface {
  EN?: string;
  FR?: string;
  NL?: string;
}

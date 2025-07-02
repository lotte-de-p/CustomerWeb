import { RawOmapiProductInterface } from '../../../shared/common/interfaces/raw-omapi-product.interface';

export interface RawEligibleProductInterface {
  id: string;
  label: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  price?: RawPriceInterface;
  eligibleOffers: RawEligibleOfferInterface[];
  optionProducts: RawOptionInterfaceProduct[];
  isIncluded?: boolean;
}

export interface RawEligibleOfferInterface {
  specurl: string;
  label: string;
  rawOmapi?: RawOmapiProductInterface;
  price: RawPriceInterface;
  optionProducts?: RawOptionInterfaceProduct[];
  options?: RawOptionInterfaceProduct[];
}

export interface RawOptionInterfaceProduct {
  specurl: string;
  label?: string;
  rawOmapi?: RawOmapiProductInterface;
  price: RawPriceInterface;
  category?: string;
  otherPlatformWarningMsg?: boolean;
  parentId: string;
  isFree?: boolean;
}

export interface RawPriceInterface {
  currency: string;
  amount: string;
  value?: string;
  earlyTerminationFee?: string;
}

import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { SplitBillProfile } from '../../shared/interfaces/split-bill-profile.interface';

export interface RawProductPrice {
  currency: string;
  recurrentDiscounted: string;
  recurrentTotal: string;
  recurrentDiscount: string;
  earlyTerminationFee?: string;
  taxInclPrices: {
    currency: string;
    recurrentDiscounted: string;
    recurrentTotal: string;
    recurrentDiscount: string;
  };
  taxExclPrices: {
    currency: string;
    recurrentDiscounted: string;
    recurrentTotal: string;
    recurrentDiscount: string;
  };
}

export interface RawHandsetInterface {
  label: string;
  specurl: string;
  queryurl: string;
  rawOmapi?: RawOmapiProductInterface;
  rawOmapiQuery?: RawOmapiQueryProductInterface;
  contract: RawContractDetailsInterface;
  identifier: string;
  msisdn: string;
  accountNumber: string;
  productDetails?: HardwareProductDetailsInterface;
}

export interface RawContractDetailsInterface {
  obligationEndDate: string;
  duration: number;
  price: RawProductPrice;
}

export interface HardwareProductDetailsInterface {
  label: string;
  productType: string;
  priceType: string;
  requiresInstallation: boolean;
}

export interface RawContentPacksInterface {
  isIncludedOption: boolean;
  rawOmapi: RawOmapiProductInterface;
  label: string;
  status: string;
}

export interface RawExperienceInterface {
  experienceId: string;
  label: string;
  rawOmapi: RawOmapiProductInterface;
}

export interface RawOptionInterface {
  label: string;
  specurl: string;
  rawOmapi: RawOmapiProductInterface;
  activeOptions: string;
  status: string;
  price: RawProductPrice;
  contract: RawContractDetailsInterface;
  isIncludedOption?: boolean;
  isFree?: boolean;
  upgradePossibleTo?: string;
  productType?: string;
}

export interface RawProduct {
  id: string;
  identifier: string;
  msisdn?: string;
  accountNumber: string;
  label: string;
  locationId: string;
  bundleType?: string;
  specurl: string;
  status: string;
  eSimStatus?: string;
  upgradePossibleTo?: string;
  chars?: {
    hasVoiceMailBox: boolean;
  };
  handsets: RawHandsetInterface[];
  options: RawOptionInterface[];
  rawOmapi: RawOmapiProductInterface;
  price: RawProductPrice;
  summaryPrices?: {
    taxInclPrices: RawProductPrice['taxInclPrices'];
  };
  addressId: string;
  discountItems?: {
    discounts: unknown[];
  };
  productType: string;
  activationDate: string;
  children: RawProduct[];
  contentPacks?: RawContentPacksInterface[];
  experience?: RawExperienceInterface;
  dataLimit?: string;
  showModemUpgradeBanner?: boolean;
  hasOldSocialTariffDiscount?: boolean;
  simCardType?: string;
  simCardNumber?: string;
  pukCode?: string;
  splitBillProfile: SplitBillProfile;
}

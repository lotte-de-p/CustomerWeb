import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { RawDiscountItemInterface, RawPricesInterface } from './raw-prices.interface';
import { Address } from '../../models/address.model';

export interface RawCustomerProductHoldingInterface {
  id?: string;
  locationId?: string;
  selection?: boolean;
  identifier: string;
  lineIdentifier?: string;
  msisdn: string;
  label: string;
  status: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  handsets: RawHandsetInterface[];
  options: RawOptionInterface[];
  price: RawPricesInterface;
  summaryPrices: RawPricesInterface;
  referenceInformation?: string;
  splitBillProfile?: RawSplitBillProfileInterface;
  accountNumber: string;
  secondaryAccountNumber?: string;
  secondaryBillingAccount?: string;
  secondaryBillingAddressId?: string;
  discountItems?: RawDiscountItemInterface;
  hwcvpItemCode?: string;
  lineLevelProducts?: RawLineLevelProductsInterface[];
  productType?: string;
  children?: RawCustomerProductHoldingInterface[];
  activationDate: string;
  addressId: string;
  billingAccount: string;
  description: string;
  contentPacks?: RawContentPacksInterface[];
  experience?: RawExperienceInterface;
  address?: Address;
  lineType?: string;
  simType?: string;
  hasPendingOrder?: boolean;
  hasPendingSwapToESim?: boolean;
}

export interface RawExperienceInterface {
  experienceId: string;
  label: string;
  specurl: string;
}
export interface HardwareProductDetailsInterface {
  label: string;
  productType: string;
  priceType: string;
  requiresInstallation: boolean;
}

export interface RawHandsetInterface {
  label: string;
  specurl: string;
  hwcvpItemCode?: string;
  rawOmapi?: RawOmapiProductInterface;
  rawOmapiQuery?: RawOmapiQueryProductInterface;
  contract: RawContractDetailsInterface;
  identifier: string;
  msisdn: string;
  accountNumber: string;
  productDetails?: HardwareProductDetailsInterface;
}

export interface RawActiveTrialPackInterface {
  id?: string;
  label: string;
  specurl?: string;
  rawOmapi?: RawOmapiProductInterface;
  status: string;
  deactivationDate?: Date;
}

export interface RawContractDetailsInterface {
  obligationEndDate: string;
  duration: number;
  price: RawPricesInterface;
}

export interface RawOptionInterface {
  label: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  status: string;
  price: RawPricesInterface;
  contract: RawContractDetailsInterface;
  discountItems: RawDiscountItemInterface;
  isIncluded?: boolean;
  category?: string;
  activeTrialPack?: RawActiveTrialPackInterface;
  hwcvpItemCode?: string;
  isIncludedOption?: boolean;
  productType?: string;
  parentId?: string;
  isFree?: boolean;
  optionCount?: number;
  chars?: RawCharsInterface;
}

export interface RawSplitBillProfileInterface {
  id: string;
  name: string;
}

export interface RawLineLevelProductsInterface {
  category: string;
  identifier: string;
  rawOmapi: RawOmapiProductInterface;
  prices: RawPricesInterface;
  isFree: boolean;
  discountItems?: RawDiscountItemInterface;
}

export interface RawContentPacksInterface {
  label: string;
  specurl: string;
  status: string;
  isIncludedOption?: boolean;
  isLineLevelProduct?: boolean;
}

export interface RawCharsInterface {
  broadbandUuids?: string;
  serviceType: string;
  specUrl?: string;
  businessId: string;
}

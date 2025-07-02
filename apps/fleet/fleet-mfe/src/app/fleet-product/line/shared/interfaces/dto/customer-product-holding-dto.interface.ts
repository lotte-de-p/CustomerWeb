import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { Address } from '@telenet/ng-lib-sofy';
import { PricesDto } from './prices-dto.interface';
import { DiscountItemDto } from './sales-order-dto.interface';

export interface CustomerProductHoldingDto {
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
  handsets: HandsetDto[];
  options: OptionDto[];
  price: PricesDto;
  summaryPrices: PricesDto;
  referenceInformation?: string;
  splitBillProfile?: SplitBillProfileDto;
  accountNumber: string;
  secondaryAccountNumber?: string;
  secondaryBillingAddressId?: string;
  discountItems?: DiscountItemDto;
  hwcvpItemCode?: string;
  lineLevelProducts?: LineLevelProductsDto[];
  productType?: string;
  children?: CustomerProductHoldingDto[];
  activationDate: string;
  addressId: string;
  billingAccount?: string;
  description?: string;
  contentPacks?: ContentPacksDto[];
  experience?: ExperienceDto;
  address?: Address;
  lineType?: string;
}

export interface SplitBillProfileDto {
  id: string;
  name: string;
}

export interface ExperienceDto {
  experienceId: string;
  label: string;
  specurl: string;
}

export interface HardwareProductDetailsDto {
  label: string;
  productType: string;
  priceType: string;
  requiresInstallation: boolean;
  brand?: string;
  extraAtHomeDelivery?: boolean;
}

export interface HandsetDto {
  label: string;
  specurl: string;
  hwcvpItemCode?: string;
  rawOmapi?: RawOmapiProductInterface;
  rawOmapiQuery?: RawOmapiQueryProductInterface;
  contract: ContractDetailsDto;
  identifier: string;
  msisdn: string;
  accountNumber: string;
  productDetails?: HardwareProductDetailsDto;
}

export interface ActiveTrialPackDto {
  id?: string;
  label: string;
  specurl?: string;
  rawOmapi?: RawOmapiProductInterface;
  status: string;
  deactivationDate?: Date;
}

export interface ContractDetailsDto {
  obligationEndDate: string;
  duration: string;
  price: PricesDto;
}

export interface OptionDto {
  label: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  status: string;
  price: PricesDto;
  contract: ContractDetailsDto;
  discountItems: DiscountItemDto;
  isIncluded?: boolean;
  category?: string;
  activeTrialPack?: ActiveTrialPackDto;
  hwcvpItemCode?: string;
  isIncludedOption?: boolean;
  productType?: string;
  parentId?: string;
  isFree?: boolean;
  optionCount?: number;
  chars?: CharsDto;
}

export interface LineLevelProductsDto {
  category: string;
  identifier: string;
  rawOmapi?: RawOmapiProductInterface;
  prices: PricesDto;
  isFree: boolean;
  discountItems?: DiscountItemDto;
}

export interface ContentPacksDto {
  label: string;
  specurl: string;
  status: string;
  isIncludedOption?: boolean;
  isLineLevelProduct?: boolean;
}

export interface CharsDto {
  hasVoiceMailBox?: boolean;
  broadbandUuids?: string;
  serviceType?: string;
  specUrl?: string;
  businessId?: string;
}

import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { DataLimitEnum, ProductOverviewConstants } from '../constants/product-overview.constant';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { SimTypeEnum } from '../enums/sim-type.enum';

export interface HandsetInterface {
  identifier: string;
  msisdn: string;
  accountNumber: string;
  handsetName: string;
  productInfo: RawOmapiQueryProductInterface;
  contract: ContractInterface;
}

export interface ContractInterface {
  obligationEndDate: string;
  duration: number;
  price?: PriceInterface;
}

export interface PriceInterface {
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
}

export interface ContentPack {
  isIncludedOption: boolean;
  productInfo: OmapiProduct;
  label: string;
  status: string;
}

export interface ProductExperienceInterface {
  experienceId: string;
  label: string;
  productInfo: OmapiProduct;
}

export interface Option {
  label: string;
  productInfo: OmapiProduct;
  contract?: {
    obligationEndDate: string;
    duration: number;
  };
  price: PriceInterface;
  status: string;
  category?: string;
  isIncludedOption?: boolean;
  activeOptions: string;
  productType?: string;
  isOptionRemoved?: boolean;
  productId?: string;
  name?: string;
  volume?: string;
  isFree?: boolean;
  optionCount?: number;
  weight?: number;
  upgradePossibleTo?: string;
  upgradedFrom?: string;
  description?: string;
}

export interface MobileIdentifier {
  identifier: string;
  eSimStatus?: string;
}

export class Product {
  static readonly BUNDLE_TYPE_C5 = 'Connect 5';
  static readonly BUNDLE_TYPE_KLIK = 'KLIK';

  children: Product[];
  bundleType?: string;
  id?: string;
  productInfo: OmapiProduct;
  handsets: HandsetInterface[];
  productType: string;
  addressId: string;
  eSimStatus?: string;
  identifier: string;
  upgradePossibleTo?: string;
  hasIncludedOptions: boolean;
  contentPacks?: ContentPack[];
  options: Option[];
  hasExtraOptions: boolean;
  accountNumber: number;
  label: string;
  specUrl: string;
  productSpec?: OmapiProduct;
  status: string;
  price: PriceInterface;
  isUnderMove: boolean;
  isMultipleDTV?: boolean;
  experience?: ProductExperienceInterface;
  parentIdentifier?: string;
  locationId?: string;
  mobileIdentifier?: MobileIdentifier[];
  limitedLines?: string[];
  unlimitedLines?: string[];
  datalimit?: DataLimitEnum;
  bundleMaxlines?: number;
  showModemUpgradeBanner?: boolean;
  hasOldSocialTariffDiscount?: boolean;
  simCardType?: string;
  simCardNumber?: string;
  pukCode?: string;

  isUpgraded?: string;
  isAdded?: string;
  isAffected?: string;

  isProductActive(): boolean {
    return this.status === 'ACTIVE';
  }

  isProductSuspended(): boolean {
    return ProductOverviewConstants.SUSPEND_PRODUCT_STATUSES.includes(this.status);
  }

  isProductModificationInProgress(): boolean {
    return ProductOverviewConstants.MODIFICATION_PRODUCT_STATUSES.includes(this.status);
  }

  isProductDisconnectionInProgress(): boolean {
    return ProductOverviewConstants.DISCONNECTION_PRODUCT_STATUSES.includes(this.status);
  }

  isProductActivationInProgress(): boolean {
    return ProductOverviewConstants.ACTIVATION_PRODUCT_STATUSES.includes(this.status);
  }

  isC5Bundle(): boolean {
    return this.bundleType === Product.BUNDLE_TYPE_C5 || !!this.bundleType?.match(Product.BUNDLE_TYPE_KLIK);
  }

  hasValidPrice(price?: string) {
    return price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00';
  }

  isESim(): boolean {
    return this.simCardType === SimTypeEnum.E_SIM;
  }

  isPhysicalSim(): boolean {
    return this.simCardType === SimTypeEnum.PHYSICAL_SIM;
  }
}

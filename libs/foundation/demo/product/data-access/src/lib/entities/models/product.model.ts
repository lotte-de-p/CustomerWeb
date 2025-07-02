import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';

export interface ContractInterface {
  obligationEndDate: string;
  duration: number;
  price?: PriceInterface;
}

export interface MobileIdentifier {
  identifier: string;
  eSimStatus?: string;
}

export interface ProductExperienceInterface {
  experienceId: string;
  label: string;
  productInfo: OmapiProduct;
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
}

export interface ContentPack {
  isIncludedOption: boolean;
  productInfo: OmapiProduct;
  label: string;
  status: string;
}

export interface HandsetInterface {
  identifier: string;
  msisdn: string;
  accountNumber: string;
  handsetName: string;
  productInfo: RawOmapiQueryProductInterface;
  contract: ContractInterface;
}

export class ProductOverviewConstants {
  static EMPTY = '';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static CONTEXT_PRODUCT = '/products';
  static CONTEXT_PHONE_TO_GO = '/cloud-telephony/phone2go';
  static PRODUCT_SERVICE_PREFIX = '/public/api/product-service/';
  static RESOURCE_SERVICE_PREFIX = '/public/api/resource-service/';
  static CUSTOMER_SERVICE_PREFIX = '/public/api/customer-service/';

  // Statuses
  static ACTIVE_STATUS = 'ACTIVE';
  static SUSPENDED_STATUS = 'SUSPENDED';

  static SUSPEND_PRODUCT_STATUSES = ['SUSPENDED', 'SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR'];
  static MODIFICATION_PRODUCT_STATUSES = ['MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR'];
  static DISCONNECTION_PRODUCT_STATUSES = ['DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'];
  static ACTIVATION_PRODUCT_STATUSES = ['ACTIVATION_IN_PROGRESS', 'ACTIVATION_PASSED_PONR'];

  static PREPAID_MOBILE = 'prepaid-mobile'; // KEEP
}

export enum DataLimitEnum {
  FIVE_GB = '5 GB',
  UNLIMITED = 'Unlimited',
  UNKNOWN = 'Unknown',
}

export class Product {
  static readonly BUNDLE_TYPE_C5 = 'Connect 5';
  static readonly BUNDLE_TYPE_KLIK = 'KLIK';

  children!: Product[];
  bundleType?: string;
  id?: string;
  productInfo!: OmapiProduct;
  handsets!: HandsetInterface[];
  productType!: string;
  addressId!: string;
  eSimStatus?: string;
  identifier!: string;
  upgradePossibleTo?: string;
  hasIncludedOptions!: boolean;
  contentPacks?: ContentPack[];
  options!: Option[];
  hasExtraOptions!: boolean;
  accountNumber!: number;
  label!: string;
  specUrl!: string;
  productSpec?: OmapiProduct;
  status!: string;
  price!: PriceInterface;
  isUnderMove!: boolean;
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

  isProductActive(): boolean {
    return this.status === ProductOverviewConstants.ACTIVE_STATUS;
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
}

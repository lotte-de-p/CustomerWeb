import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ProductConstants } from '../constants/product.constant';
import { Option } from './option.model';
import { SmartPhoneInterface } from '../interfaces/smartphone.interface';
import { Prices } from './sales-order/prices.model';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { LineLevelProductsInterface } from '../interfaces/line-level-products.interface';
import { Address } from './address.model';
import { ProductExperienceInterface } from '../../../../shared/common/models/product.model';
import { ContentPacksDto } from '../interfaces/dto/content-packs-dto.interface';
import { EligibleOfferInterface } from '../interfaces/eligible-offer.interface';
import { SplitBillProfile } from '../interfaces/split-bill-profile.interface';

export class CustomerProductHolding {
  id?: string;
  locationId?: string;
  selection?: boolean;
  identifier: string;
  lineIdentifier?: string;
  msisdn: string;
  referenceInformation?: string;
  splitBillProfile?: SplitBillProfile;
  accountNumber: string;
  label: string;
  productInfo?: OmapiProduct;
  plan?: OmapiProduct;
  status: string;
  smartPhones?: SmartPhoneInterface[];
  options: Option[];
  secondaryAccountNumber?: string;
  secondaryBillingAccount?: string;
  secondaryBillingAddressId?: string;
  prices?: Prices;
  summaryPrices?: Prices;
  hasUsage?: boolean;
  biptToolUrl?: string;
  discountItem?: DiscountItemInterface;
  success? = false;
  hwcvpItemCode?: string;
  productType?: string;
  lineLevelProducts?: LineLevelProductsInterface[];
  children?: CustomerProductHolding[];
  activationDate?: string;
  addressId?: string;
  isSelected?: boolean;
  isAffected?: boolean;
  isUpgraded?: boolean;
  optionsLabels?: string;
  isVisibleOptions?: boolean;
  isOptionsPanelOpen?: boolean;
  description?: string;
  billingAccount?: string;
  newTariffPlan?: EligibleOfferInterface;
  contentPacks?: ContentPacksDto[];
  experience?: ProductExperienceInterface;
  address?: Address;
  lineType?: string;
  weight?: number;
  splitBilling?: string;
  simTypeToExport?: string;
  specUrl?: string;
  simType?: string;
  hasPendingOrder?: boolean;
  hasPendingSwapToESim?: boolean;

  hasProductType?(productType: string): boolean {
    if (this.productType === productType) {
      return true;
    } else if (this.productType === ProductConstants.PRODUCT_TYPE_BUNDLE && this.children && this.children.length > 0) {
      return this.children.some((p) => p.hasProductType(productType));
    }
    return false;
  }

  hasProductTypeAndStatus?(productType: string, statusList: string[]): boolean {
    if (this.productType === productType && statusList.includes(this.status)) {
      return true;
    } else if (this.productType === ProductConstants.PRODUCT_TYPE_BUNDLE && this.children && this.children.length > 0) {
      return this.children.some((p) => p.hasProductTypeAndStatus(productType, statusList));
    }
    return false;
  }

  hasProductStatus?(status: string): boolean {
    if (this.productType === ProductConstants.PRODUCT_TYPE_BUNDLE && this.children && this.children.length > 0) {
      return this.children.some((p) => p.hasProductStatus(status));
    } else if (this.status === status) {
      return true;
    }
    return false;
  }

  isESim?(): boolean {
    return this.simType === 'E_SIM';
  }
}

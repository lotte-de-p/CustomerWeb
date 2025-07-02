import { ProductConstants } from '../constants/product/product.constant';
import { OmapiProduct, OmapiProductInterfaceData } from '@telenet/ng-lib-omapi';
import isUndefined from 'lodash-es/isUndefined';
import {
  ProductInterface,
  ProductOptionsInterface,
  ProductOrderInterface,
  ProductSubscriptionsInterface,
} from '../interfaces/product/product-subscriptions.interface';
import { Address } from './address.model';
import { Usage } from './usage.model';
import { Prices } from './prices.model';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { MobileUsageNotificationsConstants } from '../constants/mobile-usage-notifications.constants';

export class ProductSubscriptionsModel implements ProductSubscriptionsInterface {
  description: string;
  id: string;
  identifier: string;
  externalProductCode: string;
  label: string;
  addressId: string;
  address?: Address;
  locationId: string;
  status: string;
  productType: string;
  activationDate?: string;
  userPIDLinked?: boolean;
  isDataOnlyPlan?: boolean;
  isMultipleUserPIDLinked?: boolean;
  hasNoLinesMappedToPID?: boolean;
  msisdn?: string;
  biptToolUrl?: string;
  hasUsage?: boolean;
  hasFirstBill?: boolean;
  bundleIdentifier?: string;
  usage?: Usage;
  isProrated?: boolean;
  spec?: OmapiProductInterfaceData;
  pid?: string;
  bundleFamily?: string;
  hasVoiceMail?: boolean;
  internetType?: string;
  useSpecurl?: boolean;
  productOrders?: ProductOrderInterface[];
  salesOrderId?: string;
  products?: ProductInterface[];
  productInfo?: OmapiProduct;
  name?: string;
  options?: ProductOptionsInterface[];
  billingAccountNumber?: string;
  inviteType?: string;
  chargePeriod?: string;
  targetepc: string;
  prices?: Prices;
  isInteractive?: boolean;
  serialNumber?: string;
  hwReturnDueDate?: string;
  hwClaimFee?: string;
  parentId?: string;
  compositeOrderId?: string;
  deviceType?: string;
  bundleType?: string;
  nextBillingDate?: string;
  specurl?: string;
  activeSocialTariff?: string;
  plan?: OmapiProduct;
  isPrepaid?: boolean;
  isBase0Plan?: boolean;
  lineType?: string;
  simType?: string;
  children?: ProductSubscriptionsInterface[];

  isActive(): boolean {
    return !isUndefined(this.status) && this.status.toUpperCase() === ProductConstants.PRODUCT_STATUS_ACTIVE;
  }

  hasFixedProduct(): boolean {
    return !isUndefined(this.productType) && ProductConstants.FIXED_PRODUCTS.includes(this.productType.toLowerCase());
  }

  isWigoProduct(): boolean {
    return (
      this.isBundleProduct() &&
      !isUndefined(this.bundleFamily) &&
      this.bundleFamily.toUpperCase() === ProductConstants.WIGO_PRODUCT
    );
  }

  isWhopOrWhoppaProduct(): boolean {
    return (
      this.isBundleProduct() &&
      !isUndefined(this.bundleFamily) &&
      this.bundleFamily.toUpperCase() === ProductConstants.WHOP_WHOPPA_PRODUCT
    );
  }

  isConnect5Bundle(): boolean {
    return this.bundleType === MobileUsageNotificationsConstants.C5BUNDLE;
  }

  isBundleProduct(): boolean {
    return !isUndefined(this.productType) && this.productType.toLowerCase() === ProductConstants.PRODUCT_TYPE_BUNDLE;
  }

  hasProduct(productType: ProductTypeEnum): boolean {
    const mainProduct = this.productType.toUpperCase() === productType;
    let childProduct = false;
    if (this.products) {
      childProduct = this.products.some((product) => {
        return product.productType.toUpperCase() === productType;
      });
    }
    return mainProduct || childProduct;
  }

  hasActiveDtvAndIntProducts() {
    return this.isActive() && this.hasProduct(ProductTypeEnum.DTV) && this.hasProduct(ProductTypeEnum.INTERNET);
  }
}

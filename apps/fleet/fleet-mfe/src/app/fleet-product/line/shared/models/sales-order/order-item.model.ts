import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { ValidationInterface } from './sales-order.model';
import { ProductStatusEnum, ProductTypeEnum } from './line-item.model';
import first from 'lodash-es/first';
import { Prices } from './prices.model';
import { BillingAddressInterface } from '../../interfaces/billing-address.interface';
import { DiscountItemInterface } from '../../interfaces/discount-item.interface';
import { SalesOrderHelper } from '../../helpers/sales-order.helper';
import { Address } from '../address.model';

export class OrderItem {
  id: string;
  name: string;
  type: string;
  otherPlatformWarningMsg?: boolean;
  prices: Prices;
  locationId: string;
  parentId: string;
  productInfo: OmapiProduct;
  hwcvpItemCode?: string;
  billingAddressId: string;
  billingAddress: BillingAddressInterface;
  orderItems: OrderItem[];
  orderItemsByRank: OrderItem[];
  validations: ValidationInterface[];
  status: string;
  rank: number;
  eligibility: string;
  isOnlyMobileChanges?: boolean;
  chars: CharacteristicsInterface;
  discountItem: DiscountItemInterface;
  productIdentifier: string;
  eligibleForEasySwitch: boolean;
  publicateNumber?: boolean;
  isMobileLineConfigured?: boolean;
  serialNumber?: string;
  isMigratedFromStandalone?: boolean;
  isDiscountByCouponCode?: boolean;
  optionCount?: number;
  expandMobileLine?: boolean;
  changePlanName?: string;
  usageType?: OrderItemUsageTypeEnum;
  noProductChanges?: boolean;
  oneTimeEarlyTerminationFee?: string;

  setPricesFromOTCOrderItem(): void {
    if (this.productInfo && this.productInfo.productType === ProductTypeEnum.SMARTPHONE) {
      const oTCItem = first(this.getItemsByProductType([ProductTypeEnum.SMARTPHONE_OTC]));
      if (oTCItem && oTCItem.prices) {
        this.productInfo.priceType = oTCItem.productInfo.priceType;
        this.prices.taxInclPrices.oneTimeTotal = oTCItem.prices.taxInclPrices.oneTimeTotal;
        this.prices.taxInclPrices.oneTimeDiscount = oTCItem.prices.taxInclPrices.oneTimeDiscount;
        this.prices.taxInclPrices.oneTimeDiscounted = oTCItem.prices.taxInclPrices.oneTimeDiscounted;

        this.prices.taxExclPrices.oneTimeTotal = oTCItem.prices.taxExclPrices.oneTimeTotal;
        this.prices.taxExclPrices.oneTimeDiscount = oTCItem.prices.taxExclPrices.oneTimeDiscount;
        this.prices.taxExclPrices.oneTimeDiscounted = oTCItem.prices.taxExclPrices.oneTimeDiscounted;

        this.orderItems = [];
      }
    }
  }

  setCancellationCharge(): void {
    if (this.status === ProductStatusEnum.MODIFY || this.status === ProductStatusEnum.DISCONNECT) {
      const cancellationItem = first(
        this.getItemsByProductType([ProductTypeEnum.CANCELLATION_FEE, ProductTypeEnum.CONTENT_DISCONNECTION_FEE])
      );
      if (cancellationItem && cancellationItem.prices) {
        this.prices.taxInclPrices.oneTimeDiscountedOnNextInvoice =
          cancellationItem.prices.taxInclPrices && cancellationItem.prices.taxInclPrices.oneTimeDiscountedOnNextInvoice;
        this.prices.taxExclPrices.oneTimeDiscountedOnNextInvoice =
          cancellationItem.prices.taxExclPrices && cancellationItem.prices.taxExclPrices.oneTimeDiscountedOnNextInvoice;
        this.orderItems = [];
      }
    }
  }

  getItemsByProductType(productTypeList: ProductTypeEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByProductType(this.orderItems, productTypeList);
  }

  getItemsByStatus(statusList: ProductStatusEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByStatus(this.orderItems, statusList);
  }
}

enum OrderItemUsageTypeEnum {
  LIMITED = 'Limited1',
  UNLIMITED = 'Unlimited',
  EMPTY = '',
}

export interface CharacteristicsInterface {
  email: string;
  phoneNumber: string;
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  locationId: string;
  address: Address;
  manualAddress?: Address;
  endDate: string;
  deliveryEmail: string;
  'Cable Network Operator'?: string;
  'Active VOO Customer?'?: string;
  Floor?: string;
  'Location on the Floor'?: string;
  'Connection Needed?'?: string;
}

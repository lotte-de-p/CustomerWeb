import { Prices } from './prices.model';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { SalesOrderHelper } from '../helpers/sales-order.helper';
import { ProductStatusEnum } from '../enums/product-status.enum';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import first from 'lodash-es/first';
import isEmpty from 'lodash-es/isEmpty';
import { ConfiguredLineInterface } from '../interfaces/configure-bundle.interface';
import { BillingAddressInterface } from '../interfaces/billing/billing-address.interface';
import { ValidationInterface } from '../interfaces/validation.interface';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { OrderItemUsageTypeEnum } from '../enums/order-item-usage-type.enum';

export class OrderItem implements ConfiguredLineInterface {
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

  getItemsByProductType(productTypeList: ProductTypeEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByProductType(this.orderItems, productTypeList);
  }

  getItemsByStatus(statusList: ProductStatusEnum[]): OrderItem[] {
    return SalesOrderHelper.getItemsByStatus(this.orderItems, statusList);
  }

  getItemsByProductTypeAndStatus(productTypeList: ProductTypeEnum[], statusList: string[]): OrderItem[] {
    return SalesOrderHelper.getItemsByProductType(this.orderItems, productTypeList).filter((product) =>
      SalesOrderHelper.getItemsByStatus(this.orderItems, statusList).some(
        ({ id, name }) => product.id === id && product.name === name
      )
    );
  }

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

  isHardwareProduct(): boolean {
    return !isEmpty(this.hwcvpItemCode);
  }

  getChildItems(itemsStatusList: string[]): OrderItem[] {
    let flatItemList: OrderItem[] = [];
    if (!isEmpty(this.orderItems)) {
      this.orderItems.flatMap((sloOrderItem: OrderItem) => {
        flatItemList = flatItemList.concat(sloOrderItem.getChildItems(itemsStatusList));
      });
    }
    if (itemsStatusList.includes(this.status)) {
      flatItemList.push(this);
    }
    return flatItemList;
  }
}

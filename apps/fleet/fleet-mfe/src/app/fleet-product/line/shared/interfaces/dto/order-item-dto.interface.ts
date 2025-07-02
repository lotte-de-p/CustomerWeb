import { PricesDto } from './prices-dto.interface';
import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { CharsInterface } from '../chars.interface';
import { OrderItemUsageTypeEnum } from '../../enums/order-item-usage.enum';
import { AddressInterfaceDto } from './address-interface-dto.interface';
import { DiscountItemDto } from './sales-order-dto.interface';

export interface OrderItemDto {
  id: string;
  name: string;
  type: string;
  otherPlatformWarningMsg: boolean;
  oneTimeEarlyTerminationFee?: string;
  prices: PricesDto;
  locationId: string;
  parentId: string;
  specurl: string;
  queryUrl?: string;
  rawOmapi?: RawOmapiProductInterface;
  rawOmapiQuery?: RawOmapiQueryProductInterface;
  orderItems: OrderItemDto[];
  status: string;
  eligibility?: string;
  billingAddressId?: string;
  billingAddress?: BillingAddressDto;
  validations?: ValidationDto[];
  chars: CharsInterface;
  discountItems?: DiscountItemDto;
  hwcvpItemCode?: string;
  productIdentifier?: string;
  eligibleForEasySwitch?: boolean;
  publicateNumber?: boolean;
  isMobileLineConfigured?: boolean;
  productDetails?: HardwareProductDetails;
  serialNumber?: string;
  isMigratedFromStandalone?: boolean;
  isDiscountByCouponCode?: boolean;
  optionCount?: number;
  usageType?: OrderItemUsageTypeEnum;
}

export interface ValidationDto {
  message: string;
  typeOfProblem: string;
  validationPriority: string;
  targetOrderItemId: string;
}

interface HardwareProductDetails {
  isBackOrder?: boolean;
  isPreOrder?: boolean;
  label: string;
  productType: string;
  priceType: string;
  requiresInstallation: boolean;
  brand?: string;
  extraAtHomeDelivery?: boolean;
}

export interface BillingAddressDto {
  manualAddress: AddressInterfaceDto;
}

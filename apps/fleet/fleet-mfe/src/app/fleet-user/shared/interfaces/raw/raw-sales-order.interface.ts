import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum, YUPUpfrontPaymentInterface } from '@telenet/ng-lib-form';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { OrderItemUsageTypeEnum } from '../../enums/order-item-usage-type.enum';
import { RawAddressInterface } from './raw-address.interface';
import { LineItemTypeEnum } from '../../enums/line-item-type.enum';
import { ServiceabilityCheckResultInterface } from '../serviceability-check-result.interface';
import { OnTopPromosInterface } from './raw-on-top-promos.interface';
import { Address } from '../../models/address.model';

export interface RawSalesOrderInterface {
  status?: string;
  customerId?: string;
  id?: string;
  name?: string;
  lineCount?: string;
  token?: string;
  prices: RawPricesInterface;
  oneTimeEarlyTerminationFee?: string;
  lineItems?: RawLineItemInterface[];
  deliveryItems?: RawDeliveryItemInterface[];
  validations?: RawValidationInterface[];
  code?: string;
  correlationId?: string;
  pricesWereUpdated?: boolean;
  manualAddress?: boolean;
  feasibilityCheckRequired: boolean;
  feasibilityCheckResult?: RawFeasibilityCheckResultInterface;
  installation?: RawInstallationInterface;
  serviceabilityCheckResult?: ServiceabilityCheckResultInterface;
  modemSwapReq?: boolean;
  manualProcessingRequired?: boolean;
  contractSummaryReRequired?: boolean;
  isSlotAvailable?: boolean;
  isBundleFamilySame?: boolean;
  warnings?: RawWarningsInterface[];
  mobileLinesInNewBundle?: string;
  hwitems?: RawInstallationInterface;
  isBillDeliveryMethodChanged?: boolean;
  promo?: OnTopPromosInterface;
  registration?: RawRegistrationInterface;
  amountOfLimitedSims?: number;
  eSimAllowed?: boolean;
  taskGroupId?: string;
  dtvDisconnected?: boolean;
}

export interface RawRegistrationInterface {
  orderItems: RawOrderItemInterface[];
}

export interface RawWarningsInterface {
  code: string;
  description: string;
}

export interface RawInstallationInterface {
  type?: string;
  addressId?: string;
  manualAddress?: Address;
  orderItems?: RawOrderItemInterface[];
  appointment?: UpdatedAppointmentSlotInterface;
  relocate?: RawRelocateInterface;
  isFtthAppointment?: boolean;
  appointments?: RawAppointmentsInterface;
}

export interface RawAppointmentsInterface {
  availabilities: RawAvailabilitiesInterface[];
}

export interface RawAvailabilitiesInterface {
  date?: string;
  slots: RawTimeSlotAvailabilityInterface[];
}

export interface RawTimeSlotAvailabilityInterface {
  timeSlotCode: TimeslotMomentEnum;
  specurl: string;
  availabilityId: string;
  productInfo?: RawOmapiProductInterface;
  timeFormat?: string;
}

export interface RawRelocateInterface {
  date: string;
  oldAddressId: string;
}

export interface RawFeasibilityCheckResultInterface {
  isFeasible: boolean;
  interventionRequired: boolean;
  availableInstallationOptions: RawAvailableInstallationOptionInterface[];
  isDeliveryEmptyForSelfInstall?: boolean;
}

export interface RawAvailableInstallationOptionInterface {
  name: string;
  id?: string;
  installTypeGroup: string;
  deliveryGroup?: string;
  prices: RawPricesInterface;
  discountItems?: RawDiscountItemInterface;
  filterRemovalRequired?: boolean;
}

export interface UpdatedAppointmentSlotInterface {
  date?: string;
  timeSlotCode?: TimeslotMomentEnum;
  priceCategory?: string;
}

export interface RawPricesInterface {
  taxInclPrices: RawPriceAttributeInterface;
  taxExclPrices: RawPriceAttributeInterface;
  earlyTerminationFee?: string;
  currency?: string;
}

export interface RawPriceAttributeInterface {
  currency: string;
  oneTimeDiscount?: string;
  oneTimeTotal: string;
  oneTimeDiscounted: string;
  recurrentDiscount?: string;
  recurrentTotal: string;
  recurrentDiscounted: string;
  oneTimeDiscountedOnNextInvoice?: string;
  upfrontTotal: string;
  discountPrice?: string;
  yupUpfrontPayment?: YUPUpfrontPaymentInterface;
}

export interface HardwareProductDetailsInterface {
  isBackOrder: boolean;
  isPreOrder: boolean;
  label: string;
  productType: string;
  priceType: string;
  requiresInstallation: boolean;
  brand?: string;
  extraAtHomeDelivery?: boolean;
}

export interface RawLineItemInterface {
  productIdentifier?: string;
  acquisitionType?: string;
  orderItems: RawOrderItemInterface[];
  publicateNumber: boolean;
  type?: LineItemTypeEnum;
  noProductChanges?: boolean;
}

export interface RawDeliveryItemInterface {
  id: string;
  name: string;
  type?: string;
  prices: RawPricesInterface;
  locationId: string;
  parentId: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
  chars: RawCharsInterface;
  orderItems: RawOrderItemInterface[];
  status: string;
}

export interface RawOrderItemInterface {
  id: string;
  name: string;
  type: string;
  otherPlatformWarningMsg: boolean;
  oneTimeEarlyTerminationFee?: string;
  prices: RawPricesInterface;
  locationId: string;
  parentId: string;
  specurl: string;
  queryUrl?: string;
  rawOmapi?: RawOmapiProductInterface;
  rawOmapiQuery?: RawOmapiQueryProductInterface;
  orderItems: RawOrderItemInterface[];
  status: string;
  eligibility?: string;
  billingAddressId?: string;
  billingAddress?: RawBillingAddressInterface;
  validations?: RawValidationInterface[];
  chars: RawCharsInterface;
  discountItems?: RawDiscountItemInterface;
  hwcvpItemCode?: string;
  productIdentifier?: string;
  eligibleForEasySwitch?: boolean;
  publicateNumber?: boolean;
  isMobileLineConfigured?: boolean;
  productDetails?: HardwareProductDetailsInterface;
  serialNumber?: string;
  isMigratedFromStandalone?: boolean;
  isDiscountByCouponCode?: boolean;
  optionCount?: number;
  usageType?: OrderItemUsageTypeEnum;
}

export interface RawBillingAddressInterface {
  manualAddress: RawAddressInterface;
}

export interface RawValidationInterface {
  message: string;
  typeOfProblem: string;
  validationPriority: string;
  targetOrderItemId: string;
}

export interface RawCharsInterface {
  email: string;
  phoneNumber: string;
  locationId: string;
  contactFirstName: string;
  contactLastName: string;
  companyName: string;
  address: RawAddressInterface;
  manualAddress?: RawAddressInterface;
  endDate: string;
  deliveryEmail: string;
}

export interface RawDiscountItemInterface {
  discountDescriptions?: RawDiscountDescriptionInterface[];
  discounts?: RawDiscountInterface[];
}

export interface RawDiscountInterface {
  prices: RawPricesInterface;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RawDiscountDescriptionInterface {
  localizedNames: RawLocalizedDiscountNamesInterface;
  name: string;
}

export interface RawLocalizedDiscountNamesInterface {
  EN?: string;
  FR?: string;
  NL?: string;
}

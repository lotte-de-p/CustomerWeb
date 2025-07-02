import { CustomerAccountTypeEnum } from '../enums/customer-account-type.enum';
import { CustomerCreditClassificationTypeEnum } from '../enums/customer-credit-classification-type.enum';

import { ValidationElementEnum } from '../enums/validation-element.enum';

export interface ValidationElement {
  targetOrderItemId: string;
  typeOfProblem: ValidationElementEnum;
}

export interface CustomerAccountDetails {
  id: string;
  primaryPhone: {
    value: string;
  };
  customerCategory: {
    name: string;
  };
  primaryContact: {
    lastName: string;
    firstNameOfficial: string;
    title: string;
    firstName: string;
    contactMethods: ContactMethod[];
  };
  customerAddress?: {
    id: string;
    name: string;
  };
  legalAddress?: {
    id: string;
    name: string;
  };
  contactMethods?: ContactMethod[];
  customerLocations?: CustomerLocation[];
  status: CustomerAccountTypeEnum;
  creditClassificationCode: CustomerCreditClassificationTypeEnum;
}

export interface ContactMethod {
  id: string;
  value: string;
  '@type': string;
}

export interface CustomerLocation {
  address: {
    name: string;
    id: string;
  };
  easySwitchInUse: boolean;
  easySwitchId: string;
  name: string;
  id: string;
  isPseudoLocation: boolean;
  isFleetLocation: boolean;
}

export interface RuleDiscount {
  name: string;
  id: string;
}

export interface Rule {
  id: string;
  targetOrderItemIds: string[];
  slotName: string;
  discount: RuleDiscount;
  discountAmount: Price;
}

export interface DiscountItem {
  id: string;
  discountId: string;
  name: string;
  targetOrderItems: OrderItem[];
}

export interface SalesOrder {
  status?: string;
  id: string;
  orderItems: OrderItem[];
  rules: Rule[];
  price: Prices;
  discountItems: DiscountItem[];
  validationElements: ValidationElement[];
}

export interface OrderItemOffer {
  businessDomains: string[];
  code: string;
  id: string;
  externalProductCode?: string;
}

export interface Prices {
  recurrentTax: Price;
  oneTimeDiscountedWithoutTaxes: Price;
  oneTimeDiscounted: Price;
  recurrentDiscount: Price;
  oneTimeDiscount: Price;
  recurrentTotal: Price;
  recurrentTotalWithoutTaxes: Price;
  upfrontPaymentTotalForHomeDeliveryWithoutTaxes: Price;
  upfrontPaymentTotalForSecuredHomeDeliveryEquipment: Price;
  recurrentDiscountedWithoutTaxes: Price;
  oneTimeDiscountedWithoutUpfrontWithoutTaxes: Price;
  recurrentDiscounted: Price;
  upfrontPaymentTotal: Price;
  oneTimeInitialWithoutUpfront: Price;
  upfrontPaymentTotalWithoutTaxes: Price;
  oneTimeDiscountWithoutTaxes: Price;
  oneTimeTax: Price;
  oneTimeDiscountedWithoutUpfront: Price;
  recurrentDiscountWithoutTaxes: Price;
  upfrontPaymentDiscountedWithoutTaxes: Price;
  upfrontPaymentInitial: Price;
  oneTimeTotal: Price;
  oneTimeTotalWithoutTaxes: Price;
  upfrontPaymentDiscounted: Price;
}

export interface Price {
  currency: {
    name: string;
    code: string;
  };
  value: string;
}

export interface Image {
  attributeKey: string;
  value: string;
}

export interface OrderItem {
  action: string;
  id: string;
  customerProductId: string;
  offer: OrderItemOffer;
  name: string;
  orderItems?: OrderItem[];
  prices: Prices;
  mainImageUrl?: string;
  chars: {
    'Item Code': string;
    'Postal Code': string;
    'Delivery Address'?: string;
    'Delivery Type'?: string;
    'Municipality/Sub-municipality'?: string;
    'House Number'?: string;
    'Sub-house Number'?: string;
    'Box Number'?: string;
    Street: string;
    'First Name'?: string;
    'Last Name'?: string;
    'Mobile Number'?: string;
    'E-Mail'?: string;
    'Device Name'?: string;
  };
}

export interface OrderItemDeliveryChars {
  address?: string;
  deliveryType?: string;
  municipality?: string;
  postalCode?: string;
  street?: string;
  houseNumber?: string;
  subHouseNumber?: string;
  box?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  email?: string;
}

export interface DeliveryMethods {
  groupedDeliveryItems?: DeliveryGroup[];
  standaloneDeliveryItems?: StandaloneDeliveryItem[];
}

export interface DeliveryMethod {
  name: string;
  id: string;
}

export interface DeliveryGroup {
  deliveryGroup: string;
  deliveryMethods: DeliveryMethod[];
}

export interface StandaloneDeliveryItem {
  deliveryOrderItem: DeliveryOrderItem;
  deliveryMethods: DeliveryMethod[];
}

export interface DeliveryOrderItem {
  name: string;
  id: string;
}

export interface DeliveryMethod {
  name: string;
  id: string;
}

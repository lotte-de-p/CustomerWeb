import { DetailInterface } from '../detail.interface';

export interface RawBillingAccountInterface {
  id: string;
  accountNumber: string;
  billingAddress: RawBillingAddressInterface;
  collectionsInfo: RawCollectionsInfoInterface;
  contactInfo: RawContactInfoInterface;
  customerCategoryType: string;
  defaultAccount: boolean;
  dispatchMethod: RawDispatchMethodInterface;
  doccleCode: string;
  email: DetailInterface;
  mobile: DetailInterface;
  overConsumptionThreshold: number;
  paymentInfo: RawPaymentInfoInterface;
  status: string;
  treatments: RawTreatmentInterface[];
  isEligibleForManualPayment?: boolean;
  hasFailedDDPayment?: boolean;
}

export interface RawTreatmentInterface {
  estimatedDate: string;
  id: string;
  name: string;
  type: string;
}

export interface RawPaymentInfoInterface {
  method: string;
  lastpaymentMethod: string;
}

export interface RawDispatchMethodInterface {
  communicationMethod: string;
  current: string;
}

export interface RawContactInfoInterface {
  firstName: string;
  lastName: string;
}

export interface RawCollectionsInfoInterface {
  balance: RawBalanceInterface;
  dueDate: string;
  ogmCode: string;
  paymentPlan: boolean;
  status: boolean;
}

export interface RawBillingAddressInterface {
  addressId: string;
  boxNr: string;
  country: string;
  floor: string;
  houseNr: string;
  municipality: string;
  postalCode: string;
  street: string;
  subHouseNr: string;
}

export interface RawBalanceInterface {
  amount: string;
  balanceType: string;
  outstandingDebt: string;
  type: string;
}

import { DetailInterface } from '../detail.interface';

export interface BillingAccountInterface {
  id: string;
  accountNumber: string;
  billingAddress: BillingAddressInterface;
  collectionsInfo: CollectionsInfoInterface;
  contactInfo: ContactInfoInterface;
  customerCategoryType: string;
  defaultAccount: boolean;
  dispatchMethod: DispatchMethodInterface;
  doccleCode: string;
  email: DetailInterface;
  mobile: DetailInterface;
  overConsumptionThreshold: number;
  paymentInfo: PaymentInfoInterface;
  status: string;
  treatments: TreatmentInterface[];
  isEligibleForManualPayment?: boolean;
  hasFailedDDPayment?: boolean;
}

export interface BillingAddressInterface {
  addressId: string;
  boxNumber: string;
  country: string;
  floor: string;
  houseNumber: string;
  municipality: string;
  postalCode: string;
  street: string;
  subHouseNumber: string;
}

export interface TreatmentInterface {
  estimatedDate: string;
  id: string;
  name: string;
  type: string;
}

export interface PaymentInfoInterface {
  method: string;
  lastpaymentMethod: string;
}

export interface DispatchMethodInterface {
  communicationMethod: string;
  current: string;
}

export interface ContactInfoInterface {
  firstName: string;
  lastName: string;
}

export interface CollectionsInfoInterface {
  balance: BalanceInterface;
  dueDate: string;
  ogmCode: string;
  paymentPlan: boolean;
  status: boolean;
}

export interface BalanceInterface {
  amount: string;
  balanceType: string;
  outstandingDebt: string;
  type: string;
}

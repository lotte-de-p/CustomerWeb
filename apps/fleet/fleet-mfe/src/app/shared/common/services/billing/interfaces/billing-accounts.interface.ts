import { DetailInterface } from './detail.interface';
import { AddressInterface } from './address.interface';

export interface BillingAccountInterface {
  id: string;
  accountNumber: string;
  billingAddress?: BillingAddressInterface;
  collectionsInfo?: CollectionsInfoInterface;
  contactInfo?: ContactInfoInterface;
  customerCategoryType?: string;
  defaultAccount?: boolean;
  dispatchMethod?: DispatchMethodInterface;
  doccleCode?: string;
  email?: DetailInterface;
  mobile?: DetailInterface;
  overConsumptionThreshold?: number;
  paymentInfo?: PaymentInfoInterface;
  status?: string;
  treatments?: TreatmentInterface[];
  isEligibleForManualPayment?: boolean;
  hasFailedDDPayment?: boolean;

  hasDirectDebit(): boolean;
  hasOutstandingBalance(): boolean;
  hasRefund(): boolean;
  getDisplayAddress(): AddressInterface;
  getDisplayAmount(): string;
  hasPaymentPlan(): boolean;
  allowMigrationToDoccle(): boolean;
  allowedToChangeDispatchMethod(): boolean;
  hasPaperCommunication(): boolean;
  hasSmsCommunication(): boolean;
  hasDoccleCommunication(): boolean;
  hasEmailCommunication(): boolean;
  hasEmailAndSmsCommunication(): boolean;
  hasEtisCommunication(): boolean;
  hasManualLastPaymentMethod(): boolean;
  hasRecentlyPaymentMethodChanged(): boolean;
  hasRecentlyPaymentMethodChangedManual(): boolean;
  isEligibleToPay(): boolean;
}

export interface BillingAddressInterface {
  addressId?: string;
  boxNumber?: string;
  country?: string;
  floor?: string;
  houseNumber?: string;
  municipality?: string;
  postalCode?: string;
  street?: string;
  subHouseNumber?: string;
}

export interface TreatmentInterface {
  estimatedDate?: string;
  id?: string;
  name?: string;
  type?: string;
}

export interface PaymentInfoInterface {
  method?: string;
  lastpaymentMethod?: string;
}

export interface DispatchMethodInterface {
  communicationMethod?: string;
  current?: string;
}

export interface ContactInfoInterface {
  firstName?: string;
  lastName?: string;
}

export interface CollectionsInfoInterface {
  balance?: BalanceInterface;
  dueDate?: string;
  ogmCode?: string;
  paymentPlan?: boolean;
  status?: boolean;
}

export interface BalanceInterface {
  amount?: string;
  balanceType?: string;
  outstandingDebt?: string;
  type?: string;
}

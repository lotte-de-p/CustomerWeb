import { PaymentStatus } from './payment-status';

export enum PaymentMethod {
  MANUAL = 'MANUAL',
  DIRECT_DEBIT = 'DIRECT_DEBIT',
}

export enum DispatchMethod {
  PAPER = 'PAPER',
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  EMAIL_SMS = 'EMAIL_SMS',
  DOCCLE = 'DOCCLE',
  ETIS = 'ETIS',
}

export enum CollectionsTreatmentMessage {
  RESUME_SUSPENDED_SERVICES = 'RESUME_SUSPENDED_SERVICES',
  AVOID_EXTRA_COSTS = 'AVOID_EXTRA_COSTS',
  AVOID_SUSPENDED_SERVICES = 'AVOID_SUSPENDED_SERVICES',
}

export enum CollectionsTreatment {
  PAYMENT_PLAN = 'PAYMENT_PLAN',
  PROMISE_TO_PAY = 'PROMISE_TO_PAY',
}

export enum CustomerCategory {
  BUSINESS = 'BUSINESS',
  RESIDENTIAL = 'RESIDENTIAL',
}

export interface BillingAccount {
  billingAccountNumber: string;
  paymentDueDate?: Date;
  paymentStatus: PaymentStatus;
  currentPaymentMethod: PaymentMethod;
  lastPaymentMethod?: PaymentMethod;
  dispatchMethod: DispatchMethod;
  billingAddress: BillingAddress;
  email: string;
  mobilePhoneNumber?: string;
  collectionsTreatmentMessage?: CollectionsTreatmentMessage;
  collectionsTreatment?: CollectionsTreatment;
  isEligibleForManualPayment: boolean;
  customerCategory: CustomerCategory;
  defaultAccount: boolean;
  outstandingBalance: number;
}

export interface BillingAddress {
  street: string;
  floor: string;
  houseNumber: string;
  subHouseNumber: string;
  boxNumber: string;
  postalCode: string;
  municipality: string;
}

export function billingAddressToDisplay(billingAddress: BillingAddress): string {
  return Object.values(billingAddress)
    .filter((category) => category && category.trim() !== '')
    .join(', ');
}

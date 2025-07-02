import {
  BillingAccountInterface,
  BillingAddressInterface,
  CollectionsInfoInterface,
  ContactInfoInterface,
  DispatchMethodInterface,
  PaymentInfoInterface,
  TreatmentInterface,
} from '../interfaces/billing-accounts.interface';
import { FleetBillingConstants } from '../constants/fleet-billing.constant';
import { includes } from 'lodash-es';
import { DetailInterface } from '../interfaces/detail.interface';
import { AddressInterface } from '../interfaces/address.interface';
import { Builder } from '@telenet/ng-lib-shared';

export class BillingAccount implements BillingAccountInterface {
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

  hasDirectDebit(): boolean {
    return this.paymentInfo?.method === 'DIRECT_DEBIT';
  }

  hasOutstandingBalance(): boolean {
    return (
      typeof this.collectionsInfo !== 'undefined' &&
      typeof this.collectionsInfo.balance !== 'undefined' &&
      typeof this.collectionsInfo.balance.balanceType !== 'undefined' &&
      this.collectionsInfo.balance.balanceType !== 'REFUND' &&
      typeof this.collectionsInfo.balance.amount !== 'undefined' &&
      this.collectionsInfo.balance.amount !== '0'
    );
  }

  hasRefund(): boolean {
    return (
      typeof this.collectionsInfo !== 'undefined' &&
      typeof this.collectionsInfo.balance !== 'undefined' &&
      typeof this.collectionsInfo.balance.balanceType !== 'undefined' &&
      this.collectionsInfo.balance.balanceType === 'REFUND'
    );
  }

  getDisplayAddress(): AddressInterface {
    const displayAddress = Builder<AddressInterface>().build();
    if (this.billingAddress) {
      displayAddress.readOnlyAddress = this.billingAddress.street + ' ' + this.billingAddress.houseNumber;
      if (this.billingAddress.subHouseNumber) {
        displayAddress.readOnlyAddress = displayAddress.readOnlyAddress + '/' + this.billingAddress.subHouseNumber;
        displayAddress.houseNrSubHouseNr = displayAddress.houseNrSubHouseNr + '/' + this.billingAddress.subHouseNumber;
      }
      if (this.billingAddress.boxNumber) {
        displayAddress.readOnlyAddress = displayAddress.readOnlyAddress + '/' + this.billingAddress.boxNumber;
      }
      const isSpaceRequired = Boolean(this.billingAddress.postalCode && this.billingAddress.municipality);
      displayAddress.zipMunicipality =
        (this.billingAddress.postalCode ? this.billingAddress.postalCode : '') +
        (isSpaceRequired ? ' ' : '') +
        (this.billingAddress.municipality ? this.billingAddress.municipality : '');
      displayAddress.houseNrSubHouseNr = this.billingAddress.houseNumber;
    }
    return displayAddress;
  }

  getDisplayAmount(): string {
    let displayAmount = '';
    if (this.collectionsInfo && this.collectionsInfo.balance && this.collectionsInfo.balance.balanceType === 'REFUND') {
      displayAmount = '-' + this.collectionsInfo.balance.amount;
    } else if (this.collectionsInfo && this.collectionsInfo.balance) {
      displayAmount = this.collectionsInfo.balance.amount;
    }
    return displayAmount;
  }

  hasPaymentPlan(): boolean {
    return typeof this.collectionsInfo !== 'undefined' && Boolean(this.collectionsInfo.paymentPlan);
  }

  allowMigrationToDoccle(): boolean {
    return (this.dispatchMethod && this.dispatchMethod.current === 'DIGITAL') as boolean;
  }

  allowedToChangeDispatchMethod(): boolean {
    return (this.dispatchMethod && this.dispatchMethod.current !== 'DOCCLE') as boolean;
  }

  hasPaperCommunication(): boolean {
    return (this.dispatchMethod && this.dispatchMethod.current === 'PAPER') as boolean;
  }

  hasSmsCommunication(): boolean {
    return !!(
      this.dispatchMethod &&
      this.dispatchMethod.current === 'DIGITAL' &&
      includes(FleetBillingConstants.SMS_COMMUNICATION, this.dispatchMethod.communicationMethod)
    );
  }

  hasEmailCommunication(): boolean {
    return !!(
      this.dispatchMethod &&
      this.dispatchMethod.current === 'DIGITAL' &&
      includes(FleetBillingConstants.EMAIL_COMMUNICATION, this.dispatchMethod.communicationMethod)
    );
  }

  hasEmailAndSmsCommunication(): boolean {
    return !!(
      this.dispatchMethod &&
      this.dispatchMethod.current === 'DIGITAL' &&
      includes(FleetBillingConstants.EMAIL_SMS_COMMUNICATION, this.dispatchMethod.communicationMethod)
    );
  }

  hasDoccleCommunication(): boolean {
    return (this.dispatchMethod && this.dispatchMethod.current === 'DOCCLE') as boolean;
  }

  hasEtisCommunication(): boolean {
    return (this.dispatchMethod && this.dispatchMethod.current === 'ETIS') as boolean;
  }

  hasManualLastPaymentMethod(): boolean {
    return (this.paymentInfo && this.paymentInfo.lastpaymentMethod === 'MANUAL') as boolean;
  }

  hasRecentlyPaymentMethodChanged(): boolean {
    return (this.paymentInfo && this.paymentInfo.method !== this.paymentInfo.lastpaymentMethod) as boolean;
  }

  hasRecentlyPaymentMethodChangedManual(): boolean {
    return this.hasRecentlyPaymentMethodChanged() && !this.hasDirectDebit();
  }

  isEligibleToPay(): boolean {
    return ((this.hasManualLastPaymentMethod() && this.hasOutstandingBalance()) ||
      this.isEligibleForManualPayment) as boolean;
  }
}

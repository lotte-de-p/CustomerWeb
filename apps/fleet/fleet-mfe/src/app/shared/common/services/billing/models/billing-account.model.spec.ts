import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { BillingAccount } from './billing-account.model';
import { BillingAccountMapper } from '../mappers/billing-account.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from '@jest/globals';

import {
  BillingAddressInterface,
  CollectionsInfoInterface,
  DispatchMethodInterface,
  PaymentInfoInterface,
} from '../interfaces/billing-accounts.interface';

describe('BillingAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingAccountMapper],
      imports: [HttpClientTestingModule],
    });
  });

  describe('getDisplayAmount', () => {
    const billingAccountModel = new BillingAccount();

    it('should return empty string if collectionsInfo is undefined', function () {
      billingAccountModel.collectionsInfo = undefined;
      expect(billingAccountModel.getDisplayAmount()).toEqual('');
    });

    it('should return the amount in negative if the balance type is refund', function () {
      billingAccountModel.collectionsInfo = {
        balance: {
          amount: '10',
          balanceType: 'REFUND',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.getDisplayAmount()).toBe('-10');
    });

    it('should return the amount in positive if the balance type is not refund', function () {
      billingAccountModel.collectionsInfo = {
        balance: {
          amount: '10',
          balanceType: 'SOME_BALANCE_TYPE',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.getDisplayAmount()).toBe('10');
    });
  });

  describe('getDisplayAddress', () => {
    const billingAccountModel = new BillingAccount();

    it('should return an empty object if billingAddress is undefined', function () {
      billingAccountModel.billingAddress = undefined;
      expect(billingAccountModel.getDisplayAddress()).toEqual({});
    });

    it('should return display address', function () {
      billingAccountModel.billingAddress = {
        street: 'Some street',
        houseNumber: '1',
        subHouseNumber: 'A',
        boxNumber: '001',
        postalCode: '2800',
        municipality: 'Mechelen',
      } as BillingAddressInterface;
      expect(billingAccountModel.getDisplayAddress()).toEqual({
        readOnlyAddress: 'Some street 1/A/001',
        houseNrSubHouseNr: '1',
        zipMunicipality: '2800 Mechelen',
      });
    });

    it('should return display address without sub house number', function () {
      billingAccountModel.billingAddress = {
        street: 'Some street',
        houseNumber: '1',
      } as BillingAddressInterface;
      expect(billingAccountModel.getDisplayAddress()).toEqual({
        readOnlyAddress: 'Some street 1',
        zipMunicipality: '',
        houseNrSubHouseNr: '1',
      });
    });
  });

  describe('hasPaymentPlan', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if the paymentPlan is true', function () {
      billingAccountModel.collectionsInfo = { paymentPlan: true } as CollectionsInfoInterface;
      expect(billingAccountModel.hasPaymentPlan()).toBe(true);
    });

    it('should return false if the collectionsInfo is undefined', function () {
      billingAccountModel.collectionsInfo = undefined;
      expect(billingAccountModel.hasPaymentPlan()).toBe(false);
    });
  });

  describe('allowMigrationToDoccle', () => {
    const billingAccountModel = new BillingAccount();

    it('should return false if dispatchMethod is not DIGITAL (test)', function () {
      billingAccountModel.dispatchMethod = { current: 'test' } as DispatchMethodInterface;
      expect(billingAccountModel.allowMigrationToDoccle()).toBe(false);
    });

    it('should return true if dispatchMethod is DIGITAL', function () {
      billingAccountModel.dispatchMethod = { current: 'DIGITAL' } as DispatchMethodInterface;
      expect(billingAccountModel.allowMigrationToDoccle()).toBe(true);
    });
  });

  describe('allowedToChangeDispatchMethod', () => {
    const billingAccountModel = new BillingAccount();

    it('should return false if dispatchMethod is DOCCLE', function () {
      billingAccountModel.dispatchMethod = { current: 'DOCCLE' } as DispatchMethodInterface;
      expect(billingAccountModel.allowedToChangeDispatchMethod()).toBe(false);
    });

    it('should return true if dispatchMethod is not DOCCLE', function () {
      billingAccountModel.dispatchMethod = { current: 'DIGITAL' } as DispatchMethodInterface;
      expect(billingAccountModel.allowedToChangeDispatchMethod()).toBe(true);
    });
  });

  describe('hasPaperCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is PAPER', function () {
      billingAccountModel.dispatchMethod = { current: 'PAPER' } as DispatchMethodInterface;
      expect(billingAccountModel.hasPaperCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not PAPER', function () {
      billingAccountModel.dispatchMethod = { current: 'DIGITAL' } as DispatchMethodInterface;
      expect(billingAccountModel.hasPaperCommunication()).toBe(false);
    });
  });

  describe('hasSmsCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is DIGITAL and communicationMethod is SMS', function () {
      billingAccountModel.dispatchMethod = {
        current: 'DIGITAL',
        communicationMethod: 'SMS',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasSmsCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not DIGITAL', function () {
      billingAccountModel.dispatchMethod = {
        current: 'test',
        communicationMethod: 'SMS',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasSmsCommunication()).toBe(false);
    });
  });

  describe('hasEmailCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is DIGITAL and communicationMethod is Email', function () {
      billingAccountModel.dispatchMethod = {
        current: 'DIGITAL',
        communicationMethod: 'EMAIL',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasEmailCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not DIGITAL (test)', function () {
      billingAccountModel.dispatchMethod = {
        current: 'test',
        communicationMethod: 'EMAIL',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasEmailCommunication()).toBe(false);
    });
  });

  describe('hasEmailAndSmsCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is DIGITAL', function () {
      billingAccountModel.dispatchMethod = {
        current: 'DIGITAL',
        communicationMethod: 'SMS_EMAIL',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasEmailAndSmsCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not DIGITAL', function () {
      billingAccountModel.dispatchMethod = {
        current: 'test',
        communicationMethod: 'test',
      } as DispatchMethodInterface;
      expect(billingAccountModel.hasEmailAndSmsCommunication()).toBe(false);
    });
  });

  describe('hasEmailAndSmsCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is DOCCLE', function () {
      billingAccountModel.dispatchMethod = { current: 'DOCCLE' } as DispatchMethodInterface;
      expect(billingAccountModel.hasDoccleCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not DOCCLE', function () {
      billingAccountModel.dispatchMethod = { current: 'test' } as DispatchMethodInterface;
      expect(billingAccountModel.hasDoccleCommunication()).toBe(false);
    });
  });

  describe('hasEtisCommunication', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if dispatchMethod is ETIS', function () {
      billingAccountModel.dispatchMethod = { current: 'ETIS' } as DispatchMethodInterface;
      expect(billingAccountModel.hasEtisCommunication()).toBe(true);
    });

    it('should return false if dispatchMethod is not ETIS', function () {
      billingAccountModel.dispatchMethod = { current: 'test' } as DispatchMethodInterface;
      expect(billingAccountModel.hasEtisCommunication()).toBe(false);
    });
  });

  describe('hasManualLastPaymentMethod', () => {
    const billingAccountModel = new BillingAccount();

    it('should return true if hasManualLastPaymentMethod is Manual', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'MANUAL',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasManualLastPaymentMethod()).toBe(true);
    });

    it('should return false if hasManualLastPaymentMethod is Direct Debit', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'DIRECT_DEBIT',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasManualLastPaymentMethod()).toBe(false);
    });
  });

  describe('hasRecentlyPaymentMethodChanged', () => {
    const billingAccountModel = new BillingAccount();

    it('should return false if hasLastPaymentMethodManual is same as current payment method', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'MANUAL',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChanged()).toBe(false);
    });

    it('should return false if hasLastPaymentMethodManual is same as current payment method', function () {
      billingAccountModel.paymentInfo = {
        method: 'DIRECT_DEBIT',
        lastpaymentMethod: 'DIRECT_DEBIT',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChanged()).toBe(false);
    });

    it('should return true if hasLastPaymentMethodManual is not same as current payment method', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'DIRECT_DEBIT',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChanged()).toBe(true);
    });

    it('should return true if hasLastPaymentMethodManual is not same as current payment method', function () {
      billingAccountModel.paymentInfo = {
        method: 'DIRECT_DEBIT',
        lastpaymentMethod: 'MANUAL',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChanged()).toBe(true);
    });
  });

  describe('hasRecentlyPaymentMethodChangedManual', () => {
    const billingAccountModel = new BillingAccount();

    it('should return false if the payment method has recently changed to Direct Debit', function () {
      billingAccountModel.paymentInfo = {
        method: 'DIRECT_DEBIT',
        lastpaymentMethod: 'MANUAL',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChangedManual()).toBe(false);
    });

    it('should return true if the payment method has recently changed to Manual', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'DIRECT_DEBIT',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChangedManual()).toBe(true);
    });

    it('should return false if the payment method has not changed and the method is Manual', function () {
      billingAccountModel.paymentInfo = {
        method: 'MANUAL',
        lastpaymentMethod: 'MANUAL',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChangedManual()).toBe(false);
    });

    it('should return false if the payment method has not changed and the method is Direct Debit', function () {
      billingAccountModel.paymentInfo = {
        method: 'DIRECT_DEBIT',
        lastpaymentMethod: 'DIRECT_DEBIT',
      } as PaymentInfoInterface;
      expect(billingAccountModel.hasRecentlyPaymentMethodChangedManual()).toBe(false);
    });
  });

  describe('hasRefund', () => {
    const billingAccountModel = new BillingAccount();
    it('should have a refund as collection type', function () {
      billingAccountModel.collectionsInfo = {
        balance: {
          outstandingDebt: '',
          type: 'EUR',
          amount: '105,00',
          balanceType: 'REFUND',
        },
        ogmCode: '+++300/0015/34524+++',
        dueDate: '2020-01-14T23:00:00Z',
        paymentPlan: false,
        status: false,
      };
      expect(billingAccountModel.hasRefund()).toBe(true);
    });

    it('should not have a refund as collection type', function () {
      billingAccountModel.collectionsInfo = {
        balance: {
          outstandingDebt: '',
          type: 'EUR',
          amount: '105,00',
          balanceType: 'PAYMENT',
        },
        ogmCode: '+++300/0015/34524+++',
        dueDate: '2020-01-14T23:00:00Z',
        paymentPlan: false,
        status: false,
      };
      expect(billingAccountModel.hasRefund()).toBe(false);
    });
  });

  describe('isEligibleToPay', () => {
    const billingAccountModel = new BillingAccount();
    it('should show pay button if isEligibleForManualPayment flag is true', () => {
      billingAccountModel.isEligibleForManualPayment = true;
      expect(billingAccountModel.isEligibleToPay()).toBe(true);
    });
    it('should show pay button if last paymentmethod is maual and there is outstanding balance flag is true', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'MANUAL' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {
        balance: {
          type: 'EUR',
          amount: '433,87',
          balanceType: 'PAYMENT',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(true);
    });
    it('should hide pay button if last paymentmethod is maual and there is outstanding balance with refund', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'MANUAL' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {
        balance: {
          type: 'EUR',
          amount: '433,87',
          balanceType: 'REFUND',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(false);
    });
    it('should hide pay button if last paymentmethod is maual and there is no outstanding balance', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'MANUAL' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {} as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(false);
    });
    it('should hide pay button if last paymentmethod is Direct_Debit and there is no outstanding balance', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'DIRECT_DEBIT' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {} as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(false);
    });
    it('should hide pay button if last paymentmethod is DIRECT_DEBIT and there is outstanding balance with no refund', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'DIRECT_DEBIT' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {
        balance: {
          type: 'EUR',
          amount: '433,87',
          balanceType: 'PAYMENT',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(false);
    });
    it('should hide pay button if last paymentmethod is DIRECT_DEBIT and there is outstanding balance with refund', () => {
      billingAccountModel.isEligibleForManualPayment = false;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'DIRECT_DEBIT' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {
        balance: {
          type: 'EUR',
          amount: '433,87',
          balanceType: 'REFUND',
        },
      } as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(false);
    });
    it('should hide pay button if last paymentmethod is DIRECT_DEBIT and isEligibleForManualPayment flag is true', () => {
      billingAccountModel.isEligibleForManualPayment = true;
      billingAccountModel.paymentInfo = { lastpaymentMethod: 'DIRECT_DEBIT' } as PaymentInfoInterface;
      billingAccountModel.collectionsInfo = {} as CollectionsInfoInterface;
      expect(billingAccountModel.isEligibleToPay()).toBe(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

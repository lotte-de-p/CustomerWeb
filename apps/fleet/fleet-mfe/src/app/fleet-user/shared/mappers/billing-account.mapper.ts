import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { BillingAccountInterface, BillingAddressInterface } from '../interfaces/billing/billing-accounts.interface';
import { BillingAccount } from '../models/billing-account.model';
import { BillingConstants } from '../constants/billing.constant';
import {
  RawBillingAccountInterface,
  RawBillingAddressInterface,
} from '../interfaces/raw/raw-billing-accounts.interface';

@Injectable({
  providedIn: 'root',
})
export class BillingAccountMapper implements MapperInterface<RawBillingAccountInterface[], BillingAccountInterface[]> {
  toModel(rawBillingAccounts: RawBillingAccountInterface[]): BillingAccountInterface[] {
    return this.createBillingAccounts(rawBillingAccounts);
  }

  private createBillingAccounts(rawBillingAccounts: RawBillingAccountInterface[]): BillingAccountInterface[] {
    const billingAccounts = [] as BillingAccountInterface[];
    rawBillingAccounts.forEach((rawAccount) => billingAccounts.push(this.createBillingAccount(rawAccount)));
    return billingAccounts;
  }

  private createBillingAccount(rawBillingAccount: RawBillingAccountInterface): BillingAccountInterface {
    const billingAccount = new BillingAccount();
    billingAccount.id = rawBillingAccount.id;
    billingAccount.accountNumber = rawBillingAccount.accountNumber;
    billingAccount.billingAddress = this.getBillingAddress(rawBillingAccount.billingAddress);
    billingAccount.collectionsInfo = rawBillingAccount.collectionsInfo;
    billingAccount.contactInfo = rawBillingAccount.contactInfo;
    billingAccount.customerCategoryType = rawBillingAccount.customerCategoryType;
    billingAccount.defaultAccount = rawBillingAccount.defaultAccount;
    billingAccount.dispatchMethod = this.updateDispatchMethod(rawBillingAccount.dispatchMethod);
    billingAccount.doccleCode = rawBillingAccount.doccleCode;
    billingAccount.email = rawBillingAccount.email;
    billingAccount.mobile = rawBillingAccount.mobile;
    billingAccount.overConsumptionThreshold = rawBillingAccount.overConsumptionThreshold;
    billingAccount.paymentInfo = rawBillingAccount.paymentInfo;
    billingAccount.status = rawBillingAccount.status;
    billingAccount.treatments = rawBillingAccount.treatments;
    billingAccount.isEligibleForManualPayment = rawBillingAccount.isEligibleForManualPayment
      ? rawBillingAccount.isEligibleForManualPayment
      : false;
    billingAccount.hasFailedDDPayment = rawBillingAccount.hasFailedDDPayment
      ? rawBillingAccount.hasFailedDDPayment
      : false;
    return billingAccount;
  }

  private getBillingAddress(rawBillingAddress: RawBillingAddressInterface): BillingAddressInterface {
    return {
      addressId: rawBillingAddress.addressId,
      boxNumber: rawBillingAddress.boxNr,
      country: rawBillingAddress.country,
      floor: rawBillingAddress.floor,
      houseNumber: rawBillingAddress.houseNr,
      municipality: rawBillingAddress.municipality,
      postalCode: rawBillingAddress.postalCode,
      street: rawBillingAddress.street,
      subHouseNumber: rawBillingAddress.subHouseNr,
    } as BillingAddressInterface;
  }

  private updateDispatchMethod(dispatchMethod) {
    if (BillingConstants.DISPATCH_METHOD_PAPER.includes(dispatchMethod.current)) {
      dispatchMethod.current = 'PAPER';
    }
    return dispatchMethod;
  }
}

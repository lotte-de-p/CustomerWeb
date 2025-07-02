import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  BillingPaymentMethod,
  ImageSrcInterceptorDirective,
  MyBaseDashboardBillingAccount,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeData,
  MyBaseDashboardDatalayerAttributeGroup,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
} from '@mybase-dashboard/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

export interface BillingCardViewModel {
  type:
    | 'NO_OPEN_AMOUNT'
    | 'DUE_SINGLE'
    | 'DUE_MULTIPLE'
    | 'OVERDUE_SINGLE_PAYMENT_MANUAL'
    | 'OVERDUE_SINGLE_PAYMENT_DIRECT_DEBIT'
    | 'OVERDUE_MULTIPLE'
    | 'REFUND_SINGLE'
    | 'REFUND_MULTIPLE';
  amount: number;
  text: string;
  subText: string;
  dueInDays: number;
  showButton: boolean;
  paymentMethod: BillingPaymentMethod;
  accountNumber: string;
}

@Component({
  selector: 'tg-mybase-dashboard-billing-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './mybase-dashboard-billing-card.component.html',
  styleUrls: ['./mybase-dashboard-billing-card.component.scss'],
})
export class MyBaseDashboardBillingCardComponent {
  @Input()
  set billingAccounts(billingAccounts: MyBaseDashboardBillingAccount[]) {
    this.billingCardViewModel = this.setUpBillingCardViewModel(billingAccounts);
  }

  @Input() billingUrl!: string;
  @Input() payNowUrl!: string;
  @Input() viewBillsUrl!: string;
  @Input() viewDetailsUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  billingCardViewModel!: Partial<BillingCardViewModel>;
  attributeData!: string;

  // Key to correspond with L3's billing account selector's session storage key (BillingAccountSelectorComponent)
  SESSION_STORAGE_KEY = 'billing-account-selector';

  private readonly urlService: UrlService = inject(UrlService);

  setUpBillingCardViewModel(billingAccounts: MyBaseDashboardBillingAccount[]): Partial<BillingCardViewModel> {
    if (billingAccounts.length === 1) {
      const billAcc = billingAccounts[0];
      return this.setUpBillingCardViewModelForOneBillingAccount(billAcc);
    } else if (billingAccounts.length > 1) {
      return this.setUpBillingCardViewModelForMultipleBillingAccounts(billingAccounts);
    }

    console.warn("There are no billing accounts (which should not happen), so returning 'NO_OPEN_AMOUNT'");
    return { type: 'NO_OPEN_AMOUNT' };
  }

  private setUpBillingCardViewModelForOneBillingAccount(
    billAcc: MyBaseDashboardBillingAccount
  ): Partial<BillingCardViewModel> {
    // Happy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=627704460

    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201

    // AC #2 (Happy flow)
    if (billAcc.openBills.length === 0 && billAcc.refunds.length === 0) {
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
      return { type: 'NO_OPEN_AMOUNT' };
    }

    // AC #5 (Unhappy flow)
    if (billAcc.refunds.length) {
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.REFUND_ISSUED);
      if (billAcc.refunds.length === 1) {
        return { type: 'REFUND_SINGLE', amount: billAcc.refunds[0].amount * -1 };
      } else {
        return { type: 'REFUND_MULTIPLE' };
      }
    }

    const dueBills = billAcc.openBills.filter((bill) => bill.dueInDays > 0);
    const overDueBills = billAcc.openBills.filter((bill) => bill.dueInDays <= 0);

    // AC #4 (Happy flow) and AC #4 (Unhappy flow)
    if (overDueBills.length === 1) {
      if (overDueBills[0].paymentMethod === BillingPaymentMethod.MANUAL) {
        this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
        return {
          type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
          amount: overDueBills[0].openAmount,
          dueInDays: Math.abs(overDueBills[0].dueInDays),
          showButton: overDueBills[0].showPayNowButton,
          paymentMethod: BillingPaymentMethod.MANUAL,
        };
      } else {
        this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
        return {
          type: 'OVERDUE_SINGLE_PAYMENT_DIRECT_DEBIT',
          amount: overDueBills[0].openAmount,
          dueInDays: Math.abs(overDueBills[0].dueInDays),
          showButton: overDueBills[0].showPayNowButton,
          paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
        };
      }
    } else if (overDueBills.length > 1) {
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return { type: 'OVERDUE_MULTIPLE' };
    }

    // AC #3 (Happy flow)
    if (dueBills.length) {
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.OUTSTANDING_BILL);
    }
    if (dueBills.length === 1 && dueBills[0].paymentMethod === BillingPaymentMethod.MANUAL) {
      return {
        type: 'DUE_SINGLE',
        amount: dueBills[0].openAmount,
        dueInDays: dueBills[0].dueInDays,
        showButton: dueBills[0].showPayNowButton,
      };
    } else if (dueBills.length > 1) {
      return { type: 'DUE_MULTIPLE' };
    }

    console.warn("No other cases match when one billing account, so returning 'NO_OPEN_AMOUNT'");
    return { type: 'NO_OPEN_AMOUNT' };
  }

  private setUpBillingCardViewModelForMultipleBillingAccounts(
    billAccounts: MyBaseDashboardBillingAccount[]
  ): Partial<BillingCardViewModel> {
    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201

    const allOpenBills = [];
    for (const billAcc of billAccounts) {
      allOpenBills.push(...billAcc.openBills);
    }

    const dueExists = allOpenBills.some((bill) => bill.dueInDays > 0);
    const overDueBills = allOpenBills.filter((bill) => bill.dueInDays <= 0);
    const atLeastOneManualPayment = overDueBills.some((bill) => bill.paymentMethod === BillingPaymentMethod.MANUAL);

    // AC #8 (Unhappy flow)
    if (overDueBills.length && atLeastOneManualPayment) {
      const matchingBillingAccount = billAccounts.find((billAcc) =>
        billAcc.openBills.some((bill) => bill.dueInDays <= 0 && bill.paymentMethod === BillingPaymentMethod.MANUAL)
      )!;
      const accountNumber = matchingBillingAccount.accountNumber;

      const { amount, dueInDays } = matchingBillingAccount.openBills.reduce(
        (obj, bill) => {
          return { amount: obj.amount + bill.openAmount, dueInDays: Math.min(obj.dueInDays, bill.dueInDays) };
        },
        { amount: 0, dueInDays: 0 }
      );

      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return {
        type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
        amount,
        dueInDays: Math.abs(dueInDays),
        showButton: overDueBills[0].showPayNowButton,
        paymentMethod: BillingPaymentMethod.MANUAL,
        accountNumber,
      };
    }

    // AC #3 (Unhappy flow)
    if (overDueBills.length) {
      const matchingBillingAccount = billAccounts.find((billAcc) =>
        billAcc.openBills.some((bill) => bill.dueInDays <= 0)
      );
      const accountNumber = matchingBillingAccount?.accountNumber;
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.PAYMENT_OVERDUE);
      return { type: 'OVERDUE_MULTIPLE', accountNumber };
    }

    // AC #2 (Unhappy flow)
    if (dueExists) {
      const matchingBillingAccount = billAccounts.find((billAcc) =>
        billAcc.openBills.some((bill) => bill.dueInDays > 0)
      );
      const accountNumber = matchingBillingAccount?.accountNumber;
      this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.OUTSTANDING_BILL);
      return { type: 'DUE_MULTIPLE', accountNumber };
    }

    console.warn("No other cases match when multiple billing accounts, so returning 'NO_OPEN_AMOUNT'");
    this.sendAnalyticsData(false, MyBaseDashboardDatalayerAttributeData.ALL_GOOD);
    return { type: 'NO_OPEN_AMOUNT' };
  }

  goToBillingDetail() {
    this.sendAnalyticsData(true, this.attributeData, MyBaseDashboardDatalayerAttributeData.ALL_GOOD, this.billingUrl);
    this.urlService.redirectTo(this.billingUrl);
  }

  goToPayNow(preSelectedAccountNumber?: string) {
    if (preSelectedAccountNumber) {
      window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, preSelectedAccountNumber);
    }

    this.sendAnalyticsData(
      true,
      this.attributeData,
      MyBaseDashboardDatalayerAttributeGroup.PAY_NOW_BUTTON,
      this.payNowUrl
    );
    this.urlService.redirectTo(this.payNowUrl);
  }

  goToViewBills(preSelectedAccountNumber?: string) {
    if (preSelectedAccountNumber) {
      window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, preSelectedAccountNumber);
    }

    this.sendAnalyticsData(
      true,
      this.attributeData,
      MyBaseDashboardDatalayerAttributeGroup.VIEW_BILLS_BUTTON,
      this.viewBillsUrl
    );
    this.urlService.redirectTo(this.viewBillsUrl);
  }

  goToViewDetails() {
    this.sendAnalyticsData(
      true,
      this.attributeData,
      MyBaseDashboardDatalayerAttributeGroup.VIEW_DETAILS_LINK,
      this.viewDetailsUrl
    );
    this.urlService.redirectTo(this.viewDetailsUrl);
  }

  sendAnalyticsData(isClick: boolean, attributeData: string, attributeGroup?: string, destinationUrl?: string) {
    if (!isClick) {
      this.attributeData = attributeData;
    }
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: isClick
        ? MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED
        : MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? MyBaseDashboardDatalayerEventType.CLICK : MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeName: MyBaseDashboardDatalayerAttributeName.BILLING,
      attributeData: this.attributeData || attributeData,
      attributeGroup: attributeGroup,
      destinationUrl: destinationUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

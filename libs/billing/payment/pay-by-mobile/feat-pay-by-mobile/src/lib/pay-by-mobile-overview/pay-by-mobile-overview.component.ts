import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from '@telenet/ng-lib-message';
import { PayByMobileFacade, Subscription } from '@billing/pay-by-mobile/data-access';
import { TranslateModule } from '@ngx-translate/core';
import {
  PayByMobileMsisdnBlockedWarningComponent,
  PayByMobileNoContentComponent,
  PayByMobileSkeletonComponent,
  PayByMobileSubscriptionComponent,
  PayByMobileTransactionComponent,
} from '@billing/pay-by-mobile/ui';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { MobileLineSelectorComponent } from '@billing/shared/feat-mobile-line-selector';
import { MobileLine } from '@billing/shared/data-access';
import { WinkButton } from '@telenet/wink-ng';

@Component({
  selector: 'tg-billing-pay-by-mobile-overview',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    TranslateModule,
    LoginModule,
    PayByMobileTransactionComponent,
    PayByMobileSubscriptionComponent,
    PayByMobileSubscriptionComponent,
    PayByMobileSkeletonComponent,
    PayByMobileNoContentComponent,
    PayByMobileMsisdnBlockedWarningComponent,
    MobileLineSelectorComponent,
    WinkButton,
  ],
  templateUrl: './pay-by-mobile-overview.component.html',
  styleUrl: './pay-by-mobile-overview.component.scss',
})
export class PayByMobileOverviewComponent {
  private readonly payByMobileFacade = inject(PayByMobileFacade);

  subscriptions = this.payByMobileFacade.subscriptions;
  moreTransactionsAvailable = this.payByMobileFacade.moreTransactionsAvailable;
  lessTransactionsAvailable = this.payByMobileFacade.lessTransactionsAvailable;
  transactions = this.payByMobileFacade.transactions;
  transactionsLoaded = this.payByMobileFacade.transactionsLoaded;
  subscriptionsLoaded = this.payByMobileFacade.subscriptionsLoaded;
  msisdnBarred = this.payByMobileFacade.msisdnBarred;

  messageGroupName = 'pay-by-mobile';

  scopes = ['paybymobile'];
  selectedMobileLine: MobileLine | null = null;

  onSelectMobileLine(mobileLine: MobileLine | null): void {
    this.selectedMobileLine = mobileLine;
    if (mobileLine && mobileLine.status !== 'ACTIVATION_IN_PROGRESS') {
      this.payByMobileFacade.selectMobileLine(mobileLine);
    } else {
      this.payByMobileFacade.resetPaymentStatus();
    }
  }

  handleConfirmCancellation(subscription: Subscription) {
    if (this.selectedMobileLine?.msisdn) {
      this.payByMobileFacade.cancelSubscription(
        this.selectedMobileLine,
        subscription.companyId,
        subscription.serviceName
      );
    }
  }

  resetPaymentStatus(): void {
    this.payByMobileFacade.resetPaymentStatus();
  }

  loadInitialTransactions() {
    if (this.selectedMobileLine) {
      this.payByMobileFacade.loadInitialTransactions(this.selectedMobileLine);
      window.scrollTo(0, 0);
    }
  }

  loadMoreTransactions() {
    if (this.selectedMobileLine) {
      this.payByMobileFacade.loadMoreTransactions(this.selectedMobileLine);
    }
  }
}

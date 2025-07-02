import { Component, Input, inject } from '@angular/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerFacade,
  MyBaseDashboardFacade,
  MyBaseDashoardNgrxModule,
} from '@mybase-dashboard/data-access';
import { AsyncPipe, NgClass } from '@angular/common';
import { MyBaseDashboardInternetUsageCardComponent } from './mybase-dashboard-internet-usage-card/mybase-dashboard-internet-usage-card.component';
import { MyBaseDashboardBillingCardComponent } from './mybase-dashboard-billing-card/mybase-dashboard-billing-card.component';
import { MyBaseDashboardManageProductsComponent } from './mybase-dashboard-manage-products/mybase-dashboard-manage-products.component';
import {
  MyBaseDashboardErrorComponent,
  MyBaseServiceMomentsComponent,
  MyBaseDashboardHomeNetworkComponent,
} from '@mybase-dashboard/ui';
import { MyBaseDashboardSupportAssistanceComponent } from './mybase-dashboard-support-assistance/mybase-dashboard-support-assistance.component';
import { MyBaseDashboardMobileUsageCardComponent } from './mybase-dashboard-mobile-usage-card/mybase-dashboard-mobile-usage-card.component';
import { MybaseDashboardOnboardingUsageCardComponent } from './mybase-dashboard-onboarding-usage-card/mybase-dashboard-onboarding-usage-card.component';

@Component({
  standalone: true,
  imports: [
    LoginModule,
    MyBaseDashoardNgrxModule,
    MyBaseDashboardBillingCardComponent,
    AsyncPipe,
    NgClass,
    MyBaseDashboardInternetUsageCardComponent,
    MyBaseDashboardMobileUsageCardComponent,
    MyBaseDashboardManageProductsComponent,
    MyBaseDashboardSupportAssistanceComponent,
    MyBaseDashboardErrorComponent,
    MyBaseDashboardHomeNetworkComponent,
    MyBaseServiceMomentsComponent,
    MybaseDashboardOnboardingUsageCardComponent,
  ],
  selector: 'tg-mybase-dashboard',
  templateUrl: './mybase-dashboard.component.html',
  styleUrls: ['./mybase-dashboard.component.scss'],
})
export class MyBaseDashboardComponent {
  @Input() billingUrl!: string;
  @Input() payNowUrl!: string;
  @Input() viewBillsUrl!: string;
  @Input() viewDetailsUrl!: string;
  @Input() manageProductsMobileLink!: string;
  @Input() manageProductsInternetLink!: string;
  @Input() manageProductsDTVLink!: string;
  @Input() mobileUsagePageUrl!: string;
  @Input() internetUsagePageUrl!: string;
  @Input() watchTvUrl!: string;
  @Input() watchTvIosUrl!: string;
  @Input() watchTvAndroidUrl!: string;
  @Input() bestTariffUrl!: string;
  @Input() easySwitchUrl!: string;
  @Input() supportUrl!: string;
  @Input() homeNetworkUrl!: string;
  @Input() wifiPassportUrl!: string;
  @Input() simActivationUrl!: string;
  @Input() eSimActivationUrl!: string;
  @Input() appointmentUrl!: string;
  scopes = ['customeraccount']; // TBD

  private readonly facade: MyBaseDashboardFacade = inject(MyBaseDashboardFacade);
  private readonly datalayerFacade: MyBaseDashboardDatalayerFacade = inject(MyBaseDashboardDatalayerFacade);
  myBaseDashboardBillingAccounts$ = this.facade.myBaseDashboardBillingAccounts$;
  myBaseDashboardShowBilling$ = this.facade.myBaseDashboardShowBilling$;
  products$ = this.facade.products$;
  supportAssistance$ = this.facade.supportAssistance$;
  myBaseDashboardLoading$ = this.facade.myBaseDashboardLoading$;
  myBaseDashboardError$ = this.facade.myBaseDashboardError$;
  myBaseDashboardShowMobileUsage$ = this.facade.myBaseDashboardShowMobileUsage$;
  myBaseDashboardShowInternetUsage$ = this.facade.myBaseDashboardShowInternetUsage$;
  myBaseDashboardMobileUsage$ = this.facade.myBaseDashboardMobileUsage$;
  myBaseDashboardInternetUsage$ = this.facade.myBaseDashboardInternetUsage$;
  myBaseDashboardShowHomeNetwork$ = this.facade.myBaseDashboardShowHomeNetwork$;
  myBaseDashboardBillingPending$ = this.facade.myBaseDashboardBillingPending$;
  myBaseDashboardMobileUsagePending$ = this.facade.myBaseDashboardMobileUsagePending$;
  myBaseDashboardInternetUsagePending$ = this.facade.myBaseDashboardInternetUsagePending$;
  myBaseDashboardHomeNetworkPending$ = this.facade.myBaseDashboardHomeNetworkPending$;

  myBaseServiceMoments$ = this.facade.myBaseServiceMoments$;

  initAfterLoggedIn() {
    this.facade.loadMyBaseDashboard();
    this.datalayerFacade.initDataLayer();
  }

  sendAnalyticsData(event: MyBaseDashboardDatalayer) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
}

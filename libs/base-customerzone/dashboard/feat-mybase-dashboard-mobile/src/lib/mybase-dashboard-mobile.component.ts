import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  MobileLine,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerFacade,
  MyBaseDashboardFacade,
  MyBaseDashoardNgrxModule,
  NavigationCardType,
  ServiceType,
} from '@mybase-dashboard/data-access';
import {
  LineSelectorComponent,
  MyBaseDashboardErrorComponent,
  MyBaseNavigationCardsComponent,
  MyBaseServicesCardsComponent,
} from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { Observable, map } from 'rxjs';
import { MyBaseDashboardMobileUsageBaseZeroComponent } from './mybase-dashboard-mobile-usage-baseZero/mybase-dashboard-mobile-usage-baseZero.component';
import { MyBaseDashboardMobileUsageBasedOnYouComponent } from './mybase-dashboard-mobile-usage-basedOnYou/mybase-dashboard-mobile-usage-basedOnYou.component';
import { MyBaseDashboardMobileUsagePostpaidComponent } from './mybase-dashboard-mobile-usage-postpaid/mybase-dashboard-mobile-usage-postpaid.component';
import { MyBaseDashboardMobileUsagePrepaidComponent } from './mybase-dashboard-mobile-usage-prepaid/mybase-dashboard-mobile-usage-prepaid.component';
import { MyBaseDashboardMobileUsageUnlimitedComponent } from './mybase-dashboard-mobile-usage-unlimited/mybase-dashboard-mobile-usage-unlimited.component';

@Component({
  selector: 'tg-mybase-dashboard-mobile',
  standalone: true,
  imports: [
    MyBaseDashoardNgrxModule,
    CommonModule,
    LoginModule,
    MyBaseNavigationCardsComponent,
    LineSelectorComponent,
    MyBaseDashboardErrorComponent,
    MyBaseServicesCardsComponent,
    MyBaseDashboardMobileUsagePostpaidComponent,
    MyBaseDashboardMobileUsagePrepaidComponent,
    MyBaseDashboardMobileUsageBaseZeroComponent,
    MyBaseDashboardMobileUsageBasedOnYouComponent,
    MyBaseDashboardMobileUsageUnlimitedComponent,
    TranslateModule,
  ],
  templateUrl: './mybase-dashboard-mobile.component.html',
  styleUrl: './mybase-dashboard-mobile.component.scss',
})
export class MyBaseDashboardMobileComponent {
  @Input() mobileUsageUrl!: string;
  @Input() mobileUsageNotificationUrl!: string;
  @Input() voicemailUrl!: string;
  @Input() simManagementUrl!: string;
  @Input() productOverviewUrl!: string;
  @Input() payByMobileUrl!: string;
  @Input() buyHardwareDiscountUrl!: string;
  @Input() topupUrl!: string;
  @Input() topupHistoryUrl!: string;
  @Input() mobileUsageDetailsUrl!: string;
  @Input() mobileUsageLimitsUrl!: string;
  @Input() barringsUrl!: string;

  scopes = ['customeraccount']; // TBD
  private readonly facade: MyBaseDashboardFacade = inject(MyBaseDashboardFacade);
  private readonly datalayerFacade: MyBaseDashboardDatalayerFacade = inject(MyBaseDashboardDatalayerFacade);

  myBaseDashboardMobileUsage$ = this.facade.myBaseDashboardMobileMobileUsage$;
  myBaseDashboardMobileNavigationCards$ = this.facade.myBaseDashboardMobileNavigationCards$.pipe(
    map((cards) => {
      const navCards = cards as NavigationCardType[];
      return navCards
        .filter((card) => this.navigationCardTypes.includes(card))
        .sort((a, b) => this.navigationCardTypes.indexOf(a) - this.navigationCardTypes.indexOf(b));
    })
  ) as Observable<NavigationCardType[]>;
  myBaseDashboardMobileServices$ = this.facade.myBaseDashboardMobileServices$.pipe(
    map((cards) => {
      const serviceCards = cards as ServiceType[];
      return serviceCards
        .filter((card) => this.serviceTypes.includes(card))
        .sort((a, b) => this.serviceTypes.indexOf(a) - this.serviceTypes.indexOf(b));
    })
  ) as Observable<ServiceType[]>;
  controlUsageNavCards$ = this.facade.myBaseDashboardMobileNavigationCards$.pipe(
    map((cards) => {
      const navCards = cards as NavigationCardType[];
      return navCards
        .filter((card) => this.controlUsageNavCards.includes(card))
        .sort((a, b) => this.controlUsageNavCards.indexOf(a) - this.controlUsageNavCards.indexOf(b));
    })
  ) as Observable<NavigationCardType[]>;
  myBaseDashboardMobileError$ = this.facade.myBaseDashboardMobileError$;
  mobileLines$ = this.facade.mobileLines$;
  myBaseDashboardMobileLoading$ = this.facade.myBaseDashboardMobileLoading$;

  topLevelNavigationCards$!: Observable<NavigationCardType[]>;
  bottomLevelNavigationCards$!: Observable<NavigationCardType[]>;

  // Sorted array, determines the order of the cards
  private readonly navigationCardTypes = [
    NavigationCardType.USAGE_DETAILS,
    NavigationCardType.TOPUP,
    NavigationCardType.TOPUP_HISTORY,
    NavigationCardType.VOICEMAIL,
    NavigationCardType.SIM_MANAGEMENT,
    NavigationCardType.PRODUCT_OVERVIEW,
  ];

  // Sorted array, determines the order of the cards
  private readonly serviceTypes = [ServiceType.PAYBYMOBILE, ServiceType.BUY_HARDWARE_DISCOUNT];

  // Sorted array, determines the order of the cards
  private readonly controlUsageNavCards = [
    NavigationCardType.MOBILE_USAGE_NOTIFICATIONS,
    NavigationCardType.USAGE_LIMITS,
    NavigationCardType.BARRINGS,
  ];

  initAfterLoggedIn() {
    this.facade.loadMobileLines();
    this.datalayerFacade.initDataLayer();
    this.seggregateCards();
  }

  selectMsisdn(msisdn: MobileLine) {
    this.facade.setMobileMsisdn(msisdn);
  }

  seggregateCards(): void {
    this.topLevelNavigationCards$ = this.myBaseDashboardMobileNavigationCards$.pipe(
      map((navigationCards) => {
        return navigationCards.slice(0, 4);
      })
    );

    this.bottomLevelNavigationCards$ = this.myBaseDashboardMobileNavigationCards$.pipe(
      map((navigationCards) => {
        return navigationCards.slice(4);
      })
    );
  }

  addAnalyticsEvent(event: MyBaseDashboardDatalayer) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
}

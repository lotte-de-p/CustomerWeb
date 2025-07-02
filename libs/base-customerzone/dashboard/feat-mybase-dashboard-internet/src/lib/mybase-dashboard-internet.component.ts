import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  InternetLine,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerFacade,
  MyBaseDashboardFacade,
  MyBaseDashoardNgrxModule,
  NavigationCardType,
  ServiceType,
} from '@mybase-dashboard/data-access';
import {
  AddressSelectorComponent,
  MyBaseDashboardErrorComponent,
  MyBaseDashboardHomeNetworkComponent,
  MyBaseNavigationCardsComponent,
  MyBaseServicesCardsComponent,
  MyBaseSimpleCardComponent,
} from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { Observable, map } from 'rxjs';
import { MyBaseDashboardInternetUsageLimitedComponent } from './mybase-dashboard-internet-usage-limited/mybase-dashboard-internet-usage-limited.component';
import { MyBaseDashboardInternetUsageUnlimitedComponent } from './mybase-dashboard-internet-usage-unlimited/mybase-dashboard-internet-usage-unlimited.component';

@Component({
  selector: 'tg-mybase-dashboard-internet',
  standalone: true,
  imports: [
    MyBaseDashoardNgrxModule,
    MyBaseDashboardErrorComponent,
    CommonModule,
    MyBaseDashboardInternetUsageLimitedComponent,
    MyBaseDashboardInternetUsageUnlimitedComponent,
    MyBaseServicesCardsComponent,
    MyBaseDashboardHomeNetworkComponent,
    MyBaseNavigationCardsComponent,
    MyBaseSimpleCardComponent,
    AddressSelectorComponent,
    LoginModule,
    TranslateModule,
  ],
  templateUrl: './mybase-dashboard-internet.component.html',
  styleUrl: './mybase-dashboard-internet.component.scss',
})
export class MyBaseDashboardInternetComponent {
  @Input() internetUsageUrl!: string;
  @Input() easySwitchUrl!: string;
  @Input() bestTariffUrl!: string;
  @Input() returnDeviceUrl!: string;
  @Input() homeNetworkUrl!: string;
  @Input() wifiPassportUrl!: string;
  @Input() internetUsageNotificationUrl!: string;
  @Input() productOverviewUrl!: string;
  @Input() speedTestUrl!: string;
  @Input() myDeviceUrl!: string;
  @Input() devicesUsingNetworkUrl!: string;

  scopes = ['customeraccount']; // TBD
  private readonly facade: MyBaseDashboardFacade = inject(MyBaseDashboardFacade);
  private readonly datalayerFacade: MyBaseDashboardDatalayerFacade = inject(MyBaseDashboardDatalayerFacade);

  internetLines$ = this.facade.internetLines$;
  myBaseDashboardInternetInternetUsage$ = this.facade.myBaseDashboardInternetInternetUsage$;
  myBaseDashboardInternetGeneralCards$ = this.facade.myBaseDashboardInternetGeneralCards$.pipe(
    map((cards) => {
      const navCards = cards as NavigationCardType[];
      return navCards.filter((card) => this.navigationCardTypes.includes(card));
    })
  ) as Observable<NavigationCardType[]>;
  myBaseDashboardInternetServices$ = this.facade.myBaseDashboardInternetServices$.pipe(
    map((cards) => {
      const serviceCards = cards as ServiceType[];
      return serviceCards.filter((card) => this.serviceTypes.includes(card));
    })
  ) as Observable<ServiceType[]>;
  myBaseDashboardInternetError$ = this.facade.myBaseDashboardInternetError$;
  myBaseDashboardInternetLoading$ = this.facade.myBaseDashboardInternetLoading$;
  myBaseDashboardInternetShowHomeNetwork$ = this.facade.myBaseDashboardInternetShowHomeNetwork$;

  topLevelNavigationCards$!: Observable<NavigationCardType[]>;
  bottomLevelNavigationCards$!: Observable<NavigationCardType[]>;

  // Sorted array, determines the order of the cards
  private readonly navigationCardTypes = [
    NavigationCardType.INTERNET_USAGE_NOTIFICATIONS,
    NavigationCardType.SPEEDTEST,
    NavigationCardType.MANAGE_YOUR_PRODUCT,
    NavigationCardType.MY_DEVICE,
    NavigationCardType.DEVICES_USING_YOUR_NETWORK,
  ];

  private readonly serviceTypes = [ServiceType.BEST_TARIFF, ServiceType.EASY_SWITCH, ServiceType.RETURN_DEVICE];

  initAfterLoggedIn() {
    this.facade.loadInternetLines();
    this.seggregateCards();
  }

  selectInternetAddress(internetLine: InternetLine) {
    this.facade.setInterLine(internetLine);
  }

  seggregateCards(): void {
    this.topLevelNavigationCards$ = this.myBaseDashboardInternetGeneralCards$.pipe(
      map((navigationCards) => {
        return navigationCards.slice(0, 2);
      })
    );

    this.bottomLevelNavigationCards$ = this.myBaseDashboardInternetGeneralCards$.pipe(
      map((navigationCards) => {
        return navigationCards.slice(2);
      })
    );
  }

  addAnalyticsEvent(event: MyBaseDashboardDatalayer) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
}

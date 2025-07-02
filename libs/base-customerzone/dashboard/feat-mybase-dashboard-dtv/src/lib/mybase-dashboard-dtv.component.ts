import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerFacade,
  MyBaseDashboardFacade,
  MyBaseDashoardNgrxModule,
  NavigationCardType,
  ServiceType,
} from '@mybase-dashboard/data-access';
import {
  MyBaseDashboardErrorComponent,
  MyBaseNavigationCardsComponent,
  MyBaseServicesCardsComponent,
  WatchTvOnlineComponent,
} from '@mybase-dashboard/ui';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'tg-mybase-dashboard-dtv',
  standalone: true,
  imports: [
    MyBaseDashoardNgrxModule,
    CommonModule,
    LoginModule,
    MyBaseDashboardErrorComponent,
    MyBaseNavigationCardsComponent,
    MyBaseServicesCardsComponent,
    WatchTvOnlineComponent,
  ],
  styleUrl: './mybase-dashboard-dtv.component.scss',
  templateUrl: './mybase-dashboard-dtv.component.html',
})
export class MyBaseDashboardDtvComponent {
  @Input()
  manageContentPacksUrl!: string;

  @Input()
  watchTvOnlineUrl!: string;

  @Input() watchTvIosUrl!: string;
  @Input() watchTvAndroidUrl!: string;

  @Input()
  productOverviewUrl!: string;

  @Input()
  manageYourDeviceUrl!: string;

  @Input()
  addTvBoxUrl!: string;

  @Input()
  returnDeviceUrl!: string;

  scopes = ['customeraccount']; // TBD
  private readonly facade: MyBaseDashboardFacade = inject(MyBaseDashboardFacade);
  private readonly datalayerFacade: MyBaseDashboardDatalayerFacade = inject(MyBaseDashboardDatalayerFacade);

  dtvLines$ = this.facade.dtvLines$;
  myBaseDashboardDtvError$ = this.facade.myBaseDashboardDtvError$;
  myBaseDashboardDtvLoading$ = this.facade.myBaseDashboardDtvLoading$;
  myBaseDashboardDtvIdentifier$ = this.facade.myBaseDashboardDtvIdentifier$;
  myBaseDashboardDtvSimpleCards$ = this.facade.myBaseDashboardDtvSimpleCards$.pipe(
    map((cards) => {
      const navCards = cards as NavigationCardType[];
      return navCards.filter((card) => this.navigationCardTypes.includes(card));
    })
  ) as Observable<NavigationCardType[]>;
  myBaseDashboardDtvServices$ = this.facade.myBaseDashboardDtvServices$.pipe(
    map((cards) => {
      const serviceCards = cards as ServiceType[];
      return serviceCards.filter((card) => this.serviceTypes.includes(card));
    })
  ) as Observable<ServiceType[]>;

  // Sorted array, determines the order of the cards
  private readonly navigationCardTypes = [
    NavigationCardType.PRODUCT_OVERVIEW,
    NavigationCardType.MANAGE_YOUR_DEVICE,
    NavigationCardType.MANAGE_CONTENT_PACKS,
    NavigationCardType.ADD_TV_BOX,
  ];

  private readonly serviceTypes = [ServiceType.RETURN_DEVICE];

  initAfterLoggedIn() {
    this.facade.loadDtvLines();
  }

  sendAnalyticsData(event: MyBaseDashboardDatalayer) {
    this.datalayerFacade.sendDatalayerEvent(event);
  }
}

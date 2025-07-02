import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import {
  MyBaseDashboardDatalayer,
  NavigationCardType,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
} from '@mybase-dashboard/data-access';
import { MyBaseSimpleCardComponent } from '../mybase-simple-card/mybase-simple-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { WatchTvOnlineComponent } from '../watch-tv-online/watch-tv-online.component';

@Component({
  selector: 'tg-mybase-navigation-cards',
  standalone: true,
  imports: [CommonModule, TranslateModule, MyBaseSimpleCardComponent, WatchTvOnlineComponent],
  templateUrl: './mybase-navigation-cards.component.html',
})
export class MyBaseNavigationCardsComponent implements OnChanges {
  @Input()
  mobileUsageNotificationUrl!: string;

  @Input()
  voicemailUrl!: string;

  @Input()
  simManagementUrl!: string;

  @Input()
  productOverviewUrl!: string;

  @Input()
  topopUrl!: string;

  @Input()
  topupHistoryUrl!: string;

  @Input()
  internetUsageNotificationUrl!: string;

  @Input()
  speedTestUrl!: string;

  @Input()
  myDeviceUrl!: string;

  @Input()
  devicesUsingNetworkUrl!: string;

  @Input()
  manageContentPacksUrl!: string;

  @Input()
  manageYourDeviceUrl!: string;

  @Input()
  addTvBoxUrl!: string;

  @Input()
  productIdentifier!: string;

  @Input()
  mobileTitle!: string;

  @Input()
  customClassGrid!: string;

  @Input()
  mobileUsageDetailsUrl!: string;

  @Input()
  mobileUsageLimitsUrl!: string;

  @Input()
  barringsUrl!: string;

  @Input()
  showControlUsageTitle = false;

  @Input({ required: true })
  data!: NavigationCardType[];

  @Input({ required: true })
  type!: 'mobile' | 'internet' | 'dtv';

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  WATCH_TV_ONLINE = 'watch-tv-online';

  cards: NavigationCardType[] = [];
  readonly iconMap: Record<NavigationCardType, string> = {
    [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS]: 'icon-bell',
    [NavigationCardType.VOICEMAIL]: 'icon-voicemail',
    [NavigationCardType.SIM_MANAGEMENT]: 'icon-sim-management',
    [NavigationCardType.PRODUCT_OVERVIEW]: 'icon-overview',
    [NavigationCardType.TOPUP]: 'icon-mobile-arrow-up',
    [NavigationCardType.TOPUP_HISTORY]: 'icon-euro-arrow-counterclockwise',
    [NavigationCardType.INTERNET_USAGE_NOTIFICATIONS]: 'icon-bell',
    [NavigationCardType.SPEEDTEST]: 'icon-gauge',
    [NavigationCardType.MANAGE_YOUR_PRODUCT]: 'icon-stack',
    [NavigationCardType.MY_DEVICE]: '',
    [NavigationCardType.DEVICES_USING_YOUR_NETWORK]: '',
    [NavigationCardType.MANAGE_YOUR_DEVICE]: '',
    [NavigationCardType.MANAGE_CONTENT_PACKS]: 'icon-grid-lg',
    [NavigationCardType.ADD_TV_BOX]: 'icon-tv-box',
    [NavigationCardType.USAGE_DETAILS]: 'icon-list-blocks',
    [NavigationCardType.USAGE_LIMITS]: 'icon-mobile-euro',
    [NavigationCardType.BARRINGS]: 'icon-settings-lines',
  };

  private readonly urlService: UrlService = inject(UrlService);

  ngOnChanges(): void {
    if (this.data) {
      this.updateData();
    }
  }

  redirectTo(card: NavigationCardType) {
    const url = this.getUrl(card);
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeData: '',
      attributeName: card,
      destinationUrl: url,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(url);
  }

  getUrl(card: NavigationCardType): string {
    switch (card) {
      case NavigationCardType.MOBILE_USAGE_NOTIFICATIONS:
        return this.mobileUsageNotificationUrl;
      case NavigationCardType.VOICEMAIL:
        return this.voicemailUrl;
      case NavigationCardType.SIM_MANAGEMENT:
        return this.simManagementUrl;
      case NavigationCardType.PRODUCT_OVERVIEW:
        return this.productOverviewUrl;
      case NavigationCardType.TOPUP:
        return this.topopUrl;
      case NavigationCardType.TOPUP_HISTORY:
        return this.topupHistoryUrl;
      case NavigationCardType.INTERNET_USAGE_NOTIFICATIONS:
        return this.internetUsageNotificationUrl;
      case NavigationCardType.SPEEDTEST:
        return this.speedTestUrl;
      case NavigationCardType.MANAGE_YOUR_PRODUCT:
        return this.productOverviewUrl;
      case NavigationCardType.MY_DEVICE:
        return this.myDeviceUrl;
      case NavigationCardType.DEVICES_USING_YOUR_NETWORK:
        return this.devicesUsingNetworkUrl;
      case NavigationCardType.MANAGE_CONTENT_PACKS:
        return this.getManageContentPacksUrl();
      case NavigationCardType.MANAGE_YOUR_DEVICE:
        return this.manageYourDeviceUrl;
      case NavigationCardType.ADD_TV_BOX:
        return this.addTvBoxUrl;
      case NavigationCardType.USAGE_DETAILS:
        return this.mobileUsageDetailsUrl;
      case NavigationCardType.USAGE_LIMITS:
        return this.mobileUsageLimitsUrl;
      case NavigationCardType.BARRINGS:
        return this.barringsUrl;
    }
  }

  private updateData(): void {
    // Only show cards that have a configured URL
    this.cards = this.data.filter((card) => {
      switch (card) {
        case NavigationCardType.MOBILE_USAGE_NOTIFICATIONS:
          return !!this.mobileUsageNotificationUrl;
        case NavigationCardType.VOICEMAIL:
          return !!this.voicemailUrl;
        case NavigationCardType.SIM_MANAGEMENT:
          return !!this.simManagementUrl;
        case NavigationCardType.PRODUCT_OVERVIEW:
          return !!this.productOverviewUrl;
        case NavigationCardType.TOPUP:
          return !!this.topopUrl;
        case NavigationCardType.TOPUP_HISTORY:
          return !!this.topupHistoryUrl;
        case NavigationCardType.INTERNET_USAGE_NOTIFICATIONS:
          return !!this.internetUsageNotificationUrl;
        case NavigationCardType.SPEEDTEST:
          return !!this.speedTestUrl;
        case NavigationCardType.MANAGE_YOUR_PRODUCT:
          return !!this.productOverviewUrl;
        case NavigationCardType.MY_DEVICE:
          return !!this.myDeviceUrl;
        case NavigationCardType.DEVICES_USING_YOUR_NETWORK:
          return !!this.devicesUsingNetworkUrl;
        case NavigationCardType.MANAGE_CONTENT_PACKS:
          return !!this.manageContentPacksUrl;
        case NavigationCardType.MANAGE_YOUR_DEVICE:
          return !!this.manageYourDeviceUrl;
        case NavigationCardType.ADD_TV_BOX:
          return !!this.addTvBoxUrl;
        case NavigationCardType.USAGE_DETAILS:
          return !!this.mobileUsageDetailsUrl;
        case NavigationCardType.USAGE_LIMITS:
          return !!this.mobileUsageLimitsUrl;
        case NavigationCardType.BARRINGS:
          return !!this.barringsUrl;
        default:
          return false;
      }
    });
  }

  private getManageContentPacksUrl(): string {
    return `${this.manageContentPacksUrl}?item=${this.productIdentifier}&flow=product-options&producttype=dtv`;
  }
}

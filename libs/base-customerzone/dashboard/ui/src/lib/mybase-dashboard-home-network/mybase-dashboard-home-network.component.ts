import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerAttributeData,
} from '@mybase-dashboard/data-access';

@Component({
  selector: 'tg-mybase-dashboard-home-network',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mybase-dashboard-home-network.component.html',
  styleUrl: './mybase-dashboard-home-network.component.scss',
})
export class MyBaseDashboardHomeNetworkComponent implements OnInit {
  @Input() homeNetworkUrl!: string;
  @Input() wifiPassportUrl!: string;
  @Input() componentPrefix!: string;
  @Input() marginTop = true;
  @Input() isLevel1 = true;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  private readonly urlService: UrlService = inject(UrlService);

  ngOnInit(): void {
    if (this.isLevel1) {
      this.sendAnalyticsData(false);
    }
  }

  goToHomeNetwork(): void {
    this.sendAnalyticsData(true, this.homeNetworkUrl);
    this.urlService.redirectTo(this.homeNetworkUrl);
  }

  goToWifiPassport(): void {
    this.sendAnalyticsData(true, this.wifiPassportUrl, true);
    this.urlService.redirectTo(this.wifiPassportUrl);
  }

  sendAnalyticsData(isClick: boolean, destinationUrl?: string, isShareButtonClicked?: boolean) {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: this.getEventName(isClick, isShareButtonClicked),
      eventType: this.getEventType(isClick, isShareButtonClicked),
      attributeName: !isShareButtonClicked
        ? MyBaseDashboardDatalayerAttributeName.HOME_NETWORK
        : MyBaseDashboardDatalayerAttributeName.SHARE_HOME_NETWORK,
      attributeData: !isClick ? MyBaseDashboardDatalayerAttributeData.ALL_GOOD : '',
      destinationUrl: isClick ? destinationUrl : undefined,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }

  private getEventName(isClick: boolean, isShareButtonClicked?: boolean): string {
    if (isShareButtonClicked) {
      return MyBaseDashboardDatalayerEventName.BUTTON_CLICKED;
    } else if (isClick) {
      return this.isLevel1
        ? MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED
        : MyBaseDashboardDatalayerEventName.CARD_CLICKED;
    }
    return MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED;
  }

  private getEventType(isClick: boolean, isShareButtonClicked?: boolean): string {
    if (isClick) {
      return this.isLevel1 || isShareButtonClicked
        ? MyBaseDashboardDatalayerEventType.CLICK
        : MyBaseDashboardDatalayerEventType.CLICK_CARD;
    }
    return MyBaseDashboardDatalayerEventType.IMPRESSION;
  }
}

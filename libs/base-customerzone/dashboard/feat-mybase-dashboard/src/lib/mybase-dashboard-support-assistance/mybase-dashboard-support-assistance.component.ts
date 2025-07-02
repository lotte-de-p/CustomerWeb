import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeData,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  SupportAssistanceType,
} from '@mybase-dashboard/data-access';
import { MyBaseSimpleCardComponent, WatchTvOnlineComponent } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-support-assistance',
  standalone: true,
  imports: [CommonModule, TranslateModule, MyBaseSimpleCardComponent, WatchTvOnlineComponent],
  templateUrl: './mybase-dashboard-support-assistance.component.html',
})
export class MyBaseDashboardSupportAssistanceComponent implements OnChanges {
  @Input()
  watchTvUrl!: string;

  @Input()
  watchTvIosUrl!: string;

  @Input()
  watchTvAndroidUrl!: string;

  @Input()
  bestTariffUrl!: string;

  @Input()
  easySwitchUrl!: string;

  @Input()
  supportUrl!: string;

  @Input({ required: true })
  data!: SupportAssistanceType[];

  cards: SupportAssistanceType[] = [];

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  private readonly urlService: UrlService = inject(UrlService);
  private readonly cardOrder = [
    SupportAssistanceType.SUPPORT,
    SupportAssistanceType.EASY_SWITCH,
    SupportAssistanceType.BEST_TARIFF,
    SupportAssistanceType.WATCH_TV,
  ];
  readonly externalLinks = [SupportAssistanceType.WATCH_TV];

  SupportAssistanceType = SupportAssistanceType;

  ngOnChanges(): void {
    this.updateData();
  }

  redirectTo(card: SupportAssistanceType) {
    const url = this.getUrl(card);
    this.sendAnalyticsData(card, url);
    this.urlService.redirectTo(url);
  }

  getUrl(card: SupportAssistanceType): string {
    switch (card) {
      case SupportAssistanceType.WATCH_TV:
        return this.watchTvUrl;
      case SupportAssistanceType.BEST_TARIFF:
        return this.bestTariffUrl;
      case SupportAssistanceType.EASY_SWITCH:
        return this.easySwitchUrl;
      case SupportAssistanceType.SUPPORT:
        return this.supportUrl;
    }
  }

  private updateData(): void {
    // Only show cards that have a configured URL
    this.cards = this.data
      .filter((card) => {
        switch (card) {
          case SupportAssistanceType.WATCH_TV:
            return !!this.watchTvUrl;
          case SupportAssistanceType.BEST_TARIFF:
            return !!this.bestTariffUrl;
          case SupportAssistanceType.SUPPORT:
            return !!this.supportUrl;
          case SupportAssistanceType.EASY_SWITCH:
            return !!this.easySwitchUrl;
          default:
            return false;
        }
      })
      .sort((a, b) => this.cardOrder.indexOf(a) - this.cardOrder.indexOf(b));
  }

  sendAnalyticsData(card: SupportAssistanceType, destinationUrl: string) {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: MyBaseDashboardDatalayerAttributeName.SUPPORT,
      attributeData: MyBaseDashboardDatalayerAttributeData[card.toUpperCase().replace('-', '_')],
      destinationUrl: destinationUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

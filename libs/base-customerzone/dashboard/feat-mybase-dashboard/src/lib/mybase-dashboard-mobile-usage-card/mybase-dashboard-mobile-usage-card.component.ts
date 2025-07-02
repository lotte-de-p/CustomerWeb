import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ImageSrcInterceptorDirective,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeData,
  MyBaseDashboardDatalayerAttributeGroup,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardProductUsage,
  UsageStatusEnum,
} from '@mybase-dashboard/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { LineSelectorComponent, PhoneNumberPipe } from '@mybase-dashboard/ui';

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-card',
  standalone: true,
  imports: [CommonModule, PhoneNumberPipe, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './mybase-dashboard-mobile-usage-card.component.html',
  styleUrls: ['./mybase-dashboard-mobile-usage-card.component.scss'],
})
export class MyBaseDashboardMobileUsageCardComponent implements OnInit {
  @Input() mobileUsage!: MyBaseDashboardProductUsage[];
  @Input() mobileUsagePageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  smoothSurfing = false;
  isLimitWarning = false;
  isLimitReached = false;

  constructor(private readonly urlService: UrlService) {}

  ngOnInit(): void {
    this.smoothSurfing = this.mobileUsage.every((usage) => usage.usageStatus === UsageStatusEnum.OK);
    this.isLimitWarning = this.mobileUsage.some((usage) => usage.usageStatus === UsageStatusEnum.LIMIT_ALMOST_REACHED);
    this.isLimitReached = this.mobileUsage.some((usage) =>
      [UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED, UsageStatusEnum.LIMIT_EXCEEDED].includes(usage.usageStatus)
    );
    this.sendAnalyticsData(false);
  }

  redirectToUsage(clickable = true, msisdn?: string): void {
    if (!clickable) {
      return;
    }
    if (msisdn) {
      window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, msisdn);
    }
    this.sendAnalyticsData(true);
    this.urlService.redirectTo(this.mobileUsagePageUrl);
  }

  getAttributeData(): string {
    switch (true) {
      case this.isLimitReached:
        return MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_REACHED;
      case this.isLimitWarning:
        return MyBaseDashboardDatalayerAttributeData.USAGE_LIMIT_WARNING;
      case this.smoothSurfing:
        return MyBaseDashboardDatalayerAttributeData.ALL_GOOD;
      default:
        return '';
    }
  }

  sendAnalyticsData(isClick: boolean) {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: isClick
        ? MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED
        : MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? MyBaseDashboardDatalayerEventType.CLICK : MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeName: MyBaseDashboardDatalayerAttributeName.MOBILE_USAGE,
      attributeData: this.getAttributeData(),
      attributeGroup: isClick ? MyBaseDashboardDatalayerAttributeGroup.USAGE_DETAILS_LINK : undefined,
      destinationUrl: isClick ? this.mobileUsagePageUrl : undefined,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

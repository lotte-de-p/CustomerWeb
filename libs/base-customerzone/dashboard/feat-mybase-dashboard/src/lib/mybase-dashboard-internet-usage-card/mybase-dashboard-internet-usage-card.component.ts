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
import { AddressSelectorComponent, PhoneNumberPipe } from '@mybase-dashboard/ui';

@Component({
  selector: 'tg-mybase-dashboard-internet-usage-card',
  standalone: true,
  imports: [CommonModule, PhoneNumberPipe, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './mybase-dashboard-internet-usage-card.component.html',
  styleUrls: ['./mybase-dashboard-internet-usage-card.component.scss'],
})
export class MyBaseDashboardInternetUsageCardComponent implements OnInit {
  @Input() internetUsage!: MyBaseDashboardProductUsage[];
  @Input() internetUsagePageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  smoothSurfing = false;
  isLimitWarning = false;
  isLimitReached = false;

  constructor(private readonly urlService: UrlService) {}

  ngOnInit(): void {
    this.smoothSurfing = this.internetUsage.every((usage) => usage.usageStatus === UsageStatusEnum.OK);
    this.isLimitWarning = this.internetUsage.some(
      (usage) => usage.usageStatus === UsageStatusEnum.LIMIT_ALMOST_REACHED
    );
    this.isLimitReached = this.internetUsage.some((usage) =>
      [UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED, UsageStatusEnum.LIMIT_EXCEEDED].includes(usage.usageStatus)
    );
    this.sendAnalyticsData(false);
  }

  getCompleteAddress(street: string, houseNo: string, subHouseNo?: string, boxNo?: string): string | undefined {
    if (!street || !houseNo) {
      return;
    }
    let completeAddress = street.concat(' ').concat(houseNo);

    if (subHouseNo) {
      completeAddress = completeAddress.concat('/', subHouseNo);
    }
    if (boxNo) {
      completeAddress = completeAddress.concat('/', boxNo);
    }
    return completeAddress;
  }

  redirectToUsage(clickable = true, productIdentifier?: string): void {
    if (!clickable) {
      return;
    }
    if (productIdentifier) {
      window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, productIdentifier);
    }
    this.sendAnalyticsData(true);
    this.urlService.redirectTo(this.internetUsagePageUrl);
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
      attributeName: MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE,
      attributeData: this.getAttributeData(),
      attributeGroup: isClick ? MyBaseDashboardDatalayerAttributeGroup.USAGE_DETAILS_LINK : undefined,
      destinationUrl: isClick ? this.internetUsagePageUrl : undefined,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

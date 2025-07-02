import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  InternetUsage,
  UsageStatusEnum,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayerAttributeName,
} from '@mybase-dashboard/data-access';
import { ProgressBarComponent, ProgressBarStatus } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-internet-usage-unlimited',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: './mybase-dashboard-internet-usage-unlimited.component.html',
})
export class MyBaseDashboardInternetUsageUnlimitedComponent {
  @Input() internetUsageUrl!: string;
  @Input({ required: true })
  set data(data: InternetUsage) {
    if (!data.unlimited) return;

    this.used = data.unlimited.usedBytes / 1024 ** 3;
    this.daysUntilRenewal = data.unlimited.daysUntilRenewal;

    switch (data.unlimited.status) {
      case UsageStatusEnum.OK:
        this.usageStatus = this.UsageStatus.OK;
        break;
      case UsageStatusEnum.LIMIT_ALMOST_REACHED:
        this.usageStatus = this.UsageStatus.WARN;
        break;
      case UsageStatusEnum.LIMIT_EXCEEDED:
      case UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED:
        this.usageStatus = this.UsageStatus.ERROR;
        break;
    }
  }

  used = 0;
  daysUntilRenewal = 0;
  usageStatus: ProgressBarStatus = ProgressBarStatus.OK;

  UsageStatus = ProgressBarStatus;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  private readonly urlService: UrlService = inject(UrlService);

  goToInternetUsage(): void {
    this.sendAnalyticsData();
    this.urlService.redirectTo(this.internetUsageUrl);
  }

  sendAnalyticsData(): void {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE_UNLIMITED,
      destinationUrl: this.internetUsageUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

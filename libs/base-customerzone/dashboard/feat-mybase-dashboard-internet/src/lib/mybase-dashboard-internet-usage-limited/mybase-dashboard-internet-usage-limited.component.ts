import { CommonModule } from '@angular/common';
import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import {
  InternetUsage,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayerAttributeName,
} from '@mybase-dashboard/data-access';
import { ProgressBarComponent, ProgressBarStatus } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-internet-usage-limited',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: './mybase-dashboard-internet-usage-limited.component.html',
})
export class MyBaseDashboardInternetUsageLimitedComponent {
  @Input() internetUsageUrl!: string;
  @Input({ required: true })
  set data(data: InternetUsage) {
    if (!data.limited) return;

    const total = data.limited.totalBytes;
    const remaining = data.limited.remainingBytes;

    this.total = total / 1024 ** 3;
    this.used = (total - remaining) / 1024 ** 3;
    this.usedPct = (this.used / this.total) * 100;
    this.daysUntilRenewal = data.limited.daysUntilRenewal;

    if (this.usedPct >= 80 && this.usedPct < 100) {
      this.progressBarStatus = ProgressBarStatus.WARN;
    } else if (this.usedPct >= 100) {
      this.progressBarStatus = ProgressBarStatus.ERROR;
    } else {
      this.progressBarStatus = ProgressBarStatus.OK;
    }
  }

  total = 0;
  used = 0;
  usedPct = 0;
  daysUntilRenewal = 0;
  progressBarStatus: ProgressBarStatus = ProgressBarStatus.OK;

  ProgressBarStatus = ProgressBarStatus;

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
      attributeName: MyBaseDashboardDatalayerAttributeName.INTERNET_USAGE_LIMITED,
      destinationUrl: this.internetUsageUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

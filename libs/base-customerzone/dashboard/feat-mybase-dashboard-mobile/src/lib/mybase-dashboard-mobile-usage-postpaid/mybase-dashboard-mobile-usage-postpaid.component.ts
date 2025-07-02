import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  MobileUsage,
  MyBaseAnalyticsEventMobileUsage,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayer,
  UsageStatusEnum,
  LegacyPostPaidData,
  PostPaidData,
} from '@mybase-dashboard/data-access';
import { ProgressBarComponent, ProgressBarStatus } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-postpaid',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: 'mybase-dashboard-mobile-usage-postpaid.component.html',
  styleUrl: './mybase-dashboard-mobile-usage-postpaid.component.scss',
})
export class MyBaseDashboardMobileUsagePostpaidComponent {
  @Input({ required: true })
  set data(data: MobileUsage) {
    if (data.postpaid) {
      this.calculateVars(data.postpaid);
    }
    if (data.legacy) {
      this.calculateVars(data.legacy);
    }
  }

  @Input()
  mobileUsageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  daysUntilRenewal = 0;
  total = 0;
  used = 0;
  usedPct = 0;
  carryOver = 0;
  outOfBundleLimit = 0;
  progressBarStatus: ProgressBarStatus = ProgressBarStatus.OK;

  private readonly urlService: UrlService = inject(UrlService);

  goToMobileUsage(): void {
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseAnalyticsEventMobileUsage.POSTPAID,
      destinationUrl: this.mobileUsageUrl,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }

  calculateVars(postPaid: PostPaidData | LegacyPostPaidData) {
    const total = postPaid.data.total;
    const remaining = postPaid.data.remaining;

    this.total = total / 1024 ** 3;
    this.used = (total - remaining) / 1024 ** 3;
    this.usedPct = (this.used / this.total) * 100;
    this.daysUntilRenewal = postPaid.daysUntilRenewal;
    this.carryOver = postPaid.data.carryOver / 1024 ** 3;
    this.outOfBundleLimit = postPaid.outOfBundleLimit || 0;

    switch (postPaid.status) {
      case UsageStatusEnum.OK:
        this.progressBarStatus = ProgressBarStatus.OK;
        break;
      case UsageStatusEnum.LIMIT_ALMOST_REACHED:
        this.progressBarStatus = ProgressBarStatus.WARN;
        break;
      case UsageStatusEnum.LIMIT_EXCEEDED:
      case UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED:
        this.progressBarStatus = ProgressBarStatus.ERROR;
        break;
    }
  }
}

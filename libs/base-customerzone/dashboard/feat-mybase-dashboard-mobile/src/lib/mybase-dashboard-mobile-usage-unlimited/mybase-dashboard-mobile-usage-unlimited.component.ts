import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  MobileUsage,
  MyBaseAnalyticsEventMobileUsage,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayer,
  UsageStatusEnum,
} from '@mybase-dashboard/data-access';
import { ProgressBarComponent, ProgressBarStatus } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-unlimited',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: 'mybase-dashboard-mobile-usage-unlimited.component.html',
  styleUrl: './mybase-dashboard-mobile-usage-unlimited.component.scss',
})
export class MyBaseDashboardMobileUsageUnlimitedComponent {
  @Input({ required: true })
  set data(data: MobileUsage) {
    if (!data.unlimited) return;

    this.used = data.unlimited.used / 1024 ** 3;
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

  @Input()
  mobileUsageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  used = 0;
  daysUntilRenewal = 0;
  usageStatus: ProgressBarStatus = ProgressBarStatus.OK;

  UsageStatus = ProgressBarStatus;

  private readonly urlService: UrlService = inject(UrlService);

  goToMobileUsage(): void {
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseAnalyticsEventMobileUsage.UNLIMITED,
      destinationUrl: this.mobileUsageUrl,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
}

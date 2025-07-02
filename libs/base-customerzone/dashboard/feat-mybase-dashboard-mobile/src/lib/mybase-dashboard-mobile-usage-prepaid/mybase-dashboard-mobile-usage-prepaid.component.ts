import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  MobileUsage,
  MyBaseAnalyticsEventMobileUsage,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  MyBaseDashboardDatalayer,
} from '@mybase-dashboard/data-access';
import { ProgressBarComponent } from '@mybase-dashboard/ui';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-prepaid',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: 'mybase-dashboard-mobile-usage-prepaid.component.html',
  styleUrl: './mybase-dashboard-mobile-usage-prepaid.component.scss',
})
export class MyBaseDashboardMobileUsagePrepaidComponent {
  @Input({ required: true })
  set data(data: MobileUsage) {
    if (!data.prepaid) return;

    this.balance = data.prepaid.balance;
    this.expiryDate = data.prepaid.expiryDate;
  }
  @Input() topUpUrl!: string;
  @Input() mobileUsageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  balance = 0;
  expiryDate = new Date().toISOString();

  private readonly urlService: UrlService = inject(UrlService);

  goToTopUpLink(event: MouseEvent): void {
    // Prevent the click event on the actual card itself
    event.stopPropagation();
    this.urlService.redirectTo(this.topUpUrl);
  }

  goToMobileUsage(): void {
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseAnalyticsEventMobileUsage.PREPAID,
      destinationUrl: this.mobileUsageUrl,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }
}

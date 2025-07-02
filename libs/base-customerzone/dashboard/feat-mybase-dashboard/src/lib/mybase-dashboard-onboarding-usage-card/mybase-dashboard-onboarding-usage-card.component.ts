import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  ImageSrcInterceptorDirective,
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerAttributeName,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
} from '@mybase-dashboard/data-access';
import { UrlService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-mybase-dashboard-onboarding-usage-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './mybase-dashboard-onboarding-usage-card.component.html',
  styleUrl: './mybase-dashboard-onboarding-usage-card.component.scss',
})
export class MybaseDashboardOnboardingUsageCardComponent {
  @Input() title!: string;
  @Input() cardType!: string;
  @Input() billingUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  private readonly urlService: UrlService = inject(UrlService);

  goToBillingDetail(): void {
    this.sendAnalyticsData();
    this.urlService.redirectTo(this.billingUrl);
  }

  sendAnalyticsData(): void {
    const myBaseDashbaordAnalyticsData: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: MyBaseDashboardDatalayerAttributeName.BILLING,
      destinationUrl: this.billingUrl,
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
}

import { CommonModule, registerLocaleData } from '@angular/common';
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
import { UrlService, LanguageService, LanguageEnum } from '@telenet/ng-lib-page';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeNl);
registerLocaleData(localeEn);

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-basedonyou',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: 'mybase-dashboard-mobile-usage-basedOnYou.component.html',
  styleUrl: './mybase-dashboard-mobile-usage-basedOnYou.component.scss',
})
export class MyBaseDashboardMobileUsageBasedOnYouComponent {
  @Input({ required: true })
  set data(data: MobileUsage) {
    if (!data.basedOnYou) return;

    this.total = data.basedOnYou.total;
    this.remaining = data.basedOnYou.remaining;
    const used = this.total - this.remaining;

    this.usedPct = (used / this.total) * 100;
    this.daysUntilRenewal = data.basedOnYou.daysUntilRenewal;

    switch (data.basedOnYou.status) {
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

  @Input()
  mobileUsageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  daysUntilRenewal = 0;
  total = 0;
  remaining = 0;
  usedPct = 0;
  progressBarStatus: ProgressBarStatus = ProgressBarStatus.OK;

  private readonly urlService: UrlService = inject(UrlService);
  private readonly languageService: LanguageService = inject(LanguageService);

  goToMobileUsage(): void {
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseAnalyticsEventMobileUsage.BASED_ON_YOU,
      destinationUrl: this.mobileUsageUrl,
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(this.mobileUsageUrl);
  }

  get locale() {
    const lang = this.languageService.getLanguage();
    if (lang === LanguageEnum.EN || lang === LanguageEnum.NL) {
      return LanguageEnum.NL;
    }
    return lang;
  }
}

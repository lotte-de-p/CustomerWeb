import { CommonModule, registerLocaleData } from '@angular/common';
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
import { UrlService, LanguageService, LanguageEnum } from '@telenet/ng-lib-page';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeFr);
registerLocaleData(localeNl);
registerLocaleData(localeEn);

@Component({
  selector: 'tg-mybase-dashboard-mobile-usage-basezero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProgressBarComponent],
  templateUrl: 'mybase-dashboard-mobile-usage-baseZero.component.html',
  styleUrl: './mybase-dashboard-mobile-usage-baseZero.component.scss',
})
export class MyBaseDashboardMobileUsageBaseZeroComponent {
  @Input({ required: true })
  set data(data: MobileUsage) {
    if (!data.baseZero) return;

    this.used = data.baseZero.used;
    this.daysUntilRenewal = data.baseZero.daysUntilRenewal;
  }

  @Input()
  mobileUsageUrl!: string;

  @Output() analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();

  daysUntilRenewal = 0;
  used = 0;

  private readonly urlService: UrlService = inject(UrlService);
  private readonly languageService: LanguageService = inject(LanguageService);

  goToMobileUsage(): void {
    const event: MyBaseDashboardDatalayer = {
      eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeName: MyBaseAnalyticsEventMobileUsage.BASE_ZERO,
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

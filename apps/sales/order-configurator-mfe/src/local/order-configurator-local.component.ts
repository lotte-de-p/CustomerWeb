import { Component } from '@angular/core';
import { OrderConfiguratorComponent } from '../app/order-configurator.component';
import { I18nService, LanguageEnum } from '@telenet/ng-lib-page'; // Import LanguageEnum
import { registerLocaleData } from '@angular/common';
import localeNlBE from '@angular/common/locales/nl-BE';

@Component({
  selector: 'tg-sales-order-configurator-local',
  templateUrl: './order-configurator-local.html',
  imports: [OrderConfiguratorComponent],
  standalone: true,
})
export class OrderConfiguratorLocalComponent {
  title = 'order-configurator';

  constructor(private readonly i18nService: I18nService) {
    // Register the nl_BE locale
    registerLocaleData(localeNlBE);

    // Use LanguageEnum for setting the default language and locale
    this.i18nService.setDefaultLanguageAndLocale(); // 'NL' as part of the LanguageEnum
    this.i18nService.setLanguage(LanguageEnum.NL); // Use LanguageEnum for language
  }
}

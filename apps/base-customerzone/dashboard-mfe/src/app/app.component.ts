import { Component } from '@angular/core';
import { MyBaseDashboardComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { I18nService } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeEU from '@angular/common/locales/eu';

@Component({
  selector: 'mybase-dashboard-local-app',
  template: `
    <div class="app-container dashboard">
      <span>{{ title }}</span>
      <tg-mybase-dashboard></tg-mybase-dashboard>
    </div>
  `,
  imports: [MyBaseDashboardComponent],
  standalone: true,
})
export class AppComponent {
  title = 'mybase-dashboard-mfe title';

  constructor(i18nService: I18nService) {
    registerLocaleData(localeEU);
    i18nService.setDefaultLanguageAndLocale();
    i18nService.setLanguage();
  }
}

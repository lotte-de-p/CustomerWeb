import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeEU from '@angular/common/locales/eu';

@Component({
  selector: 'care-root',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(i18nService: I18nService) {
    registerLocaleData(localeEU);
    i18nService.setDefaultLanguageAndLocale();
    i18nService.setLanguage();
  }
}

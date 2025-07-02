import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeEU from '@angular/common/locales/eu';

@Component({
  selector: 'product-local-app',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'product-mfe';

  constructor(i18nService: I18nService) {
    registerLocaleData(localeEU);
    i18nService.setDefaultLanguageAndLocale();
  }
}

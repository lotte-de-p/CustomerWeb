import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeEU from '@angular/common/locales/eu';

@Component({
  standalone: true,
  selector: 'customer-web-billing-invoice-local-app',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'customer-web-billing-invoice-mfe';
  constructor(private readonly i18nService: I18nService) {
    registerLocaleData(localeEU);
    this.i18nService.setDefaultLanguageAndLocale();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderComponent } from './local/components/header/header.component';
import { LocalBillingAccountSelectorComponent } from './local/components/local-billing-account-selector/local-billing-account-selector.component';
import { AsyncPipe } from '@angular/common';
import { I18nService } from '@telenet/ng-lib-page';
import { LocalMobileLineSelectorComponent } from './local/components/local-mobile-line-selector/local-mobile-line-selector.component';

@Component({
  selector: 'tg-app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    LocalBillingAccountSelectorComponent,
    RouterOutlet,
    AsyncPipe,
    LocalMobileLineSelectorComponent,
  ],
})
export class AppComponent implements OnInit {
  readonly #route = inject(ActivatedRoute);

  includeBillingAccountSelector$: Observable<boolean>;
  includeMobileLineSelector$: Observable<boolean>;

  constructor(private readonly i18nService: I18nService) {
    this.i18nService.setDefaultLanguageAndLocale();
    this.i18nService.setLanguage();
  }

  ngOnInit() {
    this.includeBillingAccountSelector$ = this.#route.queryParams.pipe(
      map((params) => {
        return params['includeBillingAccountSelector'] === 'true';
      })
    );
    this.includeMobileLineSelector$ = this.#route.queryParams.pipe(
      map((params) => {
        return params['includeMobileLineSelector'] === 'true';
      })
    );
  }
}

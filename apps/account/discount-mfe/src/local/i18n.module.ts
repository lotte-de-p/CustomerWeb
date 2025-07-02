import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { I18nService, TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { registerLocaleData } from '@angular/common';
import localeEU from '@angular/common/locales/eu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: TelenetMissingTranslationHandler,
        deps: [TelenetMissingTranslationService],
      },
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule, HttpClientModule],
  providers: [
    {
      provide: 'Window',
      useValue: window,
    },
  ],
})
export class I18nModule {
  constructor(i18nService: I18nService) {
    registerLocaleData(localeEU);
    i18nService.setDefaultLanguageAndLocale();
    i18nService.setLanguage();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener('changeLanguage', (event: any) => {
      i18nService.setLanguage(event.detail.locale);
    });
  }
}

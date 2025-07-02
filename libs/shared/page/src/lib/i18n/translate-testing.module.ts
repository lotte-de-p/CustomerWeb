import { Inject, InjectionToken, LOCALE_ID, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TelenetTranslateLoader } from './main-translate-loader';

export const TESTING_TRANSLATION_CONFIG = new InjectionToken<TestingTranslateConfig>('testing-translation-config');

interface TestingTranslateConfig {
  language?: 'fr' | 'nl' | 'en';
  translations?: Record<string, string | unknown>;
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      useDefaultLang: true,
      isolate: true,
      extend: false,
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: TelenetTranslateLoader,
      },
    }),
  ],
  exports: [TranslateModule],
})
export class TgTranslateTestingModule {
  constructor(
    @Inject(TESTING_TRANSLATION_CONFIG) @Optional() config: TestingTranslateConfig,
    translateService: TranslateService
  ) {
    translateService.use(config?.language || 'en');
    translateService.currentLang = config?.language || 'en';
    if (config?.translations) {
      translateService.setTranslation(config?.language || 'en', config?.translations);
    }
  }

  static forRoot(config?: TestingTranslateConfig): ModuleWithProviders<TgTranslateTestingModule> {
    return {
      ngModule: TgTranslateTestingModule,
      providers: [
        { provide: TESTING_TRANSLATION_CONFIG, useValue: config },
        { provide: LOCALE_ID, useValue: `${config?.language || 'en'}-BE` },
        { provide: 'Window', useValue: window },
      ],
    };
  }
}

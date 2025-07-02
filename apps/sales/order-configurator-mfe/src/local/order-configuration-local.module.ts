import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { windowFactory } from './window.factory';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(StoreModule.forRoot()),
    importProvidersFrom(EffectsModule.forRoot()),
    provideStoreDevtools(),
    importProvidersFrom(
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
      })
    ),
    {
      provide: 'Window',
      useFactory: windowFactory,
    },
  ],
};

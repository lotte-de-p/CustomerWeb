import { provideRouter, RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { APP_ROUTES } from './app.routes';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(StoreModule.forRoot()),
    importProvidersFrom(EffectsModule.forRoot([])),
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
    provideStoreDevtools(),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(RouterModule),
    { provide: 'Window', useValue: window },
  ],
};

import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter, RouterModule, withEnabledBlockingInitialNavigation } from '@angular/router';
import { ConfigService } from '@telenet/ng-lib-config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_ROUTES } from './app.routes';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const APP_CONFIG = {
  providers: [
    provideRouter(APP_ROUTES, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideStoreDevtools(),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(RouterModule),
    importProvidersFrom(StoreModule.forRoot()),
    importProvidersFrom(EffectsModule.forRoot()),
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
    ConfigService,
    {
      provide: 'Window',
      useValue: window,
    },
  ],
};

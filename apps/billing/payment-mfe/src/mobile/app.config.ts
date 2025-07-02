import { provideRouter, RouterModule, RouterOutlet, withEnabledBlockingInitialNavigation } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { APP_ROUTES } from './app.routes';
import { IonicPortalModule } from '@telenet/ng-lib-ionic-portal';
import { BrowserModule } from '@angular/platform-browser';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { ConfigService } from '@telenet/ng-lib-config';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideAnimations(),
    provideStoreDevtools(),
    provideEnvironmentNgxMask(),
    importProvidersFrom(IonicPortalModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(RouterOutlet),
    importProvidersFrom(RouterModule),
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
    { provide: 'Window', useValue: window },
    ConfigService,
  ],
};

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { InvoiceOverviewStore } from '@billing/invoice-overview/data-access';
import { APP_ROUTES } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
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
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    provideStoreDevtools(),
    importProvidersFrom(RouterModule),
    importProvidersFrom(StoreModule.forRoot()),
    importProvidersFrom(EffectsModule.forRoot([])),
    { provide: 'Window', useValue: window },
    InvoiceOverviewStore,
  ],
};

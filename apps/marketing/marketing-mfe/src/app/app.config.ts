import { provideRouter } from '@angular/router';
import { MARKETING_ROUTES } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from './cafe/priced-customer-product-holding/state/priced-cph.state';
import { ConfigService } from '@telenet/ng-lib-config';

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
          useClass: TelenetTranslateLoader,
        },
      }),
      StoreModule.forRoot(),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(),
        traceLimit: 75,
      }),
      NgxsModule.forRoot([PricedCphState]),
      NgxsModule.forRoot()
    ),
    {
      provide: 'Window',
      useValue: window,
    },
    ConfigService,
    provideRouter(MARKETING_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};

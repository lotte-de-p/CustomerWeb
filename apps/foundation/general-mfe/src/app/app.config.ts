import { provideRouter } from '@angular/router';
import { GENERAL_ROUTES } from './app.routes';
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
import { ConfigService } from '@telenet/ng-lib-config';
import { TgFormsModule } from '@telenet/ng-lib-form';

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
      NgxsModule.forRoot(),
      TgFormsModule
    ),
    {
      provide: 'Window',
      useValue: window,
    },
    ConfigService,
    provideRouter(GENERAL_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};

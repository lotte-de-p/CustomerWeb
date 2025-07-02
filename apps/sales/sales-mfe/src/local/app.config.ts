import { importProvidersFrom, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../app/angular-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DevelopmentInterceptorService } from './services/development-interceptor.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      CommonModule,
      BrowserModule,
      AngularMaterialModule,
      StoreModule.forRoot(),
      EffectsModule.forRoot(),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(),
        traceLimit: 75,
      }),
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
      MessagesModule
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DevelopmentInterceptorService,
      multi: true,
    },
    {
      provide: 'Window',
      useValue: window,
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(appRoutes),
  ],
};

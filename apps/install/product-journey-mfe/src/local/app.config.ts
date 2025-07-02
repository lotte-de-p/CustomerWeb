import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, withEnabledBlockingInitialNavigation } from '@angular/router';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppointmentCardComponent } from '@product-journey/appointments/feat-appointment-card';

export const appConfig = {
  providers: [
    importProvidersFrom(
      AppointmentCardComponent,
      BrowserModule,
      RouterOutlet,
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
      StoreModule.forRoot({}),
      EffectsModule.forRoot([])
    ),
    {
      provide: 'Window',
      useValue: window,
    },
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};

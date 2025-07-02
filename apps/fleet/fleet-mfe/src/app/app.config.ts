import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideDataLayer } from './local/providers/datalayer.provider';
import { provideWindow } from './local/providers/window.provider';
import { StoreModule } from '@ngrx/store';
import { AccountNgrxModule } from '@fleet/account/data-access';
import { EffectsModule } from '@ngrx/effects';
import { NgxsModule } from '@ngxs/store';
import { FleetModule } from './fleet.module';

export const applicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideDataLayer(),
    provideWindow(),
    importProvidersFrom(FleetModule),
    importProvidersFrom(NgxsModule.forRoot([])),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(StoreModule.forRoot({})),
    importProvidersFrom(AccountNgrxModule),
    importProvidersFrom(EffectsModule.forRoot({})),
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
      })
    ),
  ],
} satisfies ApplicationConfig;

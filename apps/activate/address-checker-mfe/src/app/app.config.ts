import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideStoreDevtools(),
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
          useClass: TelenetTranslateLoader,
        },
      })
    ),
    { provide: 'Window', useValue: window },
  ],
};

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  TelenetMissingTranslationHandler,
  TelenetMissingTranslationService,
  TelenetTranslateLoader,
} from '@telenet/ng-lib-page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { profileManagementRoutes } from './profile-management.routes';
import { provideRouter } from '@angular/router';
import { ProfileDetailsMapper, SocialLoginsMapper, AuthenticatorsMapper } from '@profile-management/data-access';
import { provideAnimations } from '@angular/platform-browser/animations';

export const profileManagementConfig: ApplicationConfig = {
  providers: [
    ProfileDetailsMapper,
    SocialLoginsMapper,
    AuthenticatorsMapper,
    provideRouter(profileManagementRoutes),
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

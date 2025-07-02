import { provideRouter, RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TelenetMissingTranslationHandler, TelenetMissingTranslationService } from '@telenet/ng-lib-page';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PayByMobileStore } from '@billing/pay-by-mobile/data-access';
import { PayByMobileOverviewComponent } from '@billing/pay-by-mobile/feat-pay-by-mobile';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'pay-by-mobile',
        component: PayByMobileOverviewComponent,
      },
    ]),
    provideHttpClient(),
    provideAnimations(),
    provideStoreDevtools(),
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
    PayByMobileStore,
    { provide: 'Window', useValue: window },
  ],
};

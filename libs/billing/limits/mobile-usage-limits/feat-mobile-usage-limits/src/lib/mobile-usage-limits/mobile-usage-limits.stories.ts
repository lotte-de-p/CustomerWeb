import { CommonModule } from '@angular/common';
import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import HttpClientModule for HttpClient
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { MobileUsageLimitsComponent } from './mobile-usage-limits.component';
import userDetailsMock from '../../mock/userdetails-mock.json';
import userDetailsMemberMock from '../../mock/userdetails-member-mock.json';
import mobileLinesMock from '../../mock/mobile-lines-mock.json';
import mobileUsageLimitsMock from '../../mock/mobile-usage-limits-mock.json';
import mobileUsageLimitsLoadingMock from '../../mock/mobile-usage-limits-loading-mock.json';
import mobileUsageLimitsErrorMock from '../../mock/mobile-usage-limits-error-mock.json';
import updateMobileUsageLimitsMock from '../../mock/update-mobile-usage-limits-mock.json';
import outOfBundleLimitsMock from '../../mock/out-of-bundle-limits-mock.json';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WarningDialogModel } from '@billing/mobile-usage-limits/data-access';
import { provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { RouterModule } from '@angular/router';

const localhost = 'http://localhost:8080';

export default {
  title: 'MobileUsageLimits/feature/mobileusagelimits',
  component: MobileUsageLimitsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        TgFormsModule,
        TgTranslateTestingModule.forRoot({
          language: 'en',
          translations: require('../../assets/i18n/en.json'),
        }),
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(RouterModule.forRoot([])),
        importProvidersFrom(
          StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(),
            traceLimit: 75,
          })
        ),
        provideHttpClient(),
        provideNgxMask(),
        {
          provide: 'Window',
          useValue: {
            ...window,
            Config: {
              'ocapi-url': localhost,
              'openid-auth-url': localhost,
              'openid-url': localhost,
              'openid-client-id': 'ocapi',
            },
          },
        },
      ],
    }),
  ],
} as Meta<MobileUsageLimitsComponent>;

export const mobileUsageLimitsLoaded = {
  render: (args: MobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {
    isMember: true,
  },
  parameters: {
    mockData: [
      mobileLinesMock,
      userDetailsMock,
      mobileUsageLimitsMock,
      outOfBundleLimitsMock,
      updateMobileUsageLimitsMock,
    ],
  },
};

export const mobileUsageLimitsLoading = {
  render: (args: MobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
  },
  parameters: {
    mockData: [
      mobileLinesMock,
      userDetailsMock,
      mobileUsageLimitsLoadingMock,
      outOfBundleLimitsMock,
      updateMobileUsageLimitsMock,
    ],
  },
};

export const mobileUsageLimitsWithWarning = {
  render: (args: MobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {
    showWarningDialog: true,
    warningDialogData: {
      warningDetails: 'ng.mobile-usage-limits.lbl.usage-limits-warning',
      warningText: 'ng.mobile-usage-limits.lbl.out-of-bundle-warning-description',
      cancelButtonText: 'ng.mobile-usage-limits.btn.cancel',
      confirmButtonText: 'ng.mobile-usage-limits.btn.ok',
    } as WarningDialogModel,
  },
  parameters: {
    mockData: [
      mobileLinesMock,
      userDetailsMock,
      mobileUsageLimitsMock,
      outOfBundleLimitsMock,
      updateMobileUsageLimitsMock,
    ],
  },
};

export const mobileUsageLimitsWithLimitsForMember = {
  render: (args: MobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {
    isMember: true,
  },
  parameters: {
    mockData: [mobileLinesMock, userDetailsMemberMock, mobileUsageLimitsMock, outOfBundleLimitsMock],
  },
};

export const mobileUsageLimitsLoadingError = {
  render: (args: MobileUsageLimitsComponent) => ({
    props: args,
  }),
  args: {
    isMember: false,
  },
  parameters: {
    mockData: [mobileLinesMock, userDetailsMock, mobileUsageLimitsErrorMock],
  },
};

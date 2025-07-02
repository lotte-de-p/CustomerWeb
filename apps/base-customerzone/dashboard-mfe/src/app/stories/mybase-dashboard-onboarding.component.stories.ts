import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { MyBaseDashboardComponent } from '@mybase-dashboard/feat-mybase-dashboard';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { DatePipe } from '@angular/common';

import mybaseDashboardOnboardingMock from '../../mock/mybase-dashboard-onboarding.mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import mybaseServiceMomentsMock from '../../mock/mybase-dashboard-service-moments.mock.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'MyBase Dashboard/Level 1/Dashboard',
  component: MyBaseDashboardComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
        DatePipe,
      ],
    }),
  ],
  parameters: {
    mockData: [mybaseDashboardOnboardingMock, userDetailsMock, mybaseServiceMomentsMock],
  },
} as Meta<MyBaseDashboardComponent>;

export const FullDashboardOnboardingNewUser = {
  render: (args: MyBaseDashboardComponent) => ({
    props: args,
  }),
  args: {
    billingUrl: 'https://billingUrl.com',
    payNowUrl: 'https://payNow.com',
    manageProductsMobileLink: 'https://mobile-link',
    manageProductsDTVLink: 'https://dtv-link',
    manageProductsInternetLink: 'https://internet-link',
    mobileUsagePageUrl: 'https://mobile-usage-page',
    internetUsagePageUrl: 'https://internet-usage-page',
    watchTvUrl: 'https://watch-tv',
    bestTariffUrl: 'https://best-tariff',
    easySwitchUrl: 'https://easy-switch',
    supportUrl: 'https://support',
    homeNetworkUrl: 'https://homeNetwork',
  },
};

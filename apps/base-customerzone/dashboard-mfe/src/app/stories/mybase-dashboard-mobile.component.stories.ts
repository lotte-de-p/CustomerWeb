import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import localeNlBe from '@angular/common/locales/nl-BE';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

import mybaseDashboardMobileLinesMock from '../../mock/mybase-dashboard-mobile-lines.mock.json';
import mybaseDashboardMobileMock from '../../mock/mybase-dashboard-mobile.mock.json';
import mybaseDashboardMobilePrepaidMock from '../../mock/mybase-dashboard-mobile-prepaid.mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import { MyBaseDashboardMobileComponent } from '@mybase-dashboard/feat-mybase-dashboard-mobile';
import { registerLocaleData } from '@angular/common';

const localhost = 'http://localhost:8080';

registerLocaleData(localeNlBe);

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'MyBase Dashboard/Level 2 - Mobile/Dashboard',
  component: MyBaseDashboardMobileComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'nl-BE' },
      ],
    }),
  ],
  parameters: {
    mockData: [
      mybaseDashboardMobileLinesMock,
      userDetailsMock,
      mybaseDashboardMobileMock,
      mybaseDashboardMobilePrepaidMock,
    ],
  },
} as Meta<MyBaseDashboardMobileComponent>;

export const FullDashboard = {
  render: (args: MyBaseDashboardMobileComponent) => ({
    props: args,
  }),
  args: {
    mobileUsageUrl: 'https://mobileUsageUrl.com',
    mobileUsageNotificationUrl: 'https://mobileUsageNotificationUrl.com',
    voicemailUrl: 'https://voicemailUrl',
    simManagementUrl: 'https://simManagementUrl',
    productOverviewUrl: 'https://productOverviewUrl',
    payByMobileUrl: 'https://payByMobileUrl',
    buyHardwareDiscountUrl: 'https://buyHardwareDiscountUrl',
    topupUrl: 'https://topupUrl',
    topupHistoryUrl: 'https://topupHistoryUrl',
    mobileUsageDetailsUrl: 'https://mobileUsageDetailsUrl',
    mobileUsageLimitsUrl: 'https://mobileUsageLimitsUrl',
    barringsUrl: 'https://barringsUrl',
  },
};

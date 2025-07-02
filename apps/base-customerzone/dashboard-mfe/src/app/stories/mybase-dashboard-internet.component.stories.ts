import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import localeNlBe from '@angular/common/locales/nl-BE';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

import mybaseDashboardInternetAddressesMock from '../../mock/mybase-dashboard-internet-addresses.mock.json';
import mybaseDashboardInternetMock from '../../mock/mybase-dashboard-internet.mock.json';
import mybaseDashboardInternetUnlimitedMock from '../../mock/mybase-dashboard-internet-unlimited.mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import { MyBaseDashboardInternetComponent } from '@mybase-dashboard/feat-mybase-dashboard-internet';
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
  title: 'MyBase Dashboard/Level 2 - Internet/Dashboard',
  component: MyBaseDashboardInternetComponent,
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
      mybaseDashboardInternetAddressesMock,
      userDetailsMock,
      mybaseDashboardInternetMock,
      mybaseDashboardInternetUnlimitedMock,
    ],
  },
} as Meta<MyBaseDashboardInternetComponent>;

export const FullDashboard = {
  render: (args: MyBaseDashboardInternetComponent) => ({
    props: args,
  }),
  args: {
    internetUsageUrl: 'http://www.internetUsage.com',
    homeNetworkUrl: 'https://homeNetwork',
    wifiPassportUrl: 'https://wifiPassport',
    internetUsageNotificationUrl: 'http://www.internetUsageNotificationUrl.com',
    speedTestUrl: 'http://www.speedTest.com',
    myDeviceUrl: 'http://www.myDeviceUrl.com',
    devicesUsingNetworkUrl: 'http://www.devicesUsingNetworkUrl.com',
    productOverviewUrl: 'http://www.productOverviewUrl.com',
    bestTariffUrl: 'https://best-tariff',
    easySwitchUrl: 'https://easy-switch',
    returnDeviceUrl: 'https://return-device',
  },
};

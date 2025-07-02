import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import localeNlBe from '@angular/common/locales/nl-BE';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';

import mybaseDashboardDtvMock from '../../mock/mybase-dashboard-dtv.mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import { MyBaseDashboardDtvComponent } from '@mybase-dashboard/feat-mybase-dashboard-dtv';
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
  title: 'MyBase Dashboard/Level 2 - DTV/Dashboard',
  component: MyBaseDashboardDtvComponent,
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
    mockData: [userDetailsMock, mybaseDashboardDtvMock],
  },
} as Meta<MyBaseDashboardDtvComponent>;

export const FullDashboard = {
  render: (args: MyBaseDashboardDtvComponent) => ({
    props: args,
  }),
  args: {
    manageContentPacksUrl: 'http://www.manageContentPacksUrl.com',
    watchTvOnlineUrl: 'http://www.watchTvOnlineUrl.com',
    manageYourDeviceUrl: 'http://www.manageYourDeviceUrl.com',
    addTvBoxUrl: 'http://www.addTvBoxUrl.com',
    returnDeviceUrl: 'http://www.returnDeviceUrl.com',
    productOverviewUrl: 'http://www.productOverviewUrl.com',
  },
};

import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ReturnDevicesOverviewComponent } from '@return-devices/feat-overview';

import userDetailsMock from '../mock/userdetails.json';
import getReturnDevicesMock from '../mock/get-return-devices.json';
import getReturnLabelMock from '../mock/get-return-label.json';
import getAddressSelectorMock from '../mock/addresses.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'omapi-url': localhost + '/omapi',
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'Return devices overview',
  component: ReturnDevicesOverviewComponent,
  declareComponent: false,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  parameters: {
    mockData: [userDetailsMock, getReturnDevicesMock, getReturnLabelMock, getAddressSelectorMock],
  },
} as Meta<ReturnDevicesOverviewComponent>;

export const Primary = {
  render: (args: ReturnDevicesOverviewComponent) => ({
    props: args,
  }),
  args: {
    returnPointUrl: localhost + '/returnPointUrl',
    telenetStoreUrl: localhost + '/telenetStoreUrl',
    imagePath: localhost + '/imagePath',
  },
};

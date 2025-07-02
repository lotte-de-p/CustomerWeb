import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { DtvBoxOverviewComponent } from '@entertainment/dtv-box-management/feat-dtv-box-overview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { provideHttpClient } from '@angular/common/http';

const userDetailsMock = require('../../mock/userdetails.json');
const addressesMock = require('../../mock/addresses.json');
const dtvSubscriptionsMock = require('../../mock/dtv-subscriptions.json');
const pinCodeResetMock = require('../../mock/reset-pin-code.json');

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'omapi-url': localhost + '/omapi',
  'oauth-url': localhost,
  'openid-url': localhost,
  'oauth-client-id': 'ocapi',
};

export default {
  title: 'DTV Box management overview',
  component: DtvBoxOverviewComponent,
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
    mockData: [userDetailsMock, addressesMock, pinCodeResetMock, ...(window['Cypress'] ? [] : [dtvSubscriptionsMock])],
  },
} as Meta<DtvBoxOverviewComponent>;

export const Primary = {
  render: (args: DtvBoxOverviewComponent) => ({
    props: args,
  }),
  args: {
    securityCode: '54654968712',
    imagePath: localhost + '/imagePath',
  },
};

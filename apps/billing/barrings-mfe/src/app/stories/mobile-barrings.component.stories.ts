import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { MobileBarringsComponent } from '@billing/mobile-barrings/feat-mobile-barrings';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Meta, applicationConfig } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import mobileBarringsMock from '../../mock/mobile-barrings.mock.json';
import mobileBarringsMock2 from '../../mock/mobile-barrings.mock-2.json';
import mobileLinesMock from '../../mock/mobile-lines-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import mobileBarringsMockSuspended from '../../mock/mobile-barrings-suspended-number.mock.json';
import mobileBarringsSave from '../../mock/mobile-barrings.mock-save.json';
import mobileBarringsSaveError from '../../mock/mobile-barrings.mock-save-error.json';
import mobileBarringsFraud from '../../mock/mobile-barrings.mock-fraud.json';

const localhost = 'http://localhost:8080';

window['Config'] = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
  'oauth-url': localhost,
  'oauth-client-id': 'ocapi',
};

export default {
  title: 'Mobile barrings',
  component: MobileBarringsComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
      ],
    }),
  ],
  parameters: {
    mockData: [
      userDetailsMock,
      mobileLinesMock,
      mobileBarringsMock,
      mobileBarringsMockSuspended,
      mobileBarringsFraud,
      mobileBarringsSave,
      mobileBarringsSaveError,
      mobileBarringsMock2,
    ],
  },
} as Meta<MobileBarringsComponent>;

export const MobileBarringsOverview = {
  render: (args: MobileBarringsComponent) => ({
    props: args,
  }),
  args: {},
};

import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentCardComponent } from '@product-journey/appointments/feat-appointment-card';

import userDetailsMock from '../../mock/userdetails-mock.json';
import omapi from '../../mock/omapi-TWOP0012.json';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import openAppointmentsMock from '../../mock/get-open-appointments-mock.json';

const localhost = 'http://localhost:8080';

// @ts-ignore
window['Config'] = {
  'ocapi-url': localhost,
  'omapi-url': localhost + '/omapi',
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'AppointmentCardComponent',
  component: AppointmentCardComponent,
  declareComponent: false,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(StoreModule.forRoot()),
        importProvidersFrom(EffectsModule.forRoot()),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        provideHttpClient(),
        { provide: 'Window', useValue: window },
      ],
    }),
  ],
  parameters: {
    mockData: [openAppointmentsMock, userDetailsMock, omapi],
  },
} as Meta<AppointmentCardComponent>;

export const Primary = {
  render: (args: AppointmentCardComponent) => ({
    props: args,
  }),
  args: {},
};

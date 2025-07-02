import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { Meta, applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { MyBaseServiceMomentsComponent } from '@mybase-dashboard/ui';
import { ServiceMomentsType } from '@mybase-dashboard/data-access';
import { DatePipe } from '@angular/common';

const SIM_ACTIVATION_URL = 'https://sim-activation';
const ESIM_ACTIVATION_URL = 'https://esim-activation';
const APPOINTMENT_URL = 'https://appointmentUrl';

export default {
  title: 'MyBase Dashboard/Level 1/Service moments',
  component: MyBaseServiceMomentsComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div class="row"><div class="col-12">${story}</div></div>`),
    applicationConfig({
      providers: [
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        { provide: LOCALE_ID, useValue: 'en' },
        DatePipe,
      ],
    }),
  ],
} as Meta<MyBaseServiceMomentsComponent>;

export const SimActivation = {
  render: (args: MyBaseServiceMomentsComponent) => ({
    props: args,
  }),
  args: {
    simActivationUrl: SIM_ACTIVATION_URL,
    eSimActivationUrl: ESIM_ACTIVATION_URL,
    data: [{ type: ServiceMomentsType.SIM_ACTIVATION, msisdn: '0470123456' }],
  },
};

export const ESimActivation = {
  render: (args: MyBaseServiceMomentsComponent) => ({
    props: args,
  }),
  args: {
    simActivationUrl: SIM_ACTIVATION_URL,
    eSimActivationUrl: ESIM_ACTIVATION_URL,
    data: [{ type: ServiceMomentsType.ESIM_ACTIVATION, msisdn: '0470123456' }],
  },
};

export const PlannedAppointment = {
  render: (args: MyBaseServiceMomentsComponent) => ({
    props: args,
  }),
  args: {
    data: [
      {
        type: ServiceMomentsType.APPOINTMENT,
        timeslot: {
          start: '2024-04-24T12:30:00+02:00',
          end: '2024-04-24T18:00:00+02:00',
        },
      },
    ],
    appointmentUrl: APPOINTMENT_URL,
  },
};

export const UnplannedAppointment = {
  render: (args: MyBaseServiceMomentsComponent) => ({
    props: args,
  }),
  args: {
    data: [
      {
        type: ServiceMomentsType.APPOINTMENT,
      },
    ],
    appointmentUrl: APPOINTMENT_URL,
  },
};

export const TwoServiceMoments = {
  render: (args: MyBaseServiceMomentsComponent) => ({
    props: args,
  }),
  args: {
    data: [
      {
        type: ServiceMomentsType.SIM_ACTIVATION,
        msisdn: '0470123456',
      },
      {
        type: ServiceMomentsType.APPOINTMENT,
        timeslot: {
          start: '2024-04-24T12:30:00+02:00',
          end: '2024-04-24T18:00:00+02:00',
        },
      },
    ],
    appointmentUrl: APPOINTMENT_URL,
    simActivationUrl: SIM_ACTIVATION_URL,
  },
};

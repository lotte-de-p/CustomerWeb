import { applicationConfig, Meta } from '@storybook/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppointmentsOverviewComponent } from '@product-journey/appointments/feat-overview';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import appointmentsMock from '../../mock/get-appointments-mock.json';
import userDetailsMock from '../../mock/userdetails-mock.json';
import availableTimeSlotsMock from '../../mock/get-available-time-slots.json';
import availableTimeSlotsErrorMock from '../../mock/get-available-time-slots-error.json';
import emptyAvailableTimeSlotsMock from '../../mock/no-available-time-slots.json';
import updateContactDetailsMock from '../../mock/update-contact-details.json';
import failUpdateContactDetailsMock from '../../mock/fail-update-contact-details.json';
import rescheduleAppointmentMock from '../../mock/reschedule-appointment.json';
import failRescheduleAppointmentMock from '../../mock/fail-reschedule-appointment.json';
import cancelAppointment from '../../mock/cancel-appointment.json';
import failCancelAppointment from '../../mock/fail-cancel-appointment.json';
import rescheduleSuccess from '../../mock/reschedule-appointment-success.json';
import outdoorAppointment from '../../mock/outdoor-appointment.json';
import omapi from '../../mock/omapi-TWOP0012.json';
import infoUrlMock from '../../mock/info-url.json';
import fiberInformationUrlMock from '../../mock/fiber-info-url.json';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

const localhost = 'http://localhost:8080';
const informationUrl = localhost + '/infoUrl.html';
const fiberInformationUrl = localhost + '/fiber-infoUrl.html';

// @ts-ignore
window['Config'] = {
  'ocapi-url': localhost,
  'omapi-url': localhost + '/omapi',
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
};

export default {
  title: 'AppointmentsOverviewComponent',
  component: AppointmentsOverviewComponent,
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
    mockData: [
      appointmentsMock,
      userDetailsMock,
      availableTimeSlotsMock,
      emptyAvailableTimeSlotsMock,
      updateContactDetailsMock,
      failUpdateContactDetailsMock,
      rescheduleAppointmentMock,
      failRescheduleAppointmentMock,
      cancelAppointment,
      failCancelAppointment,
      outdoorAppointment,
      omapi,
      infoUrlMock,
      rescheduleSuccess,
      fiberInformationUrlMock,
    ],
  },
} as Meta<AppointmentsOverviewComponent>;

export const Primary = {
  render: (args: AppointmentsOverviewComponent) => ({
    props: args,
  }),
  args: {
    allowFiberRepairChanges: false,
    usefulInformationInstallUrl: informationUrl,
    usefulInformationMoveUrl: informationUrl,
    usefulInformationRepairUrl: informationUrl,
    postInstallationInstructionMoveUrl: informationUrl,
    postInstallationInstructionRepairUrl: informationUrl,
    postInstallationInstructionInstallUrl: informationUrl,
    usefulInformationFiberInstallUrl: fiberInformationUrl,
    usefulInformationFiberMoveUrl: fiberInformationUrl,
    usefulInformationFiberRepairUrl: fiberInformationUrl,
    postInstallationInstructionFiberMoveUrl: fiberInformationUrl,
    postInstallationInstructionFiberRepairUrl: fiberInformationUrl,
    postInstallationInstructionFiberInstallUrl: fiberInformationUrl,
  },
};

export const AppointmentBookingError = {
  render: (args: AppointmentsOverviewComponent) => ({
    props: args,
  }),
  parameters: {
    mockData: [
      availableTimeSlotsErrorMock,
      appointmentsMock,
      userDetailsMock,
      emptyAvailableTimeSlotsMock,
      updateContactDetailsMock,
      failUpdateContactDetailsMock,
      rescheduleAppointmentMock,
      failRescheduleAppointmentMock,
      cancelAppointment,
      failCancelAppointment,
      omapi,
      infoUrlMock,
      outdoorAppointment,
    ],
  },
};

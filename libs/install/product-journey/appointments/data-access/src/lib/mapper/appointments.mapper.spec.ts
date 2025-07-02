import { TestBed } from '@angular/core/testing';
import { AppointmentsMapper } from './appointments.mapper';
import {
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  NotificationMethodEnum,
  PeriodOfDayEnum,
} from '../entities/raw-appointment.model';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { jest } from '@jest/globals';

describe('AppointmentsMapper', () => {
  let appointmentsMapper: AppointmentsMapper;
  let omapiProductMapper: OmapiProductMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsMapper, { provide: 'Window', useValue: {} }],
    });
    appointmentsMapper = TestBed.inject(AppointmentsMapper);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  it('should map appointments', () => {
    jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue({ name: 'Internet' } as OmapiProduct);
    const appointments = appointmentsMapper.toModel([
      {
        appointmentId: 'TI_1518555414_20230731_112415',
        appointmentType: AppointmentTypeEnum.MOVE,
        appointmentSubType: '',
        appointmentStatus: AppointmentStatusEnum.NEW,
        appointmentDate: '2023-10-10',
        customer: {
          contactName: 'Mr. Lucas Romeijnder',
          language: 'NL',
          notificationMethod: NotificationMethodEnum.SMS,
          notificationContact: 'rubbish',
        },
        timeSlot: {
          periodOfDay: PeriodOfDayEnum.MI,
          startTime: '10:00',
          endTime: '14:30',
        },
        cableAppointment: false,
        fiberAppointment: false,
        salesOrderId: '9167375606013226000',
        cost: '102.8500',
        address: {
          locationId: '9169507398513822922',
          street: 'Pareipoelstraat',
          houseNumber: '12',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        products: [
          {
            specurl: 'https://api.telenet.be/omapi/public/product/TWOP0013',
          },
        ],
        installationDateAtNewAddress: '2023-09-05T22:00:00Z',
      },
    ]);

    expect(appointments).toEqual([
      {
        address: {
          locationId: '9169507398513822922',
          boxNumber: '',
          city: 'Mechelen',
          country: 'België',
          countryCode: 'BE',
          houseNumber: '12',
          street: 'Pareipoelstraat',
          zip: '2800',
        },
        appointmentDate: '2023-10-10',
        appointmentId: 'TI_1518555414_20230731_112415',
        appointmentStatus: 'NEW',
        appointmentSubType: '',
        appointmentType: 'MOVE',
        cableAppointment: false,
        cost: '102.85',
        customer: {
          contactName: 'Lucas Romeijnder',
          language: 'NL',
          notificationContact: 'rubbish',
          notificationMethod: 'SMS',
        },
        fiberAppointment: false,
        getDisplayStatus: 'SCHEDULED',
        installationDateAtNewAddress: '2023-09-05T22:00:00Z',
        isCompletedOrCancelledAppointment: false,
        isNewAppointment: false,
        isRepairAppointment: false,
        isScheduledAppointment: false,
        isUpcomingAppointment: true,
        isAppointmentInWait: false,
        isPostponedAppointmentNeedsReschedule: false,
        productsInfo: [
          {
            name: 'Internet',
          },
        ],
        salesOrderId: '9167375606013226000',
        timeSlot: {
          endTime: '14:30',
          periodOfDay: 'MI',
          startTime: '10:00',
        },
      },
    ]);
  });

  it('should map appointments with undefined cost and contact names updated', () => {
    const appointments = appointmentsMapper.toModel([
      {
        address: {
          locationId: '9169507398513822922',
          street: 'Pareipoelstraat',
          houseNumber: '12',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        installationDateAtNewAddress: '2023-11-05T22:00:00Z',
        appointmentId: 'TI_1518555414_20230731_112954',
        appointmentType: AppointmentTypeEnum.MOVE,
        appointmentStatus: AppointmentStatusEnum.NEW,
        customer: {
          contactName: 'Mr. Test Romeijnder',
          language: 'NL',
          notificationMethod: NotificationMethodEnum.SMS,
          notificationContact: 'rubbish',
        },
      },
      {
        address: {
          locationId: '9169507398513822922',
          street: 'Pareipoelstraat',
          houseNumber: '12',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        installationDateAtNewAddress: '2023-08-05T22:00:00Z',
        appointmentId: 'TI_1518555414_20230731_112955',
        appointmentType: AppointmentTypeEnum.MOVE,
        cost: '50.7500',
        appointmentStatus: AppointmentStatusEnum.NEW,
        customer: {
          contactName: 'Mrs. Anna Romeijnder',
          language: 'NL',
          notificationMethod: NotificationMethodEnum.SMS,
          notificationContact: 'rubbish',
        },
      },
    ]);
    expect(appointments.length).toEqual(2);
    expect(appointments[0].cost).toEqual(undefined);
    expect(appointments[0].customer?.contactName).toEqual('Test Romeijnder');
    expect(appointments[1].cost).toEqual('50.75');
    expect(appointments[1].customer?.contactName).toEqual('Anna Romeijnder');
  });
});

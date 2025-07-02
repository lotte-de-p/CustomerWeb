import { TestBed } from '@angular/core/testing';
import { AppointmentsService } from './appointments.service';
import { firstValueFrom, of, throwError } from 'rxjs';
import { expect, jest } from '@jest/globals';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { AppointmentsMapper } from '../mapper/appointments.mapper';
import { AppointmentStatusEnum, AppointmentTypeEnum, PeriodOfDayEnum } from '../entities/raw-appointment.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { RawAvailableTimeslot, TimeSlotEnum } from '../entities/raw-available.timeslot';
import { AvailableTimeSlotsMapper } from '../mapper/available-time-slots.mapper';
import { CustomerInterface, SelectedTimeSlot } from '../entities/appointment.model';
import { SuccessMapper } from '../mapper/success-mapper';
import { MessageService } from '@telenet/ng-lib-message';
import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { AvailableTimeSlots } from '../entities/available.timeslots';
import { OutdoorAppointmentMapper } from '../mapper/outdoor-appointment.mapper';
import dayjs from 'dayjs';

function createError(status: number, code: string, message: string): HttpErrorResponse {
  return {
    headers: new HttpHeaders(),
    message: '',
    name: 'HttpErrorResponse',
    ok: false,
    status: 400,
    statusText: '',
    type: HttpEventType.ResponseHeader,
    url: '',
    error: {
      status: status,
      source: 'USP',
      code: code,
      message: message,
    },
  } as HttpErrorResponse;
}

function createCallConfig(): OcapiCallConfig<RawAvailableTimeslot[], AvailableTimeSlots[]> {
  return {
    messageGroupName: 'appointments',
  } as OcapiCallConfig<RawAvailableTimeslot[], AvailableTimeSlots[]>;
}

describe('AppointmentsService', () => {
  let service: AppointmentsService;
  let ocapiService: OcapiService;
  let appointmentsMapper: AppointmentsMapper;
  let messageService: MessageService;

  const NO_TIMESLOT_ERROR = 'Availabilities-023';
  const LOCALHOST = 'http://localhost:8080';
  const AVAILABLE_TIMESLOT_MESSAGE_GROUP = 'available time slot';
  const NO_TIMESLOT_ERROR_MESSAGE = 'No time slots available for this date. Please try another date.';
  const DATE_FORMAT = 'YYYY-MM-DD';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppointmentsService);
    ocapiService = TestBed.inject(OcapiService);
    appointmentsMapper = TestBed.inject(AppointmentsMapper);
    messageService = TestBed.inject(MessageService);
  });

  describe(`when get appointment is called`, () => {
    it('should get appointments without status', async () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(
        of([
          {
            appointmentId: 'T1_123',
            appointmentType: AppointmentTypeEnum.INSTALL,
            appointmentStatus: AppointmentStatusEnum.COMPLETED,
            appointmentDate: '2023-10-12',
          },
          {
            appointmentId: 'T1_456',
            appointmentType: AppointmentTypeEnum.INSTALL,
            appointmentStatus: AppointmentStatusEnum.NEW,
            appointmentDate: '2023-10-10',
            timeSlot: {
              periodOfDay: PeriodOfDayEnum.MI,
              startTime: '10:00',
              endTime: '14:30',
            },
          },
        ])
      );
      const appointments = await firstValueFrom(service.getAppointments());
      expect(appointments.length).toBe(2);
      expect(appointments[0].appointmentId).toBe('T1_123');
      expect(appointments[1].appointmentId).toBe('T1_456');
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig('appointments', '/public/api/appointments-service/v1/appointments', appointmentsMapper)
      );
    });

    it('should get appointments with status', async () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(
        of([
          {
            appointmentId: 'T1_456',
            appointmentType: AppointmentTypeEnum.INSTALL,
            appointmentStatus: AppointmentStatusEnum.NEW,
            appointmentDate: '2023-10-10',
            timeSlot: {
              periodOfDay: PeriodOfDayEnum.MI,
              startTime: '10:00',
              endTime: '14:30',
            },
          },
        ])
      );
      const appointments = await firstValueFrom(service.getAppointments('OPEN'));
      expect(appointments.length).toBe(1);
      expect(appointments[0].appointmentId).toBe('T1_456');
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          'appointments',
          '/public/api/appointments-service/v1/appointments?status=OPEN',
          appointmentsMapper
        )
      );
    });
  });

  describe(`when get available time slots is called`, () => {
    it('should get available time slots', async () => {
      const windowSpy = jest.spyOn(global, 'window', 'get');
      // @ts-ignore
      windowSpy.mockImplementation(() => ({
        Config: {
          'ocapi-url': LOCALHOST,
        },
      }));
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(
        of([
          {
            date: '2023-10-30',
            timeSlots: [
              {
                availabilityId: '1234',
                timeSlotCode: TimeSlotEnum.AM,
                specUrl: 'omapi/456',
              },
            ],
          },
        ])
      );
      const timeSlots = await firstValueFrom(service.getAvailableTimeSlots('10-10-2023', '1234'));
      expect(timeSlots.length).toBe(1);
      expect(timeSlots[0].date).toBe('2023-10-30');
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: AVAILABLE_TIMESLOT_MESSAGE_GROUP,
          endpoint: '/public/api/appointments-service/v1/appointments/1234/available-time-slots',
          mapper: AvailableTimeSlotsMapper,
        })
      );
    });

    it('should call available time slots only ones when Availabilities-023 error is thrown for different date', async () => {
      const windowSpy = jest.spyOn(global, 'window', 'get');
      // @ts-ignore
      windowSpy.mockImplementation(() => ({
        Config: {
          'ocapi-url': LOCALHOST,
        },
      }));
      const mockErrorResponse = createError(400, NO_TIMESLOT_ERROR, NO_TIMESLOT_ERROR_MESSAGE);

      jest.spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => mockErrorResponse));

      const timeSlots = await firstValueFrom(service.getAvailableTimeSlots('04-07-2024', '1234'));
      expect(timeSlots).toEqual([]);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: AVAILABLE_TIMESLOT_MESSAGE_GROUP,
          endpoint: '/public/api/appointments-service/v1/appointments/1234/available-time-slots',
          mapper: AvailableTimeSlotsMapper,
        })
      );
      expect(ocapiService.doGet).toHaveBeenCalledTimes(1);
    });

    it('should call available time slots multiple time when Availabilities-023 error is thrown for current date', async () => {
      const windowSpy = jest.spyOn(global, 'window', 'get');
      jest.useFakeTimers().setSystemTime(new Date('2024-07-07'));
      // @ts-ignore
      windowSpy.mockImplementation(() => ({
        Config: {
          'ocapi-url': 'http://uat.telenet:8080',
        },
      }));
      const mockErrorResponse = createError(400, NO_TIMESLOT_ERROR, NO_TIMESLOT_ERROR_MESSAGE);

      jest
        .spyOn(ocapiService, 'doGet')
        .mockReturnValueOnce(throwError(() => mockErrorResponse))
        .mockReturnValueOnce(throwError(() => mockErrorResponse))
        .mockReturnValueOnce(throwError(() => mockErrorResponse))
        .mockReturnValue(of([]));

      const today = dayjs().format(DATE_FORMAT);
      const timeSlots = await firstValueFrom(service.getAvailableTimeSlots(today, '1234'));
      expect(timeSlots).toEqual([]);

      const expectedCalls = [
        `/public/api/appointments-service/v1/appointments/1234/available-time-slots?startDate=${today}`,
        `/public/api/appointments-service/v1/appointments/1234/available-time-slots?startDate=${dayjs(today).add(13, 'days').format(DATE_FORMAT)}`,
        `/public/api/appointments-service/v1/appointments/1234/available-time-slots?startDate=${dayjs(today).add(26, 'days').format(DATE_FORMAT)}`,
        `/public/api/appointments-service/v1/appointments/1234/available-time-slots?startDate=${dayjs(today).add(39, 'days').format(DATE_FORMAT)}`,
      ];
      expectedCalls.forEach((call, index) => {
        expect(ocapiService.doGet).toHaveBeenNthCalledWith(
          index + 1,
          expect.objectContaining({
            messageGroupName: AVAILABLE_TIMESLOT_MESSAGE_GROUP,
            endpoint: call,
            mapper: AvailableTimeSlotsMapper,
          })
        );
      });
      expect(ocapiService.doGet).toHaveBeenCalledTimes(4);
    });

    it('should call available time slots multiple time when error is thrown', (done) => {
      const windowSpy = jest.spyOn(global, 'window', 'get');
      // @ts-ignore
      windowSpy.mockImplementation(() => ({
        Config: {
          'ocapi-url': LOCALHOST,
        },
      }));
      const mockErrorResponse = createError(400, 'Availabilities-018', 'It is not possible to generate expired code');

      jest.spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => mockErrorResponse));

      service.getAvailableTimeSlots('04-08-2024', '12345').subscribe({
        error: (error) => {
          expect(error).toEqual(
            expect.objectContaining({
              error: expect.objectContaining({
                code: 'Availabilities-018',
                message: 'It is not possible to generate expired code',
                source: 'USP',
                status: 400,
              }),
            })
          );
          done();
        },
      });
    });
  });

  it('should update the contact details', async () => {
    jest.spyOn(ocapiService, 'doPut').mockReturnValue(of({}));

    service.updateContactDetails({} as CustomerInterface, '1234');

    expect(ocapiService.doPut).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        endpoint: '/public/api/appointments-service/v1/appointments/1234/contactdetails',
        mapper: SuccessMapper,
        data: {} as CustomerInterface,
      })
    );
  });

  it('should reschedule appointment', async () => {
    jest.spyOn(ocapiService, 'doPut').mockReturnValue(of({}));

    service.rescheduleTimeSlot({} as SelectedTimeSlot, '1234');

    expect(ocapiService.doPut).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        endpoint: '/public/api/appointments-service/v1/appointments/1234/reschedule',
        mapper: SuccessMapper,
        data: {} as SelectedTimeSlot,
      })
    );
  });

  it('should cancel appointment', async () => {
    jest.spyOn(ocapiService, 'doDelete').mockReturnValue(of({}));

    service.cancelAppointment('1234');

    expect(ocapiService.doDelete).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        endpoint: '/public/api/appointments-service/v1/appointments/1234',
        mapper: SuccessMapper,
      })
    );
  });

  it('should retreive outdoor appointment', async () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));

    service.getOutdoorAppointment();

    expect(ocapiService.doGet).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        endpoint: '/public/api/appointments-service/v1/appointments/fiber-access',
        mapper: OutdoorAppointmentMapper,
      })
    );
  });

  it('should handle ERR_USP_125 error', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(400, 'ERR_USP_125', "Timeslots can't be returned as Appointment Booking not allowed");

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        key: 'appointments.ERR_USP_125.booking-not-allowed',
      })
    );
  });

  it('should handle Availabilities-004 error', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(409, 'Availabilities-004', 'Availability does not exists');

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        key: 'appointments.Availabilities-004.availability-does-not-exists',
      })
    );
  });

  it('should handle Availabilities-005 error', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(409, 'Availabilities-005', 'Availability code is already expired.');

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        key: 'appointments.Availabilities-005.availability-code-expired',
      })
    );
  });

  it('should handle Availabilities-023 error', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(400, NO_TIMESLOT_ERROR, NO_TIMESLOT_ERROR_MESSAGE);

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).not.toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        key: 'appointments.Availabilities-023.not-possible-generate-availabilities',
      })
    );
  });

  it('should handle Reservations-005 error', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(
      409,
      'Reservations-005',
      'Scheduling of appointment failed. Please reload the page, choose a time slot again and request the appointment'
    );

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        messageGroupName: 'appointments',
        key: 'appointments.Reservations-005.scheduling-appointment-failure',
      })
    );
  });

  it('should create default message for unmapped error codes', async () => {
    jest.spyOn(messageService, 'addMessage');

    const error = createError(409, 'Unmapped-987', 'Unmapped error code');

    const ocapiCall = createCallConfig();

    service.handleOcapiError(error, ocapiCall);

    expect(messageService.addMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        _messageGroupName: 'appointments',
        _key: 'appointment.400',
      })
    );
  });
});

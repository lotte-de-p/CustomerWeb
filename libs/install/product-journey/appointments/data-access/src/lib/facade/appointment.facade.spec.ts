import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppointmentFacade } from './appointment.facade';
import { EffectsModule } from '@ngrx/effects';
import {
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  NotificationMethodEnum,
  PeriodOfDayEnum,
} from '../entities/raw-appointment.model';
import { AppointmentsService } from '../infrastructure/appointments.service';
import { of, skip, throwError } from 'rxjs';
import { AppointmentNgrxModule } from '../+state/appointment-ngrx.module';
import { Appointment } from '../entities/appointment.model';
import { TimeSlotEnum } from '../entities/raw-available.timeslot';
import { AppointmentDatalayerService } from '../infrastructure/appointment-datalayer.service';

describe('AppointmentFacade', () => {
  let facade: AppointmentFacade;
  let appointmentsService: AppointmentsService;

  const TIMESLOTS = [
    {
      date: '2023-10-30',
      timeSlots: [
        {
          availabilityId: '1234',
          timeSlotCode: TimeSlotEnum.AM,
          specUrl: 'omapi/123',
        },
        {
          availabilityId: '4567',
          timeSlotCode: TimeSlotEnum.MI,
          specUrl: 'omapi/456',
        },
      ],
    },
  ];

  const APPOINTMENTS: Appointment[] = [
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
    {
      appointmentId: 'T1_789',
      appointmentType: AppointmentTypeEnum.INSTALL,
      appointmentStatus: AppointmentStatusEnum.NEW,
      appointmentDate: '2023-10-15',
      timeSlot: {
        periodOfDay: PeriodOfDayEnum.MI,
        startTime: '10:00',
        endTime: '14:30',
      },
    },
  ];

  const SUCCESS_RESPONSE = { status: 204 };

  const OUTDOOR_APPOINTMENT = {
    locationIds: ['9169507398513822922'],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), AppointmentNgrxModule],
      providers: [
        AppointmentFacade,
        {
          provide: AppointmentsService,
          useValue: {
            getAppointments: jest.fn(),
            getAvailableTimeSlots: jest.fn(),
            updateContactDetails: jest.fn(),
            rescheduleTimeSlot: jest.fn(),
            cancelAppointment: jest.fn(),
            getOutdoorAppointment: jest.fn(),
          },
        },
        {
          provide: AppointmentDatalayerService,
          useValue: {
            sendRescheduleStartEvent: jest.fn(),
            sendRescheduleEndEvent: jest.fn(),
            sendCancelAppointmentEvent: jest.fn(),
            sendUpdateContactMethodEvent: jest.fn(),
          },
        },
        { provide: 'Window', useValue: {} },
      ],
    });
    facade = TestBed.inject(AppointmentFacade);
    appointmentsService = TestBed.inject(AppointmentsService);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe(`when loadAppointments is called`, () => {
    it('should fetch all appointments', (done) => {
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      facade.appointments$.pipe(skip(1)).subscribe((appointments) => {
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(appointments).toEqual(APPOINTMENTS);
        done();
      });

      facade.loadAppointments();
    });

    it('should fetch the completed appointments', (done) => {
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      facade.completedAppointments$.pipe(skip(1)).subscribe((appointments) => {
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(appointments).toEqual([APPOINTMENTS[0]]);
        done();
      });

      facade.loadAppointments();
    });

    it('should fetch the open appointments', (done) => {
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      facade.openAppointments$.pipe(skip(1)).subscribe((appointments) => {
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(appointments).toEqual([APPOINTMENTS[2], APPOINTMENTS[1]]);
        done();
      });

      facade.loadAppointments();
    });

    it('should set the selected appointment', (done) => {
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');

      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      facade.selectedAppointment$.pipe(skip(1)).subscribe((appointments) => {
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(appointments).toEqual(APPOINTMENTS[2]);
        done();
      });

      facade.loadAppointments();
    });

    it('should set the appointment', (done) => {
      facade.selectedAppointment$.pipe(skip(1)).subscribe((appointments) => {
        expect(appointments).toEqual(APPOINTMENTS[2]);
        done();
      });

      facade.setSelectAppointment(APPOINTMENTS[2]);
    });

    it('should set the error when get appointments throws error', (done) => {
      const error = new Error('Error');

      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(throwError(() => error));

      facade.appointmentError$.pipe(skip(1)).subscribe((error) => {
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(error).toEqual(error);
        done();
      });

      facade.loadAppointments();
    });
  });

  describe(`when loadOpenAppointments is called`, () => {
    it('should fetch open appointments', (done) => {
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      facade.openAppointments$.pipe(skip(1)).subscribe((appointments) => {
        expect(getAppointmentsSpy).toHaveBeenCalledWith('OPEN');
        expect(appointments).toEqual([APPOINTMENTS[2], APPOINTMENTS[1]]);
        done();
      });

      facade.loadOpenAppointments();
    });
  });

  describe(`when getAvailableTimeSlots is called`, () => {
    it('should set the availableTimeSlots', (done) => {
      const getAvailableTimeSlotsSpy = jest.spyOn(appointmentsService, 'getAvailableTimeSlots');

      getAvailableTimeSlotsSpy.mockReturnValue(of(TIMESLOTS));

      facade.availableTimeSlots$.pipe(skip(1)).subscribe((availableTimeSlots) => {
        expect(getAvailableTimeSlotsSpy).toHaveBeenCalledWith('2023-02-11', '1234');
        expect(availableTimeSlots).toEqual(TIMESLOTS);
        done();
      });

      facade.getAvailableTimeSlots(new Date('02-11-2023'), '1234');
    });

    it('should set the error for availableTimeSlots', (done) => {
      const error = new Error('Error');
      const getAvailableTimeSlotsSpy = jest.spyOn(appointmentsService, 'getAvailableTimeSlots');

      getAvailableTimeSlotsSpy.mockReturnValue(throwError(() => error));

      facade.availableTimeSlotError$.pipe(skip(1)).subscribe((error) => {
        expect(getAvailableTimeSlotsSpy).toHaveBeenCalledWith('2023-02-11', '1234');
        expect(error).toEqual(error);
        done();
      });

      facade.getAvailableTimeSlots(new Date('02-11-2023'), '1234');
    });
  });

  describe(`when updateContactDetail is called`, () => {
    it('should set the isSaveContactSuccess', (done) => {
      const getAvailableTimeSlotsSpy = jest.spyOn(appointmentsService, 'updateContactDetails');
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      getAvailableTimeSlotsSpy.mockReturnValue(of(SUCCESS_RESPONSE));

      facade.selectedAppointment$.pipe(skip(1)).subscribe((state) => {
        expect(getAvailableTimeSlotsSpy).toHaveBeenCalled();
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(state?.isSaveContactSuccess).toEqual(true);
        done();
      });

      facade.updateContactDetail(
        {
          contactName: 'test',
          language: 'NL',
          notificationMethod: NotificationMethodEnum.VOICE,
          notificationContact: '0465124545',
        },
        '1234'
      );
    });
  });

  describe(`when rescheduleAppointment is called`, () => {
    it('should set the isRescheduleAppointmentSuccess', (done) => {
      const rescheduleTimeSlotSpy = jest.spyOn(appointmentsService, 'rescheduleTimeSlot');
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');

      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      rescheduleTimeSlotSpy.mockReturnValue(of(SUCCESS_RESPONSE));

      facade.selectedAppointment$.pipe(skip(1)).subscribe((state) => {
        expect(rescheduleTimeSlotSpy).toHaveBeenCalled();
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(state?.isRescheduleAppointmentSuccess).toEqual(false);
        expect(state?.isScheduleAppointmentSuccess).toEqual(true);
        done();
      });

      facade.rescheduleAppointment(
        {
          appointmentType: AppointmentTypeEnum.REPAIR,
          availabilityId: '9876',
          date: '10/10/2023',
        },
        '1234'
      );
    });
  });

  describe(`when cancelAppointment is called`, () => {
    it('should set the isAppointmentCancellationSuccess', (done) => {
      const cancelAppointmentSpy = jest.spyOn(appointmentsService, 'cancelAppointment');
      const getAppointmentsSpy = jest.spyOn(appointmentsService, 'getAppointments');
      getAppointmentsSpy.mockReturnValue(of(APPOINTMENTS));

      cancelAppointmentSpy.mockReturnValue(of(SUCCESS_RESPONSE));

      facade.selectedAppointment$.pipe(skip(1)).subscribe((state) => {
        expect(cancelAppointmentSpy).toHaveBeenCalled();
        expect(getAppointmentsSpy).toHaveBeenCalled();
        expect(state?.isAppointmentCancellationSuccess).toEqual(true);
        done();
      });

      facade.cancelAppointment('1234');
    });
  });

  describe('loadOutdoorAppointment', () => {
    it('should fetch all outdoor appointments for FA enabled', (done) => {
      jest.spyOn(appointmentsService, 'getOutdoorAppointment').mockReturnValue(of(OUTDOOR_APPOINTMENT));

      facade.outdoorAppointment$.pipe(skip(1)).subscribe((outdoorAppointment) => {
        expect(appointmentsService.getOutdoorAppointment).toHaveBeenCalled();
        expect(outdoorAppointment).toEqual(OUTDOOR_APPOINTMENT);
        done();
      });

      facade.loadOutdoorAppointment();
    });
  });
});

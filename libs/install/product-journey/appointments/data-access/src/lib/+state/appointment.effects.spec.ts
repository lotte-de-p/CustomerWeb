import { Actions } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppointmentEffects } from './appointment.effects';
import { AppointmentsService } from '../infrastructure/appointments.service';
import { of, throwError } from 'rxjs';
import { AppointmentStatusEnum, AppointmentTypeEnum } from '../entities/raw-appointment.model';
import {
  cancelAppointmentSuccessAction,
  getAppointmentsSuccessAction,
  getAvailableTimeSlotsErrorAction,
  getAvailableTimeSlotsSuccessAction,
  getErrorAction,
  getOutdoorAppointmentErrorAction,
  getOutdoorAppointmentSuccessAction,
  rescheduleAppointmentSuccessAction,
  updateAppointmentSuccessAction,
} from './appointment.actions';
import { TimeSlotEnum } from '../entities/raw-available.timeslot';

describe('AppointmentEffects', () => {
  let actions$: Actions;
  let effects: AppointmentEffects;
  let service: AppointmentsService;

  const APPOINTMENT = [
    {
      appointmentId: 'T1_123',
      appointmentType: AppointmentTypeEnum.INSTALL,
      appointmentStatus: AppointmentStatusEnum.NEW,
    },
    {
      appointmentId: 'T1_456',
      appointmentType: AppointmentTypeEnum.REPAIR,
      appointmentStatus: AppointmentStatusEnum.NEW,
    },
  ];

  const TIME_SLOTS = [
    {
      date: '2023-10-30',
      timeSlots: [
        {
          availabilityId: '1234',
          timeSlotCode: TimeSlotEnum.AM,
          specUrl: 'omapi/456',
        },
        {
          availabilityId: '4567',
          timeSlotCode: TimeSlotEnum.MI,
          specUrl: 'omapi/123',
        },
      ],
    },
  ];

  const OUTDOOR_APPOINTMENT = {
    locationIds: ['9169507398513822922'],
  };

  const SUCCESS_RESPONSE = { status: 204 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppointmentEffects,
        MockProvider(AppointmentsService),
        provideMockActions(() => actions$),
        { provide: 'Window', useValue: {} },
      ],
    });
    effects = TestBed.inject(AppointmentEffects);
    service = TestBed.inject(AppointmentsService);
  });

  describe('appointments$', () => {
    it('should trigger getAppointmentsSuccessAction', (done) => {
      jest.spyOn(service, 'getAppointments').mockReturnValue(of(APPOINTMENT));
      actions$ = of({ type: '[appointment] get appointments' });
      effects.appointments$.subscribe((action) => {
        expect(action).toEqual(getAppointmentsSuccessAction({ appointments: APPOINTMENT }));
        done();
      });
    });

    it('should dispatch getErrorAction in getAppointments', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAppointments').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] get appointments' });

      effects.appointments$.subscribe((action) => {
        expect(action).toEqual(getErrorAction({ error }));
        done();
      });
    });
  });

  describe('openAppointments$', () => {
    it('should trigger getAppointmentsSuccessAction', (done) => {
      jest.spyOn(service, 'getAppointments').mockReturnValue(of(APPOINTMENT));
      actions$ = of({ type: '[appointment] get open appointments' });
      effects.openAppointments$.subscribe((action) => {
        expect(action).toEqual(getAppointmentsSuccessAction({ appointments: APPOINTMENT }));
        done();
      });
    });

    it('should dispatch getErrorAction in getOpenAppointments', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAppointments').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] get open appointments' });

      effects.openAppointments$.subscribe((action) => {
        expect(action).toEqual(getErrorAction({ error }));
        done();
      });
    });
  });

  describe('updateContactDetail$', () => {
    it('should trigger updateAppointmentSuccessAction', (done) => {
      jest.spyOn(service, 'updateContactDetails').mockReturnValue(of(SUCCESS_RESPONSE));
      jest.spyOn(service, 'getAppointments').mockReturnValue(of([]));
      actions$ = of({ type: '[appointment] updateContactDetail' });
      effects.updateContactDetail$.subscribe((action) => {
        expect(action).toEqual(updateAppointmentSuccessAction());
        done();
      });
    });

    it('should dispatch getErrorAction in updateContactDetails', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'updateContactDetails').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] updateContactDetail' });

      effects.updateContactDetail$.subscribe((action) => {
        expect(action).toEqual(getErrorAction({ error }));
        done();
      });
    });
  });

  describe('availableTimeSlots$', () => {
    it('should trigger getAvailableTimeSlotsSuccessAction', (done) => {
      jest.spyOn(service, 'getAvailableTimeSlots').mockReturnValue(of(TIME_SLOTS));
      actions$ = of({ type: '[appointment] getAvailableTimeSlots' });
      effects.availableTimeSlots$.subscribe((action) => {
        expect(action).toEqual(getAvailableTimeSlotsSuccessAction({ availableTimeSlots: TIME_SLOTS }));
        done();
      });
    });

    it('should dispatch getErrorAction in getAvailableTimeSlots', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAvailableTimeSlots').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] getAvailableTimeSlots' });

      effects.availableTimeSlots$.subscribe((action) => {
        expect(action).toEqual(getAvailableTimeSlotsErrorAction({ error }));
        done();
      });
    });
  });

  describe('rescheduleTimeSlot$', () => {
    it('should trigger rescheduleAppointmentSuccessAction', (done) => {
      jest.spyOn(service, 'rescheduleTimeSlot').mockReturnValue(of(SUCCESS_RESPONSE));
      jest.spyOn(service, 'getAppointments').mockReturnValue(of([]));
      const isReschedule = false;
      actions$ = of({ type: '[appointment] reschedule appointment' });
      effects.rescheduleTimeSlot$.subscribe((action) => {
        expect(action).toEqual(rescheduleAppointmentSuccessAction({ isReschedule }));
        done();
      });
    });

    it('should dispatch getErrorAction in rescheduleTimeSlot', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'rescheduleTimeSlot').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] reschedule appointment' });

      effects.rescheduleTimeSlot$.subscribe((action) => {
        expect(action).toEqual(getErrorAction({ error }));
        done();
      });
    });
  });

  describe('cancelAppointment$', () => {
    it('should trigger cancelAppointmentSuccessAction', (done) => {
      jest.spyOn(service, 'cancelAppointment').mockReturnValue(of(SUCCESS_RESPONSE));
      jest.spyOn(service, 'getAppointments').mockReturnValue(of([]));
      actions$ = of({ type: '[appointment] cancel appointment' });
      effects.cancelAppointment$.subscribe((action) => {
        expect(action).toEqual(cancelAppointmentSuccessAction());
        done();
      });
    });

    it('should dispatch getErrorAction in cancelAppointment', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'cancelAppointment').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] cancel appointment' });

      effects.cancelAppointment$.subscribe((action) => {
        expect(action).toEqual(getErrorAction({ error }));
        done();
      });
    });
  });

  describe('outdoorAppointment$', () => {
    it('should trigger getOutdoorAppointmentSuccessAction', (done) => {
      jest.spyOn(service, 'getOutdoorAppointment').mockReturnValue(of(OUTDOOR_APPOINTMENT));
      actions$ = of({ type: '[appointment] get outdoor appointment' });
      effects.outdoorAppointment$.subscribe((action) => {
        expect(action).toEqual(getOutdoorAppointmentSuccessAction({ outdoorAppointment: OUTDOOR_APPOINTMENT }));
        done();
      });
    });

    it('should dispatch getErrorAction in outdoorAppointment', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getOutdoorAppointment').mockReturnValue(throwError(() => error));

      actions$ = of({ type: '[appointment] get outdoor appointment' });

      effects.outdoorAppointment$.subscribe((action) => {
        expect(action).toEqual(getOutdoorAppointmentErrorAction({ error }));
        done();
      });
    });
  });
});

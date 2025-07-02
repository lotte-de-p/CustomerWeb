import { createAction, emptyProps, props } from '@ngrx/store';
import { Appointment, CustomerInterface, SelectedTimeSlot } from '../entities/appointment.model';
import { AvailableTimeSlots } from '../entities/available.timeslots';
import { OutdoorAppointmentModel } from '../entities/outdoor-appointment.model';

export const getAppointments = createAction('[appointment] get appointments', emptyProps);
export const getOpenAppointments = createAction('[appointment] get open appointments', emptyProps);

export const getAppointmentsSuccessAction = createAction(
  '[appointment] get appointments success response',
  props<{ appointments: Appointment[] }>()
);

export const getErrorAction = createAction('[appointment] get appointments Error', props<{ error: Error }>());

export const selectAppointmentAction = createAction(
  '[appointment] selectAppointment',
  props<{
    selectedAppointment: Appointment;
  }>()
);

export const updateContactDetail = createAction(
  '[appointment] updateContactDetail',
  props<{
    customerDetail: CustomerInterface;
    appointmentId: string;
  }>()
);

export const updateAppointmentSuccessAction = createAction(
  '[appointment] get update appointment success response',
  emptyProps
);

export const getAvailableTimeSlots = createAction(
  '[appointment] getAvailableTimeSlots',
  props<{
    startDate: Date;
    appointmentId: string;
  }>()
);

export const getAvailableTimeSlotsSuccessAction = createAction(
  '[appointment] get available time slots success response',
  props<{ availableTimeSlots: AvailableTimeSlots[] }>()
);

export const rescheduleAppointment = createAction(
  '[appointment] reschedule appointment',
  props<{
    selectedTimeSlot: SelectedTimeSlot;
    appointmentId: string;
  }>()
);

export const rescheduleAppointmentSuccessAction = createAction(
  '[appointment] reschedule appointment success response',
  props<{
    isReschedule: boolean;
  }>()
);

export const cancelAppointment = createAction(
  '[appointment] cancel appointment',
  props<{
    appointmentId: string;
  }>()
);

export const cancelAppointmentSuccessAction = createAction(
  '[appointment] cancel appointment success response',
  emptyProps
);

export const getAvailableTimeSlotsErrorAction = createAction(
  '[appointment] get available time slot error',
  props<{ error: Error }>()
);

export const getOutdoorAppointment = createAction('[appointment] get outdoor appointment', emptyProps);

export const getOutdoorAppointmentSuccessAction = createAction(
  '[appointment] get outdoor appointment success response',
  props<{ outdoorAppointment: OutdoorAppointmentModel }>()
);

export const getOutdoorAppointmentErrorAction = createAction(
  '[appointment] get outdoor appointment Error',
  props<{ error: Error }>()
);

export const showLoaderAction = createAction(
  '[appointment] showLoaderAction',
  props<{
    appointmentDetailsLoaded: boolean;
  }>()
);

export const showTimeSlotLoaderAction = createAction(
  '[appointment] showTimeSlotLoaderAction',
  props<{
    timeSlotLoaded: boolean;
  }>()
);

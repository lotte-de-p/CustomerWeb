import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { AppointmentState, defaultState } from './appointment.state';
import { produce } from 'immer';
import {
  cancelAppointmentSuccessAction,
  getAppointmentsSuccessAction,
  getAvailableTimeSlotsErrorAction,
  getAvailableTimeSlotsSuccessAction,
  getErrorAction,
  getOutdoorAppointmentErrorAction,
  getOutdoorAppointmentSuccessAction,
  rescheduleAppointmentSuccessAction,
  selectAppointmentAction,
  showLoaderAction,
  showTimeSlotLoaderAction,
  updateAppointmentSuccessAction,
} from './appointment.actions';
import { Appointment } from '../entities/appointment.model';
import { AppointmentStatusEnum } from '../entities/raw-appointment.model';

function getOpenAppointments(appointments: Appointment[]) {
  return appointments.filter(
    (appointment) =>
      !(
        appointment.appointmentStatus === AppointmentStatusEnum.COMPLETED ||
        appointment.appointmentStatus === AppointmentStatusEnum.CANCELLED
      )
  );
}

function getCompletedAppointments(appointments: Appointment[]) {
  return appointments.filter(
    (appointment) =>
      appointment.appointmentStatus === AppointmentStatusEnum.COMPLETED ||
      appointment.appointmentStatus === AppointmentStatusEnum.CANCELLED
  );
}

function isNewAppointment(appointment: Appointment) {
  return appointment && appointment.timeSlot?.startTime === undefined;
}

function getSortedAppointments(response: Appointment[]): Appointment[] {
  let appointments: Appointment[] = [];
  let newAppointments: Appointment[] = [];

  appointments = response.filter((appointment: Appointment) => {
    return !isNewAppointment(appointment);
  });
  newAppointments = response.filter((appointment: Appointment) => {
    return isNewAppointment(appointment);
  });
  appointments.sort(compareDate);
  return [...new Set([...newAppointments, ...appointments])];
}

function compareDate(a: Appointment, b: Appointment): number {
  return Date.parse(b.appointmentDate ?? '') - Date.parse(a.appointmentDate ?? '');
}

export const reducer = createReducer(
  defaultState,
  on(getAppointmentsSuccessAction, (state: AppointmentState, { appointments }) =>
    produce(state, (draft: AppointmentState) => {
      draft.appointmentDetailsLoaded = true;
      draft.appointments = appointments;
      draft.openAppointments = getSortedAppointments(getOpenAppointments(draft.appointments));
      draft.completedAppointments = getSortedAppointments(getCompletedAppointments(draft.appointments));
      draft.selectedAppointment = !draft.openAppointments?.length
        ? draft.completedAppointments[0]
        : draft.openAppointments[0];
    })
  ),
  on(selectAppointmentAction, (state: AppointmentState, action) => ({
    ...state,
    selectedAppointment: action.selectedAppointment,
  })),
  on(showLoaderAction, (state: AppointmentState, action) => ({
    ...state,
    appointmentDetailsLoaded: action.appointmentDetailsLoaded,
  })),
  on(updateAppointmentSuccessAction, (state: AppointmentState) => ({
    ...state,
    selectedAppointment: {
      ...state.selectedAppointment,
      isSaveContactSuccess: true,
    },
  })),
  on(getAvailableTimeSlotsSuccessAction, (state: AppointmentState, action) => ({
    ...state,
    timeSlotsLoaded: true,
    availableTimeSlots: action.availableTimeSlots,
  })),
  on(rescheduleAppointmentSuccessAction, (state: AppointmentState, action) => ({
    ...state,
    selectedAppointment: {
      ...state.selectedAppointment,
      isRescheduleAppointmentSuccess: action.isReschedule,
      isScheduleAppointmentSuccess: !action.isReschedule,
    },
  })),
  on(cancelAppointmentSuccessAction, (state: AppointmentState) => ({
    ...state,
    selectedAppointment: {
      ...state.selectedAppointment,
      isAppointmentCancellationSuccess: true,
    },
  })),
  on(getErrorAction, (state: AppointmentState, action) => ({
    ...state,
    appointmentDetailsLoaded: true,
    error: action.error,
  })),
  on(getAvailableTimeSlotsErrorAction, (state: AppointmentState, action) => ({
    ...state,
    timeSlotsLoaded: true,
    availableTimeSlotError: action.error,
  })),
  on(getOutdoorAppointmentSuccessAction, (state: AppointmentState, action) => ({
    ...state,
    outdoorAppointment: action.outdoorAppointment,
  })),
  on(getOutdoorAppointmentErrorAction, (state: AppointmentState, action) => ({
    ...state,
    error: action.error,
  })),
  on(showTimeSlotLoaderAction, (state: AppointmentState, action) => ({
    ...state,
    timeSlotsLoaded: action.timeSlotLoaded,
  }))
);

export function appointmentReducer(state: AppointmentState = defaultState, action: Action): AppointmentState {
  return reducer(state, action);
}

export const appointmentsFeature = createFeature({
  name: 'appointmentsFeature',
  reducer: appointmentReducer,
});

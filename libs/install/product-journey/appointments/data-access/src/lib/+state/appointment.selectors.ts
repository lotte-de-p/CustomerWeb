import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';

export const appointmentFeatureState = createFeatureSelector<AppointmentState>('appointmentsFeature');
export const selectAppointments = createSelector(
  appointmentFeatureState,
  (state: AppointmentState) => state.appointments
);

export const selectSelectedAppointment = createSelector(appointmentFeatureState, (state) => state.selectedAppointment);

export const selectCompletedAppointments = createSelector(
  appointmentFeatureState,
  (state) => state.completedAppointments
);

export const selectOpenAppointments = createSelector(appointmentFeatureState, (state) => state.openAppointments);

export const selectAvailableTimeSlots = createSelector(appointmentFeatureState, (state) => state.availableTimeSlots);

export const selectAppointmentError = createSelector(appointmentFeatureState, (state) => state.error);

export const selectAvailableTimeSlotError = createSelector(
  appointmentFeatureState,
  (state) => state.availableTimeSlotError
);

export const selectOutdoorAppointment = createSelector(
  appointmentFeatureState,
  (state: AppointmentState) => state.outdoorAppointment
);

export const selectAppointmentDetailsLoaded = createSelector(
  appointmentFeatureState,
  (state: AppointmentState) => state.appointmentDetailsLoaded
);

export const selectTimeSlotsLoaded = createSelector(
  appointmentFeatureState,
  (state: AppointmentState) => state.timeSlotsLoaded
);

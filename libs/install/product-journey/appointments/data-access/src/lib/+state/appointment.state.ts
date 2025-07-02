import { Appointment } from '../entities/appointment.model';
import { AvailableTimeSlots } from '../entities/available.timeslots';
import { OutdoorAppointmentModel } from '../entities/outdoor-appointment.model';

export interface AppointmentState {
  appointments: Appointment[];
  selectedAppointment: Appointment | undefined;
  openAppointments: Appointment[];
  completedAppointments: Appointment[];
  availableTimeSlots: AvailableTimeSlots[];
  error: Error | undefined;
  availableTimeSlotError: Error | undefined;
  outdoorAppointment: OutdoorAppointmentModel | undefined;
  appointmentDetailsLoaded: boolean;
  timeSlotsLoaded: boolean;
}

export const defaultState: AppointmentState = {
  appointments: [],
  selectedAppointment: undefined,
  openAppointments: [],
  completedAppointments: [],
  availableTimeSlots: [],
  error: undefined,
  availableTimeSlotError: undefined,
  outdoorAppointment: undefined,
  appointmentDetailsLoaded: false,
  timeSlotsLoaded: false,
};

export interface AppointmentSlice {
  ['appointmentsFeature']: AppointmentState;
}

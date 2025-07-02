import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  cancelAppointment,
  getAppointments,
  getAvailableTimeSlots,
  getOpenAppointments,
  getOutdoorAppointment,
  rescheduleAppointment,
  selectAppointmentAction,
  showLoaderAction,
  showTimeSlotLoaderAction,
  updateContactDetail,
} from '../+state/appointment.actions';
import {
  selectOutdoorAppointment,
  selectAppointmentError,
  selectAppointments,
  selectAvailableTimeSlotError,
  selectAvailableTimeSlots,
  selectCompletedAppointments,
  selectOpenAppointments,
  selectSelectedAppointment,
  selectAppointmentDetailsLoaded,
  selectTimeSlotsLoaded,
} from '../+state/appointment.selectors';
import { Appointment, CustomerInterface, SelectedTimeSlot } from '../entities/appointment.model';
import { AppointmentSlice } from '../+state/appointment.state';

@Injectable({
  providedIn: 'root',
})
export class AppointmentFacade {
  private readonly store = inject(Store<AppointmentSlice>);

  readonly appointments$ = this.store.select(selectAppointments);
  readonly selectedAppointment$ = this.store.select(selectSelectedAppointment);
  readonly completedAppointments$ = this.store.select(selectCompletedAppointments);
  readonly openAppointments$ = this.store.select(selectOpenAppointments);
  readonly availableTimeSlots$ = this.store.select(selectAvailableTimeSlots);
  readonly appointmentError$ = this.store.select(selectAppointmentError);
  readonly availableTimeSlotError$ = this.store.select(selectAvailableTimeSlotError);
  readonly outdoorAppointment$ = this.store.select(selectOutdoorAppointment);
  readonly appointmentDetailsLoaded$ = this.store.select(selectAppointmentDetailsLoaded);
  readonly timeSlotsLoaded$ = this.store.select(selectTimeSlotsLoaded);

  loadAppointments(): void {
    this.store.dispatch(getAppointments());
  }

  loadOpenAppointments(): void {
    this.store.dispatch(getOpenAppointments());
  }

  loadOutdoorAppointment(): void {
    this.store.dispatch(getOutdoorAppointment());
  }

  setSelectAppointment(selectedAppointment: Appointment): void {
    this.store.dispatch(selectAppointmentAction({ selectedAppointment }));
  }

  updateContactDetail(customerDetail: CustomerInterface, appointmentId: string): void {
    this.store.dispatch(showLoaderAction({ appointmentDetailsLoaded: false }));
    this.store.dispatch(updateContactDetail({ customerDetail, appointmentId }));
  }

  getAvailableTimeSlots(startDate: Date, appointmentId: string): void {
    this.store.dispatch(showTimeSlotLoaderAction({ timeSlotLoaded: false }));
    this.store.dispatch(getAvailableTimeSlots({ startDate, appointmentId }));
  }

  rescheduleAppointment(rescheduleTimeSlot: SelectedTimeSlot, appointmentId: string): void {
    this.store.dispatch(showLoaderAction({ appointmentDetailsLoaded: false }));
    this.store.dispatch(rescheduleAppointment({ selectedTimeSlot: rescheduleTimeSlot, appointmentId }));
  }

  cancelAppointment(appointmentId: string): void {
    this.store.dispatch(showLoaderAction({ appointmentDetailsLoaded: false }));
    this.store.dispatch(cancelAppointment({ appointmentId }));
  }
}

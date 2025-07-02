import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { AppointmentsService } from '../infrastructure/appointments.service';
import {
  cancelAppointment,
  cancelAppointmentSuccessAction,
  getAppointments,
  getAppointmentsSuccessAction,
  getAvailableTimeSlots,
  getAvailableTimeSlotsErrorAction,
  getAvailableTimeSlotsSuccessAction,
  getErrorAction,
  getOpenAppointments,
  getOutdoorAppointment,
  getOutdoorAppointmentErrorAction,
  getOutdoorAppointmentSuccessAction,
  rescheduleAppointment,
  rescheduleAppointmentSuccessAction,
  updateAppointmentSuccessAction,
  updateContactDetail,
} from './appointment.actions';
import { of } from 'rxjs';
import dayjs from 'dayjs';
import { AppointmentDatalayerService } from '../infrastructure/appointment-datalayer.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentEffects {
  actions$ = inject(Actions);
  appointmentsService = inject(AppointmentsService);
  appointmentDatalayerService = inject(AppointmentDatalayerService);

  appointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAppointments),
      mergeMap(() => this.appointmentsService.getAppointments()),
      map((appointments) => getAppointmentsSuccessAction({ appointments })),
      catchError((error) => of(getErrorAction({ error: error })))
    )
  );

  openAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOpenAppointments),
      mergeMap(() => this.appointmentsService.getAppointments('OPEN')),
      map((appointments) => getAppointmentsSuccessAction({ appointments })),
      catchError((error) => of(getErrorAction({ error: error })))
    )
  );

  updateContactDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContactDetail),
      concatMap((request) => {
        return this.appointmentsService.updateContactDetails(request.customerDetail, request.appointmentId).pipe(
          concatMap(() => {
            return this.appointmentsService.getAppointments();
          }),
          concatMap((appointments) => [
            getAppointmentsSuccessAction({ appointments }),
            updateAppointmentSuccessAction(),
          ]),
          catchError((error) => of(getErrorAction({ error: error })))
        );
      })
    )
  );

  availableTimeSlots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAvailableTimeSlots),
      mergeMap((request) => {
        return this.appointmentsService
          .getAvailableTimeSlots(dayjs(request.startDate).format('YYYY-MM-DD'), request.appointmentId)
          .pipe(
            map((availableTimeSlots) => getAvailableTimeSlotsSuccessAction({ availableTimeSlots })),
            catchError((error) => of(getAvailableTimeSlotsErrorAction({ error: error })))
          );
      })
    )
  );

  rescheduleTimeSlot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rescheduleAppointment),
      concatMap((request) => {
        const selectedTimeSlot = {
          ...request.selectedTimeSlot,
          date: dayjs(request.selectedTimeSlot?.date).format('YYYY-MM-DD'),
        };
        const isReschedule = request.selectedTimeSlot?.appointmentType === 'RESCHEDULE';
        return this.appointmentsService.rescheduleTimeSlot(selectedTimeSlot, request.appointmentId).pipe(
          concatMap(() => {
            return this.appointmentsService.getAppointments();
          }),
          concatMap((appointments) => [
            getAppointmentsSuccessAction({ appointments }),
            rescheduleAppointmentSuccessAction({ isReschedule }),
          ]),
          catchError((error) => of(getErrorAction({ error: error })))
        );
      })
    )
  );

  cancelAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cancelAppointment),
      concatMap((request) => {
        return this.appointmentsService.cancelAppointment(request.appointmentId).pipe(
          concatMap(() => {
            return this.appointmentsService.getAppointments();
          }),
          concatMap((appointments) => [
            getAppointmentsSuccessAction({ appointments }),
            cancelAppointmentSuccessAction(),
          ]),
          catchError((error) => of(getErrorAction({ error: error })))
        );
      })
    )
  );

  outdoorAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOutdoorAppointment),
      mergeMap(() => this.appointmentsService.getOutdoorAppointment()),
      map((outdoorAppointment) => getOutdoorAppointmentSuccessAction({ outdoorAppointment })),
      catchError((error) => of(getOutdoorAppointmentErrorAction({ error: error })))
    )
  );
}

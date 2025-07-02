import { inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Appointment, CustomerInterface, SelectedTimeSlot } from '../entities/appointment.model';
import { AppointmentsMapper } from '../mapper/appointments.mapper';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { RawAppointment } from '../entities/raw-appointment.model';
import { AvailableTimeSlotsMapper } from '../mapper/available-time-slots.mapper';
import { SuccessMapper } from '../mapper/success-mapper';
import { SuccessModel } from '../entities/success.model';
import { RawAvailableTimeslot } from '../entities/raw-available.timeslot';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { AvailableTimeSlots } from '../entities/available.timeslots';
import { OutdoorAppointmentModel } from '../entities/outdoor-appointment.model';
import { OutdoorAppointmentMapper } from '../mapper/outdoor-appointment.mapper';
import { AppointmentsConstants } from '../constants/appointments.constant';
import { RawSuccessModel } from '../entities/raw-success.model';
import { catchError } from 'rxjs/operators';
import dayjs from 'dayjs';

const APPOINTMENTS_API = '/public/api/appointments-service/v1/appointments';
const MESSAGE_GROUP = 'appointments';
const AVAILABLE_TIMESLOT_MESSAGE_GROUP = 'available time slot';
const NO_TIME_SLOTS = 'Availabilities-023';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private readonly ocapiService = inject(OcapiService);
  private readonly appointmentsMapper = inject(AppointmentsMapper);
  private readonly messageService = inject(MessageService);

  getAppointments(status?: string): Observable<Appointment[]> {
    const endpoint = status ? APPOINTMENTS_API.concat('?status=' + status) : APPOINTMENTS_API;
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawAppointment[], Appointment[]>(MESSAGE_GROUP, endpoint, this.appointmentsMapper)
    );
  }

  getAvailableTimeSlots(startDate: string, appointmentId: string): Observable<AvailableTimeSlots[]> {
    return this.tryGetAvailableTimeSlots(startDate, startDate, appointmentId);
  }

  private tryGetAvailableTimeSlots(
    date: string,
    initialDate: string,
    appointmentId: string
  ): Observable<AvailableTimeSlots[]> {
    const ocapiConfig = this.getAvailableTimeSlotsOcapiConfig(date, appointmentId);
    return this.ocapiService.doGet(ocapiConfig).pipe(
      catchError((error) => {
        if (error?.error['code'] === NO_TIME_SLOTS) {
          return this.handleNoTimeSlotsError(date, initialDate, appointmentId);
        }
        return throwError(() => error);
      })
    );
  }

  private getAvailableTimeSlotsUrl(startDate: string, appointmentId: string): string {
    let endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/available-time-slots');
    if (window['Config']['ocapi-url'] !== 'http://localhost:8080') {
      endpoint = endpoint.concat('?startDate=' + startDate);
    }
    return endpoint;
  }

  private getAvailableTimeSlotsOcapiConfig(
    startDate: string,
    appointmentId: string
  ): OcapiCallConfig<RawAvailableTimeslot[], AvailableTimeSlots[]> {
    const availableTimeSlotsUrl = this.getAvailableTimeSlotsUrl(startDate, appointmentId);
    const ocapiCallConfig = new OcapiCallConfig<RawAvailableTimeslot[], AvailableTimeSlots[]>(
      AVAILABLE_TIMESLOT_MESSAGE_GROUP,
      availableTimeSlotsUrl,
      AvailableTimeSlotsMapper
    );
    ocapiCallConfig.errorHandler = this.handleOcapiError.bind(this);

    return ocapiCallConfig;
  }

  private handleNoTimeSlotsError(
    date: string,
    initialDate: string,
    appointmentId: string
  ): Observable<AvailableTimeSlots[]> {
    const isInitialDateToday = dayjs(initialDate).isSame(dayjs(), 'day');
    const isDateWithin2Months = dayjs(date).isBefore(dayjs().add(2, 'month'));

    if (isInitialDateToday && isDateWithin2Months) {
      const newStartDate = dayjs(date).add(13, 'days').format('YYYY-MM-DD');

      return this.tryGetAvailableTimeSlots(newStartDate, initialDate, appointmentId);
    } else {
      return of([]);
    }
  }

  updateContactDetails(customerDetail: CustomerInterface, appointmentId: string): Observable<SuccessModel> {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/contactdetails');
    const updateContactConfig = new OcapiCallConfig(MESSAGE_GROUP, endpoint, SuccessMapper, customerDetail);
    updateContactConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doPut(updateContactConfig);
  }

  rescheduleTimeSlot(selectedTimeSlot: SelectedTimeSlot, appointmentId: string): Observable<SuccessModel> {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/reschedule');
    const rescheduleOcapiCallConfig = new OcapiCallConfig<RawSuccessModel, SuccessModel>(
      MESSAGE_GROUP,
      endpoint,
      SuccessMapper,
      selectedTimeSlot
    );
    rescheduleOcapiCallConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doPut(rescheduleOcapiCallConfig);
  }

  cancelAppointment(appointmentId: string): Observable<SuccessModel> {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId);
    const cancelConfig = new OcapiCallConfig(MESSAGE_GROUP, endpoint, SuccessMapper);
    cancelConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doDelete(cancelConfig);
  }

  getOutdoorAppointment(): Observable<OutdoorAppointmentModel> {
    const endpoint = APPOINTMENTS_API.concat('/fiber-access');
    return this.ocapiService.doGet(new OcapiCallConfig(MESSAGE_GROUP, endpoint, OutdoorAppointmentMapper));
  }

  handleOcapiError<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>): Observable<never> {
    const errorCode = error?.error?.code;
    if (errorCode === 'Availabilities-023') {
      return throwError(() => error);
    }
    const errorCauseKey = AppointmentsConstants.APPOINTMENTS_ERROR_CAUSE_KEYS.get(errorCode);
    if (errorCauseKey) {
      const errorMessage = errorCauseKey ? `${errorCode}.${errorCauseKey}` : errorCode;
      this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, `${MESSAGE_GROUP}.${errorMessage}`));
    } else {
      this.messageService.addMessage(
        new ErrorMessage(ocapiCall.messageGroupName, `appointment.${error.status.toString()}`)
      );
    }
    return throwError(() => error);
  }
}

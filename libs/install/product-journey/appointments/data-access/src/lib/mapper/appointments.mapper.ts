import { AppointmentStatusEnum, AppointmentTypeEnum, RawAppointment } from '../entities/raw-appointment.model';
import {
  Appointment,
  CustomerAddressInterface,
  CustomerInterface,
  TimeSlotInterface,
} from '../entities/appointment.model';
import { inject, Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsMapper {
  private readonly omapiProductMapper = inject(OmapiProductMapper);
  toModel(rawAppointmentsDetails: RawAppointment[]): Appointment[] {
    return rawAppointmentsDetails.map((raw) => ({
      appointmentId: raw.appointmentId,
      appointmentType: raw.appointmentType,
      appointmentSubType: raw.appointmentSubType,
      appointmentStatus: raw.appointmentStatus,
      appointmentDate: raw.appointmentDate,
      cableAppointment: raw.cableAppointment,
      fiberAppointment: raw.fiberAppointment,
      salesOrderId: raw.salesOrderId,
      cost: this.mapCost(raw.cost),
      productsInfo: raw.products?.map((product) => this.omapiProductMapper.toModel(product.rawOmapi)),
      installationDateAtNewAddress: raw.installationDateAtNewAddress,
      customer: this.mapCustomer(raw.customer),
      timeSlot: this.mapTimeSlot(raw.timeSlot),
      address: this.mapAddress(raw.address),
      isUpcomingAppointment: this.isUpcomingAppointment(raw.appointmentStatus),
      getDisplayStatus: this.getDisplayStatus(raw),
      isNewAppointment: this.isNewAppointment(raw),
      isCompletedOrCancelledAppointment: this.isCompletedOrCancelledAppointment(raw.appointmentStatus),
      isScheduledAppointment: this.isScheduledAppointment(raw.appointmentStatus),
      isRepairAppointment: this.isRepairAppointment(raw.appointmentType),
      isPostponedAppointmentNeedsReschedule: this.isPostponedAppointmentNeedsReschedule(raw.appointmentStatus),
      isAppointmentInWait: this.isAppointmentInWait(raw.appointmentStatus),
    }));
  }

  private mapCustomer(customer?: CustomerInterface): CustomerInterface {
    return {
      contactName: this.mapContactName(customer?.contactName),
      language: customer?.language,
      notificationMethod: customer?.notificationMethod,
      notificationContact: customer?.notificationContact,
    } as CustomerInterface;
  }

  private mapTimeSlot(timeSlot?: TimeSlotInterface): TimeSlotInterface {
    return {
      periodOfDay: timeSlot?.periodOfDay,
      startTime: timeSlot?.startTime,
      endTime: timeSlot?.endTime,
    } as TimeSlotInterface;
  }

  private mapAddress(address?: CustomerAddressInterface): CustomerAddressInterface {
    return {
      street: address?.street,
      houseNumber: address?.houseNumber,
      boxNumber: address?.boxNumber,
      zip: address?.zip,
      city: address?.city,
      countryCode: address?.countryCode,
      country: address?.country,
      locationId: address?.locationId,
    } as CustomerAddressInterface;
  }

  private isUpcomingAppointment(appointmentStatus: AppointmentStatusEnum): boolean {
    return (
      appointmentStatus !== AppointmentStatusEnum.COMPLETED && appointmentStatus !== AppointmentStatusEnum.CANCELLED
    );
  }

  private getDisplayStatus(appointment: Appointment): AppointmentStatusEnum {
    return appointment.appointmentStatus === AppointmentStatusEnum.NEW && appointment.timeSlot
      ? AppointmentStatusEnum.SCHEDULED
      : appointment.appointmentStatus ?? AppointmentStatusEnum.COMPLETED;
  }

  private isNewAppointment(appointment: Appointment): boolean {
    return appointment.appointmentStatus === AppointmentStatusEnum.NEW && appointment.timeSlot?.startTime === undefined;
  }

  private isCompletedOrCancelledAppointment(appointmentStatus: AppointmentStatusEnum): boolean {
    return (
      appointmentStatus === AppointmentStatusEnum.COMPLETED || appointmentStatus === AppointmentStatusEnum.CANCELLED
    );
  }

  private isScheduledAppointment(appointmentStatus: AppointmentStatusEnum): boolean {
    return (
      appointmentStatus === AppointmentStatusEnum.SCHEDULED ||
      appointmentStatus === AppointmentStatusEnum.POSTPONE_RESCHEDULED
    );
  }

  private isRepairAppointment(appointmentType: AppointmentTypeEnum): boolean {
    return appointmentType === AppointmentTypeEnum.REPAIR;
  }

  private isPostponedAppointmentNeedsReschedule(appointmentStatus: AppointmentStatusEnum): boolean {
    return appointmentStatus === AppointmentStatusEnum.POSTPONE_NEEDRESCHEDULE;
  }

  private isAppointmentInWait(appointmentStatus: AppointmentStatusEnum): boolean {
    return appointmentStatus === AppointmentStatusEnum.WAIT;
  }

  private mapCost(cost: string | undefined): string | undefined {
    if (cost) {
      return parseFloat(cost).toString();
    }
    return cost;
  }

  private mapContactName(contactName: string | undefined): string | undefined {
    return contactName ? contactName?.replace('Mr.', '').replace('Mrs.', '').trim() : contactName;
  }
}

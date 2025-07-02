import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
export class RawAppointment {
  appointmentId!: string;
  appointmentType!: AppointmentTypeEnum;
  appointmentSubType?: string;
  appointmentStatus!: AppointmentStatusEnum;
  appointmentDate?: string;
  customer?: CustomerInterface;
  timeSlot?: TimeSlotInterface;
  cableAppointment?: boolean;
  fiberAppointment?: boolean;
  salesOrderId?: string;
  cost?: string;
  address!: CustomerAddressInterface;
  products?: RawAppointmentProduct[];
  installationDateAtNewAddress!: string;
}

export enum AppointmentTypeEnum {
  MOVE = 'MOVE',
  INSTALL = 'INSTALL',
  REPAIR = 'REPAIR',
  RESCHEDULE = 'RESCHEDULE',
  SCHEDULE = 'SCHEDULE',
  UNKNOWN = 'Unknown',
}

export enum AppointmentStatusEnum {
  NEW = 'NEW',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  POSTPONE_NEEDRESCHEDULE = 'POSTPONE_NEEDRESCHEDULE',
  POSTPONE_RESCHEDULED = 'POSTPONE_RESCHEDULED',
  WAIT = 'WAIT',
}

export interface CustomerInterface {
  contactName: string;
  language: string;
  notificationMethod: NotificationMethodEnum;
  notificationContact: string;
}

export enum NotificationMethodEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  VOICE = 'VOICE',
}

export interface RawAppointmentProduct {
  specurl?: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface CustomerAddressInterface {
  locationId: string;
  street: string;
  houseNumber: string;
  boxNumber: string;
  zip: string;
  city: string;
  countryCode: string;
  country: string;
}

export interface TimeSlotInterface {
  periodOfDay: PeriodOfDayEnum;
  startTime: string;
  endTime: string;
}

export enum PeriodOfDayEnum {
  AM = 'AM',
  PM = 'PM',
  MI = 'MI',
  EV = 'EV',
  DAY = 'DAY',
}

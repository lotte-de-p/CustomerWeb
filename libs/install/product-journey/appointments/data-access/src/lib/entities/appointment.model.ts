import {
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  NotificationMethodEnum,
  PeriodOfDayEnum,
} from './raw-appointment.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export class Appointment {
  appointmentId?: string;
  appointmentType?: AppointmentTypeEnum;
  appointmentSubType?: string;
  appointmentStatus?: AppointmentStatusEnum;
  appointmentDate?: string;
  customer?: CustomerInterface;
  timeSlot?: TimeSlotInterface;
  cableAppointment?: boolean;
  fiberAppointment?: boolean;
  salesOrderId?: string;
  cost?: string;
  address?: CustomerAddressInterface;
  productsInfo?: OmapiProduct[];
  installationDateAtNewAddress?: string;
  isUpcomingAppointment?: boolean;
  getDisplayStatus?: AppointmentStatusEnum;
  isNewAppointment?: boolean;
  isCompletedOrCancelledAppointment?: boolean;
  isScheduledAppointment?: boolean;
  isRepairAppointment?: boolean;
  dayOfMonth?: string;
  dayLabelKey?: string = '';
  monthLabelKey?: string = '';
  timeslotCodeLabelKey?: string = '';
  appointmentSubTypeMessage?: string = '';
  isPostponedAppointmentNeedsReschedule?: boolean;
  isAppointmentInWait?: boolean;
  isRescheduleAppointmentSuccess?: boolean;
  isScheduleAppointmentSuccess?: boolean;
  isSaveContactSuccess?: boolean;
  isAppointmentCancellationSuccess?: boolean;
}

export interface CustomerInterface {
  contactName: string;
  language: string;
  notificationMethod: NotificationMethodEnum;
  notificationContact: string;
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

export interface SelectedTimeSlot {
  appointmentType?: AppointmentTypeEnum;
  availabilityId?: string;
  date?: string;
  salesOrderId?: string;
}

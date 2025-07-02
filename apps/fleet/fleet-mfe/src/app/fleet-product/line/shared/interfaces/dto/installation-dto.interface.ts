import { OrderItemDto } from './order-item-dto.interface';
import { Address } from '../../models/address.model';
import { TimeslotMomentEnum } from '@telenet/ng-lib-form';
import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface InstallationDto {
  type?: string;
  addressId?: string;
  manualAddress?: Address;
  orderItems?: OrderItemDto[];
  appointment?: UpdatedAppointmentSlotDto;
  relocate?: RelocateDto;
  isFtthAppointment?: boolean;
  appointments?: AppointmentsDto;
}

export interface UpdatedAppointmentSlotDto {
  date?: string;
  timeSlotCode?: TimeslotMomentEnum;
  priceCategory?: string;
}

export interface RelocateDto {
  date: string;
  oldAddressId: string;
}

export interface AppointmentsDto {
  availabilities: AvailabilitiesDto[];
}

export interface AvailabilitiesDto {
  date?: string;
  slots: TimeSlotAvailabilityDto[];
}

export interface TimeSlotAvailabilityDto {
  timeSlotCode: TimeslotMomentEnum;
  specurl: string;
  availabilityId: string;
  productInfo?: RawOmapiProductInterface;
  timeFormat?: string;
}

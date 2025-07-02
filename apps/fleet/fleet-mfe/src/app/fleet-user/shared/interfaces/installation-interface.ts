import { NCTimeSlotList } from '@telenet/ng-lib-form';
import { Address } from '../models/address.model';
import { OrderItem } from '../models/order-item.model';
import { UpdatedAppointmentSlotInterface } from './raw/raw-sales-order.interface';

export interface InstallationInterface {
  type?: string;
  normalizedType?: string;
  addressId?: string;
  manualAddress?: Address;
  orderItems?: OrderItem[];
  appointment?: UpdatedAppointmentSlotInterface;
  relocate?: Relocate;
  isFtthAppointment?: boolean;
  appointments?: NCTimeSlotList;
}
export interface Relocate {
  date: Date;
  oldAddressId: string;
}

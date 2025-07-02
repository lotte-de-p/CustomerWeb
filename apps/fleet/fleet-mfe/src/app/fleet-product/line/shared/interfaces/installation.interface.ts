import { UpdatedAppointmentSlotDto } from './dto/installation-dto.interface';
import { NCTimeSlotList } from '@telenet/ng-lib-form';
import { Address } from '../models/address.model';
import { OrderItem } from '../models/sales-order/order-item.model';

export interface InstallationInterface {
  type?: string;
  normalizedType?: string;
  addressId?: string;
  manualAddress?: Address;
  orderItems?: OrderItem[];
  appointment?: UpdatedAppointmentSlotDto;
  relocate?: Relocate;
  isFtthAppointment?: boolean;
  appointments?: NCTimeSlotList;
}
interface Relocate {
  date: Date;
  oldAddressId: string;
}

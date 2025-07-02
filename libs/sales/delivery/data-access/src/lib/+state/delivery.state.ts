import { PersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryAddress } from '../interfaces/delivery-address.interface';
import { DeliveryItem } from '../interfaces/delivery-items.interface';
import { DeliveryNotification } from '../interfaces/notification.interface';

export interface DeliveryState {
  personalInfo: PersonalInfo | undefined;
  deliveryAddress: DeliveryAddress | undefined;
  availableAddresses: DeliveryAddress[] | undefined;
  deliveryItems: DeliveryItem[];
  notifications: DeliveryNotification[];
}

export const defaultState: DeliveryState = {
  personalInfo: undefined,
  deliveryAddress: undefined,
  availableAddresses: [],
  deliveryItems: [],
  notifications: [],
};

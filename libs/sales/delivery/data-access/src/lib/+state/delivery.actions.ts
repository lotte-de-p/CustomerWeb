import { createAction, props } from '@ngrx/store';
import { DeliveryAddress } from '../interfaces/delivery-address.interface';
import { PersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryItem } from '../interfaces/delivery-items.interface';
import { DeliveryNotification } from '../interfaces/notification.interface';

export const setDeliveryPersonalInfo = createAction(
  '[delivery] set personal info',
  props<{ personalInfo: PersonalInfo }>()
);

export const setDeliveryAddress = createAction(
  '[delivery] set delivery address',
  props<{ deliveryAddress: DeliveryAddress }>()
);

export const setDeliveryItems = createAction(
  '[delivery] set delivery items',
  props<{ deliveryItems: DeliveryItem[] }>()
);

export const setAvailableAddresses = createAction(
  '[delivery] set available addresses',
  props<{ availableAddresses: DeliveryAddress[] }>()
);

export const resetNotifications = createAction('[delivery] reset the notifications');

export const addDeliveryNotification = createAction(
  '[delivery] add notification',
  props<{ notification: DeliveryNotification }>()
);

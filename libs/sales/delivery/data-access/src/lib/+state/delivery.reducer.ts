import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, DeliveryState } from './delivery.state';
import { stateFeatureName } from '../constants/state.const';
import { produce } from 'immer';
import {
  addDeliveryNotification,
  resetNotifications,
  setAvailableAddresses,
  setDeliveryAddress,
  setDeliveryItems,
  setDeliveryPersonalInfo,
} from './delivery.actions';
import { DeliveryAddress } from '../interfaces/delivery-address.interface';
import { DeliveryItem } from '../interfaces/delivery-items.interface';
import { DeliveryNotification } from '../interfaces/notification.interface';
import { PersonalInfo } from '../interfaces/personal-info.interface';

export const reducer = createReducer(
  defaultState,
  on(setDeliveryPersonalInfo, (state: DeliveryState, props: { personalInfo: PersonalInfo }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.personalInfo = props.personalInfo;
    });
  }),
  on(setDeliveryAddress, (state: DeliveryState, props: { deliveryAddress: DeliveryAddress }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.deliveryAddress = props.deliveryAddress;
    });
  }),
  on(setAvailableAddresses, (state: DeliveryState, props: { availableAddresses: DeliveryAddress[] }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.availableAddresses = props.availableAddresses;
    });
  }),
  on(setDeliveryItems, (state: DeliveryState, props: { deliveryItems: DeliveryItem[] }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.deliveryItems = props.deliveryItems;
    });
  }),
  on(resetNotifications, (state: DeliveryState) => {
    return produce(state, (draft: DeliveryState) => {
      draft.notifications = [];
    });
  }),
  on(addDeliveryNotification, (state: DeliveryState, props: { notification: DeliveryNotification }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.notifications.push(props.notification);
    });
  })
);

export function deliveryReducer(state: DeliveryState = defaultState, action: Action): DeliveryState {
  return reducer(state, action);
}

export const deliveryFeature = createFeature({
  name: stateFeatureName,
  reducer: deliveryReducer,
});

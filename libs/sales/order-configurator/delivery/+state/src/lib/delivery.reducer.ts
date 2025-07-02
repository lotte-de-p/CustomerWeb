import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { defaultState, DeliveryState } from './delivery.state';
import { produce } from 'immer';
import { setRecipientAddress, setRecipientDetails } from './delivery.actions';
import { RecipientAddress, RecipientDetails } from '@sales/order-configurator/delivery/domain';

export const reducer = createReducer(
  defaultState,
  on(setRecipientDetails, (state: DeliveryState, props: { recipientDetails: RecipientDetails }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.recipientDetails = props.recipientDetails;
    });
  }),
  on(setRecipientAddress, (state: DeliveryState, props: { recipientAddress: RecipientAddress }) => {
    return produce(state, (draft: DeliveryState) => {
      draft.recipientAddress = props.recipientAddress;
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

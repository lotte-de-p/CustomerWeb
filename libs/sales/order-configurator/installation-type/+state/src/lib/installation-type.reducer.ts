import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, InstallationTypeState } from './installation-type.state';
import { stateFeatureName } from './state.const';
import { setDeliveryMethod } from './installation-type.actions';
import { produce } from 'immer';

export const reducer = createReducer(
  defaultState,
  on(setDeliveryMethod, (state, { deliveryMethod }) => {
    return produce(state, (draft: InstallationTypeState) => {
      draft.selectedDeliveryMethod = deliveryMethod;
    });
  })
);

export function installationTypeReducer(
  state: InstallationTypeState = defaultState,
  action: Action
): InstallationTypeState {
  return reducer(state, action);
}

export const installationTypeFeature = createFeature({
  name: stateFeatureName,
  reducer: installationTypeReducer,
});

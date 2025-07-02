import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, InstallationTypeState } from './installation-type.state';
import { stateFeatureName } from '../constants/state.const';
import { produce } from 'immer';
import { setName } from './installation-type.actions';

export const reducer = createReducer(
  defaultState,
  on(setName, (state: InstallationTypeState, props: { name: string }) => {
    return produce(state, (draft: InstallationTypeState) => {
      draft.name = props.name;
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

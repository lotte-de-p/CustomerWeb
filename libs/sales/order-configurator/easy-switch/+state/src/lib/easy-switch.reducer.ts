import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { defaultState, EasySwitchState } from './easy-switch.state';
import {
  selectEasySwitchWanted,
  submitEasySwitchWanted,
  submitEasySwitchWantedFailure,
  submitEasySwitchWantedSuccess,
} from './easy-switch.actions';
import { produce } from 'immer';

export const reducer = createReducer(
  defaultState,
  on(
    selectEasySwitchWanted,
    (
      state: EasySwitchState,
      props: {
        choice: boolean;
      }
    ) => {
      return produce(state, (draft: EasySwitchState) => {
        draft.easySwitchWanted = props.choice;
      });
    }
  ),
  on(submitEasySwitchWanted, (state: EasySwitchState) => {
    return produce(state, (draft: EasySwitchState) => {
      draft.loading = true;
      draft.error = null;
    });
  }),
  on(submitEasySwitchWantedSuccess, (state: EasySwitchState) => {
    return produce(state, (draft: EasySwitchState) => {
      draft.loading = false;
      draft.error = null;
    });
  }),
  on(submitEasySwitchWantedFailure, (state, props: { error: string }) => {
    return produce(state, (draft: EasySwitchState) => {
      draft.loading = false;
      draft.error = props.error;
    });
  })
);

export function easySwitchReducer(state: EasySwitchState = defaultState, action: Action): EasySwitchState {
  return reducer(state, action);
}

export const easySwitchFeature = createFeature({
  name: stateFeatureName,
  reducer: easySwitchReducer,
});

import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, AppointmentState } from './appointment.state';
import { stateFeatureName } from '../constants/state.const';
import { produce } from 'immer';
import { setName } from './appointment.actions';

export const reducer = createReducer(
  defaultState,
  on(setName, (state: AppointmentState, props: { name: string }) => {
    return produce(state, (draft: AppointmentState) => {
      draft.name = props.name;
    });
  })
);

export function appointmentReducer(state: AppointmentState = defaultState, action: Action): AppointmentState {
  return reducer(state, action);
}

export const appointmentFeature = createFeature({
  name: stateFeatureName,
  reducer: appointmentReducer,
});

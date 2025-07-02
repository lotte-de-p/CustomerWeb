import { Action, createFeature, createReducer } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { ContactInfoState, defaultState } from './contact-info.state';

export const reducer = createReducer(defaultState);

export function contactInfoReducer(state: ContactInfoState = defaultState, action: Action): ContactInfoState {
  return reducer(state, action);
}

export const contactInfoFeature = createFeature({
  name: stateFeatureName,
  reducer: contactInfoReducer,
});

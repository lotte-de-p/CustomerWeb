import { Action, createFeature, createReducer } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { defaultState, SummaryState } from './summary.state';

export const reducer = createReducer(defaultState);

export function summaryReducer(state: SummaryState = defaultState, action: Action): SummaryState {
  return reducer(state, action);
}

export const summaryFeature = createFeature({
  name: stateFeatureName,
  reducer: summaryReducer,
});

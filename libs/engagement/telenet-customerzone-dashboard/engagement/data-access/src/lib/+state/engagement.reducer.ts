import { Action, createFeature, createReducer } from '@ngrx/store';

import { EngagementState, defaultState } from './engagement.state';

export const reducer = createReducer(defaultState);

export function engagementReducer(state: EngagementState = defaultState, action: Action): EngagementState {
  return reducer(state, action);
}

export const engagementFeature = createFeature({
  name: 'engagementFeature',
  reducer: engagementReducer,
});

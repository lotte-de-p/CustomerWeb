import { Action, createFeature, createReducer } from '@ngrx/store';

import { HomeNetworkState, defaultState } from './home-network.state';

export const reducer = createReducer(defaultState);

export function homeNetworkReducer(state: HomeNetworkState = defaultState, action: Action): HomeNetworkState {
  return reducer(state, action);
}

export const homeNetworkFeature = createFeature({
  name: 'homeNetworkFeature',
  reducer: homeNetworkReducer,
});

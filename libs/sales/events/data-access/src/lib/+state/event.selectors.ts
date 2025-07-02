import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event.state';

export const featureState = createFeatureSelector<EventState>('eventFeature');
export const selectEvent = createSelector([featureState], (state: EventState) => {
  return state.event;
});

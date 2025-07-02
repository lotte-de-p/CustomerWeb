import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { EventInterface } from '../interfaces/event.interface';
import { defaultState, EventState } from './event.state';
import { triggerEvent } from './event.actions';

export const reducer = createReducer(
  defaultState,
  on(triggerEvent, (state: EventState, event: EventInterface<unknown>) =>
    produce(state, (draft: EventState) => {
      draft.event = event;
    })
  )
);

export function EventReducer(state: EventState = defaultState, action: Action): EventState {
  return reducer(state, action);
}

export const eventFeature = createFeature({
  name: 'eventFeature',
  reducer: EventReducer,
});

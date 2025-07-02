import { eventFactory, eventStateFactory } from './event-state.testfactory';
import { triggerEvent } from './event.actions';
import { reducer } from '../+state/event.reducer';
import { EventState } from './event.state';
import { EventTypeEnum } from '../enums/event-type.enum';
import { showNavigationEvent } from '../events/show-navigation.const';
import { hideNavigationEvent } from '../events/hide-navigation.const';

const initialState: EventState = eventStateFactory.build();

describe('EventReducer', () => {
  it('should update the event in state on tiggerevent', () => {
    const event = eventFactory.build({
      eventType: EventTypeEnum.STEP_FINISHED,
      body: {
        key: 'THIS_IS_A_FINISHED_TEST',
      },
    });
    const action = triggerEvent(event);
    const state = reducer(initialState, action);
    expect(state.event?.eventType).toEqual(EventTypeEnum.STEP_FINISHED);
    expect(state.event?.body).toEqual({
      key: 'THIS_IS_A_FINISHED_TEST',
    });
  });

  it('should update the event in state with show navigation event', () => {
    const action = triggerEvent(showNavigationEvent);
    const state = reducer(initialState, action);
    expect(state.event?.eventType).toEqual(EventTypeEnum.SHOW_NAVIGATION);
  });

  it('should update the event in state with hide navigation event', () => {
    const action = triggerEvent(hideNavigationEvent);
    const state = reducer(initialState, action);
    expect(state.event?.eventType).toEqual(EventTypeEnum.HIDE_NAVIGATION);
  });
});

import { eventFactory, eventStateFactory } from './event-state.testfactory';
import { featureState, selectEvent } from '../+state/event.selectors';

describe('EventSelectors', () => {
  const state = eventStateFactory.build();

  it('featureState', () => {
    const result = featureState.projector(state);
    expect(result).toEqual(state);
  });

  it('selectEvent', () => {
    const result = selectEvent.projector(state);
    expect(result).toEqual(eventFactory.build());
  });
});

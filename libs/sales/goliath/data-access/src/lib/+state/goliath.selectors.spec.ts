import { goliathStateTestfactory } from './goliath-state.testfactory';
import { currentState, flows, stateActions, steps } from '../+state/goliath.selectors';

describe('goliath selectors', () => {
  const initialState = goliathStateTestfactory.build();

  describe('flows', () => {
    it('should select availableAddresses', () => {
      const result = flows.projector(initialState);
      expect(result).toEqual(initialState.flows);
    });
  });

  describe('steps', () => {
    it('should select contactAddress', () => {
      const result = steps.projector(initialState);
      expect(result).toEqual(initialState.steps);
    });
  });
  describe('stateActions', () => {
    it('should select deliveryAddress', () => {
      const result = stateActions.projector(initialState);
      expect(result).toEqual(initialState.stateActions);
    });
  });
  describe('currentState', () => {
    it('should select personalInfo', () => {
      const result = currentState.projector(initialState);
      expect(result).toEqual(initialState.currentState);
    });
  });
});

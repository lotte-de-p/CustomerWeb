import { goliathReducer } from './goliath.reducer';
import { goliathStateTestfactory } from './goliath-state.testfactory';
import { setCurrentState, setFlows, setStateActions, setSteps } from './goliath.actions';
import { SalesOrderState, StepNameEnum } from '../enums/goliath.enum';
import { Flow, StateAction, Step } from '../interfaces/goliath.interface';
import { StateActionEnum } from '../enums/state-action.enum';

describe('GoliathReducer', () => {
  const initialState = goliathStateTestfactory.build();

  it('should return initial state given an unknown action', () => {
    const action = { type: 'unknown' };
    const state = goliathReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  describe('setFlows', () => {
    it('should set flows', () => {
      const newFlows: Flow<unknown>[] = [{ name: 'Flow 1', steps: [], isRequired: jest.fn(), stateActions: [] }];
      const action = setFlows({ flows: newFlows });
      const state = goliathReducer(initialState, action);

      expect(state.flows).toEqual(newFlows);
      expect(state).not.toBe(initialState);
    });
  });

  describe('setSteps', () => {
    it('should set steps', () => {
      const newSteps: Step[] = [
        {
          name: StepNameEnum.INSTALLATION_TYPE,
          isRequired: jest.fn(),
          isOptional: false,
          requiredStateBeforeLoad: {
            state: SalesOrderState.SALES_ORDER_CREATED,
          },
        },
      ];
      const action = setSteps({ steps: newSteps });
      const state = goliathReducer(initialState, action);

      expect(state.steps).toEqual(newSteps);
      expect(state).not.toBe(initialState);
    });
  });

  describe('setStateActions', () => {
    it('should set state actions', () => {
      const newStateActions: StateAction<unknown>[] = [
        { name: StateActionEnum.ADD_ORDER_ITEMS, description: 'Add something important', weight: 10 },
      ];
      const action = setStateActions({ stateActions: newStateActions });
      const state = goliathReducer(initialState, action);

      expect(state.stateActions).toEqual(newStateActions);
      expect(state).not.toBe(initialState);
    });
  });

  describe('setCurrentState', () => {
    it('should set the current state', () => {
      const currentState = StateActionEnum.CREATE_SALES_ORDER;
      const action = setCurrentState({ state: currentState });
      const state = goliathReducer(initialState, action);

      expect(state.currentState).toBe(currentState);
      expect(state).not.toBe(initialState);
    });
  });
});

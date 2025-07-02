import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { defaultState, GoliathState } from './goliath.state';
import { stateFeatureName } from '../constants/state.const';
import { produce } from 'immer';
import { setCurrentState, setFlows, setStateActions, setSteps } from './goliath.actions';
import { Flow, StateAction, Step } from '../interfaces/goliath.interface';
import { StateActionEnum } from '../enums/state-action.enum';

export const reducer = createReducer(
  defaultState,
  on(setFlows, (state: GoliathState<unknown>, props: { flows: Flow<unknown>[] }) => {
    return produce(state, (draft: GoliathState<unknown>) => {
      draft.flows = props.flows;
    });
  }),
  on(setSteps, (state: GoliathState<unknown>, props: { steps: Step[] }) => {
    return produce(state, (draft: GoliathState<unknown>) => {
      draft.steps = props.steps;
    });
  }),
  on(setStateActions, (state: GoliathState<unknown>, props: { stateActions: StateAction<unknown>[] }) => {
    return produce(state, (draft: GoliathState<unknown>) => {
      draft.stateActions = props.stateActions;
    });
  }),
  on(setCurrentState, (state: GoliathState<unknown>, props: { state: StateActionEnum }) => {
    return produce(state, (draft: GoliathState<unknown>) => {
      draft.currentState = props.state;
    });
  })
);

export function goliathReducer(state: GoliathState<unknown> = defaultState, action: Action): GoliathState<unknown> {
  return reducer(state, action);
}

export const goliathFeature = createFeature({
  name: stateFeatureName,
  reducer: goliathReducer,
});

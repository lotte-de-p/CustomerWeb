import { Flow, StateAction, Step } from '../interfaces/goliath.interface';
import { StateActionEnum } from '../enums/state-action.enum';

export interface GoliathState<T> {
  flows: Flow<T>[];
  steps: Step[];
  stateActions: StateAction<T>[];
  currentState: StateActionEnum;
}

export const defaultState: GoliathState<unknown> = {
  flows: [],
  steps: [],
  stateActions: [],
  currentState: StateActionEnum.EMPTY,
};

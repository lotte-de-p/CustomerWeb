import { createAction, props } from '@ngrx/store';
import { Flow, StateAction, Step } from '../interfaces/goliath.interface';
import { StateActionEnum } from '../enums/state-action.enum';

export const setFlows = createAction('[goliath] set flows', props<{ flows: Flow<unknown>[] }>());
export const setSteps = createAction('[goliath] set steps', props<{ steps: Step[] }>());
export const setStateActions = createAction(
  '[goliath] set state actions',
  props<{
    stateActions: StateAction<unknown>[];
  }>()
);
export const setCurrentState = createAction('[goliath] set current state', props<{ state: StateActionEnum }>());

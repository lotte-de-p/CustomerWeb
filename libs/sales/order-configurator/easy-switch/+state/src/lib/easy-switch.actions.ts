import { createAction, props } from '@ngrx/store';

export const selectEasySwitchWanted = createAction('[Easy Switch] Select Choice', props<{ choice: boolean }>());

export const submitEasySwitchWanted = createAction('[Easy Switch] Submit Choice', props<{ choice: boolean }>());

export const submitEasySwitchWantedSuccess = createAction('[Easy Switch] Submit Choice Success');

export const submitEasySwitchWantedFailure = createAction(
  '[Easy Switch] Submit Choice Failure',
  props<{ error: string }>()
);

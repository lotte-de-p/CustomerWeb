import { createAction, props } from '@ngrx/store';
import {
  CalculateIntentActionPayload,
  GetSalesOrderActionPayload,
  Intents,
  UpdateIntent,
} from '../../actions/sales.actions';

export const getSalesOrder = createAction('[Sales] Get Sales Order', props<{ payload: GetSalesOrderActionPayload }>());
export const calculateIntent = createAction(
  '[Sales] Calculate Intent',
  props<{ payload: CalculateIntentActionPayload }>()
);
export const setIntents = createAction('[Sales] Set Intents', props<{ payload: Intents }>());
export const setCalculateIntent = createAction('[Sales] Set calculate Intent', props<{ payload: boolean }>());
export const updateIntent = createAction('[Sales] Update Intent', props<{ payload: UpdateIntent }>());
export const setErrorMessage = createAction('[Sales] Set Error Message', props<{ payload: string }>());

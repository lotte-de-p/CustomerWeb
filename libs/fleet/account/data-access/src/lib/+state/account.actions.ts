import { createAction, props } from '@ngrx/store';
export const setNextPage = createAction('[account] setNextPage', props<{ page: string }>());
export const setPhoneNumber = createAction('[account] setPhoneNumber', props<{ phoneNumber: string }>());

import { createAction, props } from '@ngrx/store';

export const setRedirectUrl = createAction(
  '[thank-you] set redirect URL',
  props<{ redirectUrl: string | undefined }>()
);

export const setOrderNumber = createAction('[thank-you] set order number', props<{ orderNumber: string }>());

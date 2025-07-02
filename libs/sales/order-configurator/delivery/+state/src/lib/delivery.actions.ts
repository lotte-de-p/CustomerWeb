import { createAction, props } from '@ngrx/store';
import { RecipientAddress, RecipientDetails } from '@sales/order-configurator/delivery/domain';

export const setRecipientDetails = createAction(
  '[installation address] set recipient details',
  props<{ recipientDetails: RecipientDetails }>()
);

export const setRecipientAddress = createAction(
  '[installation address] set recipient address',
  props<{ recipientAddress: RecipientAddress }>()
);

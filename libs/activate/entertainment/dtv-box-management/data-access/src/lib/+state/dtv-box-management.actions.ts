import { createAction, emptyProps, props } from '@ngrx/store';
import { Address } from '../entities/address.model';
import { DtvBoxSubscription } from '../entities/subscription.model';

// Subscriptions
export const loadSubscriptions = createAction('[dtv-box-management] loadSubscriptions', emptyProps);

export const loadSubscriptionsSuccess = createAction(
  '[dtv-box-management] loadSubscriptionsSuccess',
  props<{ subscriptions: DtvBoxSubscription[] }>()
);

export const loadSubscriptionsFailure = createAction(
  '[dtv-box-management] loadSubscriptionsFailure',
  props<{
    error: Error;
  }>()
);

// Addresses
export const loadAddresses = createAction('[dtv-box-management] loadAddresses', emptyProps);

export const loadAddressesSuccess = createAction(
  '[dtv-box-management] loadAddressesSuccess',
  props<{ addresses: Address[] }>()
);

export const loadAddressesFailure = createAction(
  '[dtv-box-management] loadAddressesFailure',
  props<{ error: Error }>()
);

export const setSelectedAddress = createAction(
  '[dtv-box-management] setSelectedAddress',
  props<{ address: Address }>()
);

// Reset pin code
export const resetPinCode = createAction(
  '[dtv-box-management] resetPinCode',
  props<{
    identifier: string;
  }>()
);

export const resetPinCodeSuccess = createAction('[dtv-box-management] resetPinCodeSuccess', emptyProps);

export const resetPinCodeFailure = createAction(
  '[dtv-box-management] resetPinCodeFailure',
  props<{
    error: Error;
  }>()
);

// Show security code
export const showSecurityCode = createAction('[dtv-box-management] showSecurityCode', emptyProps);

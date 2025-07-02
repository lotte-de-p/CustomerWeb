import { createFeature, createReducer, on } from '@ngrx/store';
import { DtvBoxManagementState, initialState } from './dtv-box-management.state';
import {
  loadAddresses,
  loadAddressesFailure,
  loadAddressesSuccess,
  loadSubscriptions,
  loadSubscriptionsFailure,
  loadSubscriptionsSuccess,
  resetPinCode,
  resetPinCodeFailure,
  resetPinCodeSuccess,
  setSelectedAddress,
  showSecurityCode,
} from './dtv-box-management.actions';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { Address } from '../entities/address.model';

export const DTV_BOX_MANAGEMENT_FEATURE_KEY = 'dtv-box-management';

export const dtvBoxManagementReducer = createReducer(
  initialState,

  // Subscriptions
  on(loadSubscriptions, (state: DtvBoxManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(loadSubscriptionsSuccess, (state: DtvBoxManagementState, action: { subscriptions: DtvBoxSubscription[] }) => ({
    ...state,
    subscriptions: action.subscriptions,
    isLoading: false,
  })),
  on(loadSubscriptionsFailure, (state: DtvBoxManagementState, action: { error: Error }) => ({
    ...state,
    error: action.error,
    isLoading: false,
  })),

  // Addresses
  on(loadAddresses, (state: DtvBoxManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(loadAddressesSuccess, (state: DtvBoxManagementState, action: { addresses: Address[] }) => ({
    ...state,
    addresses: action.addresses,
    selectedAddress: action.addresses[0],
    isLoading: false,
  })),
  on(loadAddressesFailure, (state: DtvBoxManagementState, action: { error: Error }) => ({
    ...state,
    error: action.error,
    isLoading: false,
  })),

  // Selected address
  on(setSelectedAddress, (state: DtvBoxManagementState, action: { address: Address }) => ({
    ...state,
    selectedAddress: action.address,
    isPinCodeReset: false,
    showSecurityCode: false,
  })),

  // PinCode
  on(resetPinCode, (state: DtvBoxManagementState) => ({
    ...state,
    isLoading: true,
    isPinCodeReset: false,
  })),
  on(resetPinCodeSuccess, (state: DtvBoxManagementState) => ({
    ...state,
    isLoading: false,
    isPinCodeReset: true,
  })),
  on(resetPinCodeFailure, (state: DtvBoxManagementState, action: { error: Error }) => ({
    ...state,
    error: action.error,
    isPinCodeReset: false,
    isLoading: false,
  })),

  // Show security code
  on(showSecurityCode, (state: DtvBoxManagementState) => ({
    ...state,
    showSecurityCode: true,
  }))
);

export const dtvBoxManagementFeature = createFeature({
  name: DTV_BOX_MANAGEMENT_FEATURE_KEY,
  reducer: dtvBoxManagementReducer,
});

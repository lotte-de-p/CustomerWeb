import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { AddressState, defaultState } from './address.state';
import { setInstallationAddresses, setNewInstallationAddress, setSelectedAddress } from './address.actions';
import { produce } from 'immer';
import { stateFeatureName } from './state.const';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

export const reducer = createReducer(
  defaultState,
  on(setSelectedAddress, (state: AddressState, props: { selectedAddress: InstallationAddress }) => {
    return produce(state, (draft: AddressState) => {
      draft.selectedAddress = props.selectedAddress;
    });
  }),
  on(setInstallationAddresses, (state: AddressState, props: { addresses: InstallationAddress[] }) => {
    return produce(state, (draft: AddressState) => {
      draft.addresses = props.addresses;
    });
  }),
  on(setNewInstallationAddress, (state: AddressState, props: { newAddress: InstallationAddress }) => {
    return produce(state, (draft: AddressState) => {
      draft.newAddress = props.newAddress;
    });
  })
);

export function addressReducer(state: AddressState = defaultState, action: Action): AddressState {
  return reducer(state, action);
}

export const installationAddressFeature = createFeature({
  name: stateFeatureName,
  reducer: addressReducer,
});

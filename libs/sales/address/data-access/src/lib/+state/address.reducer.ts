import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { stateFeatureName } from '../constants/state.const';
import { AddressState, defaultState } from './address.state';
import { setInstallationAddresses, setSelectedAddress } from './address.actions';
import { InstallationAddressInterface } from '../interfaces/installation-address.interface';
import { produce } from 'immer';

export const reducer = createReducer(
  defaultState,
  on(setSelectedAddress, (state: AddressState, props: { selectedAddress: InstallationAddressInterface }) => {
    return produce(state, (draft: AddressState) => {
      draft.addresses?.forEach((address) => (address.selected = false));
      const foundAddress = draft.addresses?.find((address) => address.id === props.selectedAddress.id);
      if (foundAddress) {
        foundAddress.selected = true;
      }
    });
  }),
  on(setInstallationAddresses, (state: AddressState, props: { addresses: InstallationAddressInterface[] }) => {
    return produce(state, (draft: AddressState) => {
      draft.addresses = props.addresses;
    });
  })
);

export function addressReducer(state: AddressState, action: Action): AddressState {
  return reducer(state, action);
}

export const addressFeature = createFeature({
  name: stateFeatureName,
  reducer,
});

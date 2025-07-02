import { InstallationAddressInterface } from '../interfaces/installation-address.interface';

export interface AddressState {
  addresses: InstallationAddressInterface[] | undefined;
}

export const defaultState: AddressState = {
  addresses: undefined,
};

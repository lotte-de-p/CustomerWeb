import {
  antwerpAddressTestFactory,
  boxSubhouseAddressTestFactory,
  InstallationAddress,
  mechelenAddressTestFactory,
} from '@sales/order-configurator/domain-installation-address';

export interface AddressState {
  addresses: InstallationAddress[] | undefined;
  selectedAddress: InstallationAddress | undefined;
  newAddress: InstallationAddress | undefined;
}

export const defaultState: AddressState = {
  addresses: [
    mechelenAddressTestFactory.build(),
    antwerpAddressTestFactory.build(),
    boxSubhouseAddressTestFactory.build(),
  ],
  selectedAddress: undefined,
  newAddress: undefined,
};

import { AddressState } from './address.state';
import {
  antwerpAddressTestFactory,
  boxSubhouseAddressTestFactory,
  gentAddressTestFactory,
  mechelenAddressTestFactory,
} from '@sales/order-configurator/domain-installation-address';
import { Factory } from 'fishery';

export const addressStateTestFactory = Factory.define<AddressState>(() => {
  return {
    addresses: [
      mechelenAddressTestFactory.build(),
      antwerpAddressTestFactory.build(),
      boxSubhouseAddressTestFactory.build(),
    ],
    selectedAddress: undefined,
    newAddress: undefined,
  };
});

export const addressStateWithNewTestFactory = Factory.define<AddressState>(() => {
  return {
    addresses: [mechelenAddressTestFactory.build(), antwerpAddressTestFactory.build()],
    selectedAddress: undefined,
    newAddress: gentAddressTestFactory.build(),
  };
});

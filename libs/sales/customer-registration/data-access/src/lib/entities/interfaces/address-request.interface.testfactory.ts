import * as Factory from 'factory.ts';
import { RawAddressInterface } from './raw-address.interface';

export const addressConfigurationTestFactory = Factory.Sync.makeFactory<RawAddressInterface>({
  id: undefined,
  type: 'Geographical Address',
  country: 'België',
  countryCode: 'BE',
  municipality: 'Mechelen',
  postalCode: '2800',
  street: '',
  streetId: undefined,
  houseNumber: undefined,
  boxNumber: undefined,
  floorNumber: undefined,
  tinaLocationId: undefined,
  addresstype: undefined,
  housenr: undefined,
  countrycode: undefined,
  postalcode: undefined,
  address: [],
});

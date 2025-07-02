import { makeFactory } from 'factory.ts';
import { InitialAddress } from './initial-address.interface';
import { addressUnitTestfactory } from '@sales/address-form-field/data-access';

export const initialAddressFactory = makeFactory<InitialAddress>({
  addressUnit: addressUnitTestfactory.build(),
  country: 'België',
  countryCode: 'BE',
  subHouseNumber: '102',
  houseNumber: '50',
  municipality: 'Mechelen',
  postalCode: '2800',
  street: 'Begijnenstraat',
});

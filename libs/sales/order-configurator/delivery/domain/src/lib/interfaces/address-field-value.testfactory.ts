import { makeFactory } from 'factory.ts';
import { AddressFieldValue } from './address-field-value.interface';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';

export const addressFieldValueTestFactory = makeFactory<AddressFieldValue>({
  municipality: {
    location: 'Mechelen',
    postalCode: '2800',
  },
  street: {
    value: 'Teststreet',
    addressUnit: addressUnitTestfactory.build(),
  },
  geographical_address: {
    housenumber: '50',
    subhousenumber: '1',
    box: undefined,
    addressUnit: addressUnitTestfactory.build(),
    isManualAddress: false,
  },
});

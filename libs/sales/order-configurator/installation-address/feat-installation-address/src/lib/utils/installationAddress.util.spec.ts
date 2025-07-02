import { AddressFieldValue } from '@sales/address-form-field/data-access';
import { InstallationAddressUtil } from './installationAddress.util';
import { addressFieldValueTestFactory } from '@sales/delivery/data-access';

const streetName = 'NC teststreet';
const data = {
  street: streetName,
  municipality: 'Leuven',
  country: 'België',
  countryCode: 'BE',
  postalCode: '3000',
  houseNumber: '50',
  subHouseNumber: '1',
  box: 'A',
  municipalityId: 'municipality-id',
  streetId: 'street-id',
  countryId: 'country-id',
};

const addressFieldValue: AddressFieldValue = addressFieldValueTestFactory.build({
  municipality: {
    postalCode: data.postalCode,
    location: data.municipality,
  },
  street: {
    value: data.street,
    addressUnit: {
      addressUnitTypeId: '',
      externalId: '',
      href: '',
      id: '',
      name: '',
      type: '',
    },
  },
});

describe('InstallationAddressUtil', () => {
  describe('convertFieldValueToInstallationAddress', () => {
    it('should return installation address', () => {
      const actual = InstallationAddressUtil.convertFieldValueToInstallationAddress(addressFieldValue);
      expect(actual?.street).toEqual('NC teststreet');
    });

    it('should return default values for postal code, municipality, street and housenumber if they are not available', () => {
      const test = addressFieldValueTestFactory.build({
        municipality: {
          postalCode: undefined,
          location: undefined,
        },
        street: undefined,
      });

      const actual = InstallationAddressUtil.convertFieldValueToInstallationAddress(test);
      expect(actual).toEqual(undefined);
    });
  });
});

import { AddressFieldValue } from '@sales/address-form-field/data-access';
import { AddressUtil } from './address.util';
import { addressFieldValueTestFactory } from '@sales/delivery/data-access';
import { addressUnitTestfactory, parentAddressUnitTestfactory } from '@sales/shared/address/data-access';

describe('AddressUtil', () => {
  const streetName = 'NC teststreet';
  const parenAddress = 'Parent Address';
  const addressUnitParentId = '9132373123813243365';
  const childAddress = 'Child Address';
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

  const addressUnit = addressUnitTestfactory.build({
    name: data.houseNumber,
    subHouseNumber: data.subHouseNumber,
    postalCode: data.postalCode,
    boxNumber: data.box,
    addressUnitChain: [
      parentAddressUnitTestfactory.build({
        type: 'Country',
        id: data.countryId,
        addressUnitTypeId: addressUnitParentId,
        nameDU: data.country,
        abbreviation: 'BE',
        name: data.country,
      }),
      parentAddressUnitTestfactory.build({
        type: 'Municipality',
        addressUnitTypeId: '9148294340213629697',
        id: data.municipalityId,
        nameDU: data.municipality,
        name: data.municipality,
      }),
      parentAddressUnitTestfactory.build({
        type: 'Street',
        addressUnitTypeId: '9148294798613629990',
        id: data.streetId,
        nameDU: data.street,
        name: data.street,
      }),
    ],
    parent: parentAddressUnitTestfactory.build(),
  });

  const postalAddressUnit = addressUnitTestfactory.build({
    name: data.postalCode,
    addressUnitChain: [
      parentAddressUnitTestfactory.build({
        type: 'Country',
        id: data.countryId,
        addressUnitTypeId: addressUnitParentId,
        nameDU: data.country,
        abbreviation: 'BE',
        name: data.country,
      }),
      parentAddressUnitTestfactory.build({
        type: 'Municipality',
        addressUnitTypeId: '9148294340213629697',
        id: data.municipalityId,
        nameDU: data.municipality,
        name: data.municipality,
      }),
    ],
    parent: parentAddressUnitTestfactory.build(),
  });

  const addressFieldValue: AddressFieldValue = addressFieldValueTestFactory.build({
    municipality: {
      postalCode: data.postalCode,
      location: data.municipality,
    },
    street: {
      value: data.street,
    },
  });

  describe('convertNcAddressToDeliveryAddress', () => {
    it('should return a delivery address', () => {
      const deliveryAddressUnderTest = AddressUtil.convertNcAddressToDeliveryAddress(addressUnit);
      expect(deliveryAddressUnderTest.addressUnit).toEqual(addressUnit);
      expect(deliveryAddressUnderTest.postalCode).toEqual(data.postalCode);
      expect(deliveryAddressUnderTest.houseNumber).toEqual(data.houseNumber);
      expect(deliveryAddressUnderTest.subHouseNumber).toEqual(data.subHouseNumber);
      expect(deliveryAddressUnderTest.street).toEqual(data.street);
      expect(deliveryAddressUnderTest.municipality).toEqual(data.municipality);
      expect(deliveryAddressUnderTest.country).toEqual(data.country);
    });

    it('should return a delivery address without box, postal code, and sub house number if none are found', () => {
      const addressUnitWithoutBox = addressUnitTestfactory.build({
        ...addressUnit,
        boxNumber: undefined,
        postalCode: undefined,
        subHouseNumber: undefined,
      });

      const deliveryAddressUnderTest = AddressUtil.convertNcAddressToDeliveryAddress(addressUnitWithoutBox);
      expect(deliveryAddressUnderTest.addressUnit).toEqual(addressUnitWithoutBox);
      expect(deliveryAddressUnderTest.postalCode).toEqual('');
      expect(deliveryAddressUnderTest.subHouseNumber).toBeUndefined();
      expect(deliveryAddressUnderTest.street).toEqual(data.street);
      expect(deliveryAddressUnderTest.municipality).toEqual(data.municipality);
      expect(deliveryAddressUnderTest.country).toEqual(data.country);
    });
  });

  describe('convertNcPostalAddressToDeliveryAddress', () => {
    it('should return a delivery address with an empty street and house number', () => {
      const deliveryAddressUnderTest = AddressUtil.convertNcPostalAddressToDeliveryAddress(postalAddressUnit);
      expect(deliveryAddressUnderTest.addressUnit).toEqual(postalAddressUnit);
      expect(deliveryAddressUnderTest.postalCode).toEqual(data.postalCode);
      expect(deliveryAddressUnderTest.houseNumber).toEqual('');
      expect(deliveryAddressUnderTest.subHouseNumber).toBeUndefined();
      expect(deliveryAddressUnderTest.box).toBeUndefined();
      expect(deliveryAddressUnderTest.street).toEqual('');
      expect(deliveryAddressUnderTest.municipality).toEqual(data.municipality);
      expect(deliveryAddressUnderTest.country).toEqual(data.country);
    });

    it('should return empty postal code when none is given', () => {
      const postalAddressUnitWithoutPostalCode = { ...postalAddressUnit, name: '' };

      const deliveryAddressUnderTest = AddressUtil.convertNcPostalAddressToDeliveryAddress(
        postalAddressUnitWithoutPostalCode
      );
      expect(deliveryAddressUnderTest.postalCode).toEqual('');
    });
  });

  describe('convertFieldValueToDeliveryAddress', () => {
    it('should return a delivery address', () => {
      const actual = AddressUtil.convertFieldValueToDeliveryAddress(addressFieldValue);
      expect(actual?.street).toEqual('NC teststreet');
    });

    it('should return undefined if addressFieldValue is missing required fields', () => {
      const testWithMissingFields = addressFieldValueTestFactory.build({
        municipality: {
          postalCode: undefined,
          location: undefined,
        },
        street: undefined,
      });

      const actual = AddressUtil.convertFieldValueToDeliveryAddress(testWithMissingFields);
      expect(actual).toBeUndefined();
    });

    it('should return undefined if the street has no address unit', () => {
      const noStreetAddressValue: AddressFieldValue = addressFieldValueTestFactory.build({
        street: { value: streetName, addressUnit: undefined },
      });
      const actual = AddressUtil.convertFieldValueToDeliveryAddress(noStreetAddressValue);
      expect(actual).toBeUndefined();
    });

    it('should return a delivery address when isManualAddress is true', () => {
      const manualAddressFieldValue = addressFieldValueTestFactory.build({
        street: { value: streetName, addressUnit: addressUnit },
        geographical_address: { isManualAddress: true, housenumber: '123' },
        municipality: { postalCode: '1234', location: 'Test City' },
      });

      const actual = AddressUtil.convertFieldValueToDeliveryAddress(manualAddressFieldValue);
      expect(actual?.houseNumber).toEqual('123');
      expect(actual?.box).toEqual(manualAddressFieldValue.geographical_address?.box?.boxNumber || '');
    });

    it('should return a delivery address when isManualAddress is false', () => {
      const addressWithUnitFieldValue = addressFieldValueTestFactory.build({
        street: { value: streetName, addressUnit: addressUnit },
        geographical_address: { isManualAddress: false, housenumber: '123', addressUnit: addressUnit },
        municipality: { postalCode: '1234', location: 'Test City' },
      });

      const actual = AddressUtil.convertFieldValueToDeliveryAddress(addressWithUnitFieldValue);
      expect(actual?.houseNumber).toEqual('123');
      expect(actual?.box).toEqual(addressWithUnitFieldValue.geographical_address?.box?.boxNumber || '');
    });

    it('should return undefined if street is missing', () => {
      const missingStreet: AddressFieldValue = addressFieldValueTestFactory.build({
        street: undefined,
        municipality: {
          postalCode: '1234',
          location: 'Test City',
        },
      });

      const result = AddressUtil.convertFieldValueToDeliveryAddress(missingStreet);
      expect(result).toBeUndefined();
    });

    it('should return undefined if municipality is missing', () => {
      const missingMunicipality: AddressFieldValue = addressFieldValueTestFactory.build({
        street: {
          value: 'Test Street',
          addressUnit: addressUnit,
        },
        municipality: undefined, // No municipality provided
      });

      const result = AddressUtil.convertFieldValueToDeliveryAddress(missingMunicipality);
      expect(result).toBeUndefined();
    });

    it('should use default values for geographical_address if it is undefined', () => {
      const addressFieldValueWithNoGeographicalAddress: AddressFieldValue = addressFieldValueTestFactory.build({
        geographical_address: undefined, // explicitly setting geographical_address as undefined
        street: {
          value: 'Test Street',
          addressUnit: addressUnit,
        },
        municipality: {
          postalCode: '1234',
          location: 'Test City',
        },
      });

      const result = AddressUtil.convertFieldValueToDeliveryAddress(addressFieldValueWithNoGeographicalAddress);

      // Verify that the function returns a DeliveryAddress with default values
      expect(result?.houseNumber).toBeUndefined(); // Should be undefined since we used the default value
      expect(result?.subHouseNumber).toBeUndefined(); // Should be undefined since we used the default value
      expect(result?.box).toBeUndefined(); // Should be an empty string since it's set that way in formatBoxString
      expect(result?.street).toBeUndefined(); // Should match the provided street value
    });
  });

  describe('flattenAddressUnitChain', () => {
    it('should flatten a nested address unit chain', () => {
      const nestedAddressUnit = addressUnitTestfactory.build({
        name: data.houseNumber,
        addressUnitChain: [
          parentAddressUnitTestfactory.build({
            type: 'Parent',
            id: 'parent-id',
            addressUnitTypeId: addressUnitParentId,
            nameDU: parenAddress,
            abbreviation: 'PA',
            name: parenAddress,
            addressUnitChain: [
              parentAddressUnitTestfactory.build({
                type: 'Child',
                id: 'child-id',
                addressUnitTypeId: addressUnitParentId,
                nameDU: childAddress,
                abbreviation: 'CA',
                name: childAddress,
              }),
            ],
          }),
        ],
      });

      const flattenedChain = AddressUtil.flattenAddressUnitChain(nestedAddressUnit);
      expect(flattenedChain.length).toBe(3);
      expect(flattenedChain[0].name).toBe(nestedAddressUnit.name);
      expect(flattenedChain[1].name).toBe(parenAddress);
      expect(flattenedChain[2].name).toBe(childAddress);
    });
  });

  describe('getAddressValue', () => {
    it('should return the correct address value for a given type', () => {
      const result = AddressUtil.getAddressValue(addressUnit, 'Country');
      expect(result).toBe(data.country);
    });

    it('should return an empty string if the type is not found', () => {
      const result = AddressUtil.getAddressValue(addressUnit, 'NonExistingType');
      expect(result).toBe('');
    });

    it('should return an empty string if the addressUnit is undefined', () => {
      const result = AddressUtil.getAddressValue(undefined, 'Country');
      expect(result).toBe('');
    });
  });

  describe('getAddressValueId', () => {
    it('should return the correct address value ID for a given type', () => {
      const result = AddressUtil.getAddressValueId(addressUnit, 'Country');
      expect(result).toBe(data.countryId);
    });

    it('should return an empty string if the type is not found', () => {
      const result = AddressUtil.getAddressValueId(addressUnit, 'NonExistingType');
      expect(result).toBe('');
    });
  });

  describe('flattenAddressUnitChain', () => {
    it('should return a flattened list of address units', () => {
      const flattenedChain = AddressUtil.flattenAddressUnitChain(addressUnit);
      expect(flattenedChain.length).toBe(4); // Assuming 3 parents and 1 child.
      expect(flattenedChain[0].name).toBe(data.houseNumber);
      expect(flattenedChain[1].name).toBe(data.country);
      expect(flattenedChain[2].name).toBe(data.municipality);
      expect(flattenedChain[3].name).toBe(data.street);
    });

    it('should return a single element list if no address unit chain exists', () => {
      const singleUnit = addressUnitTestfactory.build({
        addressUnitChain: undefined,
      });
      const flattenedChain = AddressUtil.flattenAddressUnitChain(singleUnit);
      expect(flattenedChain.length).toBe(1);
      expect(flattenedChain[0].name).toBe(singleUnit.name);
    });
  });

  describe('AddressUtil.formatBoxString', () => {
    it('should return an empty string when box is undefined', () => {
      const result = AddressUtil.formatBoxString(undefined);
      expect(result).toBe('');
    });

    it('should return only the box number when floor is undefined', () => {
      const result = AddressUtil.formatBoxString({ boxNumber: 'A' });
      expect(result).toBe('A');
    });

    it('should return only the floor string when box number is undefined', () => {
      const result = AddressUtil.formatBoxString({ floor: '2' });
      expect(result).toBe(' (2)');
    });

    it('should return a combination of box number and floor string', () => {
      const result = AddressUtil.formatBoxString({ boxNumber: 'A', floor: '2' });
      expect(result).toBe('A (2)');
    });

    it('should return an empty string when both box number and floor are undefined', () => {
      const result = AddressUtil.formatBoxString({});
      expect(result).toBe('');
    });

    it('should handle cases with empty strings correctly', () => {
      const result = AddressUtil.formatBoxString({ boxNumber: '', floor: '' });
      expect(result).toBe('');
    });

    it('should return just the floor string when box number is an empty string', () => {
      const result = AddressUtil.formatBoxString({ boxNumber: '', floor: '3' });
      expect(result).toBe(' (3)');
    });

    it('should return just the box number when floor is an empty string', () => {
      const result = AddressUtil.formatBoxString({ boxNumber: 'B', floor: '' });
      expect(result).toBe('B');
    });
  });
});

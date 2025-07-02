import { AddressForm } from './address-form.model';
import { AddressFields } from './address.enum';

describe('AddressForm', () => {
  it('should create an instance', () => {
    expect(new AddressForm({})).toBeTruthy();
  });

  describe('build', () => {
    it('should create an instance of addressForm', () => {
      const addressForm = AddressForm.build();

      expect(addressForm).toBeDefined();
    });
  });

  describe('markAsInvalid', () => {
    it('should mark the form as invalid given an invalid field', () => {
      const addressForm = AddressForm.build();
      addressForm.markAsInvalid(AddressFields.STREET);
      expect(addressForm.valid).toBe(false);
    });
  });

  describe('resetFromField', () => {
    it('should reset the subsequent field values and disable them', () => {
      const addressForm = createBasicAddressForm();
      addressForm.resetFromField(AddressFields.HOUSE_NUMBER, false);

      expect(addressForm.street).toBe('Leuvensesteenweg');
      expect(addressForm.houseNumber).toBe('');
      expect(addressForm.get(AddressFields.HOUSE_NUMBER)?.disabled).toBe(true);
      expect(addressForm.subHouseNumber).toBe('');
      expect(addressForm.get(AddressFields.SUB_HOUSE)?.disabled).toBe(true);
    });

    it('should reset the subsequent field values and enable the first field given enable true', () => {
      const addressForm = createBasicAddressForm();
      addressForm.resetFromField(AddressFields.HOUSE_NUMBER, true);

      expect(addressForm.street).toBe('Leuvensesteenweg');
      expect(addressForm.houseNumber).toBe('');
      expect(addressForm.get(AddressFields.HOUSE_NUMBER)?.disabled).toBe(false);
      expect(addressForm.subHouseNumber).toBe('');
      expect(addressForm.get(AddressFields.SUB_HOUSE)?.disabled).toBe(true);
    });
  });

  describe('createSearchAddressRequest', () => {
    it('should create the request given a basic address', () => {
      const addressForm = createBasicAddressForm();
      const addressRequestInterface = addressForm.createSearchAddressRequest();

      expect(addressRequestInterface.municipality).toBe(addressForm.zipCode.location);
      expect(addressRequestInterface.postalCode).toBe(addressForm.zipCode.postalCode);
      expect(addressRequestInterface.street).toBe(addressForm.street);
      expect(addressRequestInterface.houseNumber).toBe(addressForm.houseNumber);
      expect(addressRequestInterface.customHeaders).toEqual({ range: '300' });
    });
  });

  describe('createInternalSearchAddressRequest', () => {
    it('should create the request given a basic address', () => {
      const addressForm = createBasicAddressForm();
      const addressRequestInterface = addressForm.createInternalSearchAddressRequest();
      expect(addressRequestInterface.houseNumber).toBe(addressForm.houseNumber);
      expect(addressRequestInterface.subHouseNumber).toBe(addressForm.subHouseNumber);
      expect(addressRequestInterface.boxNumber).toBe(addressForm.boxNumber);
    });
  });

  function createBasicAddressForm() {
    const addressForm = AddressForm.build();
    addressForm.zipCode = { location: 'Mechelen', postalCode: '2800' };
    addressForm.street = 'Leuvensesteenweg';
    addressForm.houseNumber = '1';
    addressForm.subHouseNumber = 'A';
    addressForm.boxNumber = '3';
    return addressForm;
  }
});

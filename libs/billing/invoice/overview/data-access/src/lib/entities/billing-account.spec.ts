import { billingAddressToDisplay, BillingAddress } from './billing-account';

describe('billingAddressToDisplay', () => {
  it('should return a string with all address parts if all parts are non-empty', () => {
    const billingAddress: BillingAddress = {
      street: 'Street',
      floor: 'Floor',
      houseNumber: 'HouseNumber',
      subHouseNumber: 'SubHouseNumber',
      boxNumber: 'BoxNumber',
      postalCode: 'PostalCode',
      municipality: 'Municipality',
    };

    const result = billingAddressToDisplay(billingAddress);

    expect(result).toEqual('Street, Floor, HouseNumber, SubHouseNumber, BoxNumber, PostalCode, Municipality');
  });

  it('should return a string without empty or undefined address parts', () => {
    const billingAddress: BillingAddress = {
      street: 'Street',
      floor: '',
      houseNumber: '',
      subHouseNumber: 'SubHouseNumber',
      boxNumber: 'BoxNumber',
      postalCode: 'PostalCode',
      municipality: 'Municipality',
    };

    const result = billingAddressToDisplay(billingAddress);

    expect(result).toEqual('Street, SubHouseNumber, BoxNumber, PostalCode, Municipality');
  });
});

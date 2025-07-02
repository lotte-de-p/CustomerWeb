import { AddressPipe } from './address.pipe';
import { Address } from '@entertainment/dtv-box-management/data-access';

describe('AddressPipe', () => {
  let pipe: AddressPipe;

  beforeEach(() => {
    pipe = new AddressPipe();
  });

  it('should format the address correctly', () => {
    const address: Address = {
      street: 'Main St',
      houseNumber: '123',
      postalCode: '12345',
      city: 'Townsville',
      id: '',
      country: '',
      countryCode: '',
    };

    const expected = 'Main St 123, 12345 Townsville';
    expect(pipe.transform(address)).toEqual(expected);
  });
});

import { Address } from './address.model';

describe('Address', () => {
  it('should create model', () => {
    const address = new Address();
    expect(address).toEqual({} as Address);
  });
});

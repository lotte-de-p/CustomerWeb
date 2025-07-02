import { TranslateModule } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { AddressMapper } from './address.mapper';

describe('AddressSelectorMapper', () => {
  let addressMapper: AddressMapper;
  const rawAddresses = require('../mock/raw-addresses-mock.json');
  const addresses = require('../mock/addresses-mock.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [AddressMapper],
    });

    addressMapper = TestBed.inject(AddressMapper);
  });

  it('should map correctly', () => {
    const mappedAddresses = addressMapper.toModel(rawAddresses);
    expect(mappedAddresses).toEqual(addresses);
  });
});

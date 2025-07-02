import { TestBed } from '@angular/core/testing';
import { FormatAddressPipe } from './format-address.pipe';
import { AddressInterface } from '../interfaces/address.interface';

describe('FormatAddressPipe', () => {
  let formatAddressPipe: FormatAddressPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatAddressPipe, { provide: 'Window', useValue: {} }],
    });

    formatAddressPipe = TestBed.inject(FormatAddressPipe);
  });

  describe('transform', () => {
    it('should return formatted address', () => {
      const address: AddressInterface = {
        street: 'street',
        houseNumber: 'houseNumber',
        subHouseNumber: 'subHouseNumber',
        zipcode: 'zipcode',
        subMunicipality: 'subMunicipality',
        addressGeoId: '1sa1234',
      };
      const actual = formatAddressPipe.transform(address);
      expect(actual).toBe('street houseNumbersubHouseNumber, zipcode subMunicipality');
    });
  });
});

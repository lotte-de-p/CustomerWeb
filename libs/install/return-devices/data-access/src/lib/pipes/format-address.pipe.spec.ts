import { TestBed } from '@angular/core/testing';
import { FormatAddressPipe } from './format-address.pipe';
import { AddressSelectorModel } from '../entities/address-selector.model';

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
      const address: AddressSelectorModel = {
        street: 'street',
        houseNumber: 'houseNumber',
        postalCode: 'postalCode',
        city: 'municipality',
        id: 'id',
        country: 'country',
        countryCode: 'countryCode',
      };
      const actual = formatAddressPipe.transform(address);
      expect(actual).toBe('street houseNumber, postalCode municipality');
    });
  });
});

import { AddressFormFieldFacade } from '@sales/address-form-field/data-access';
import { AddressUtil } from './address.util';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  AddressUnit,
  addressUnitTestfactory,
  addressUnitTestWithoutMunicipalityfactory,
  Municipality,
} from '@sales/shared/address/data-access';

describe('AddressUtil', () => {
  let mockFacade: Partial<AddressFormFieldFacade>;
  let mockStreets: AddressUnit[];
  let mockMunicipalities: Municipality[];

  describe('getMunicipalityValue', () => {
    it('should return the municipality value', () => {
      const municipality = 'Leuven';
      const postalCode = '3000';
      const addressUnit = addressUnitTestfactory.build();
      const underTest = AddressUtil.getMunicipalityValue(postalCode, addressUnit);
      expect(underTest).toStrictEqual({
        location: municipality,
        postalCode: postalCode,
      });
    });

    it('should return an error if the address chain has no municipality value', () => {
      const postalCode = '3000';
      const addressUnit = addressUnitTestWithoutMunicipalityfactory.build();
      expect(() => {
        AddressUtil.getMunicipalityValue(postalCode, addressUnit);
      }).toThrowError();
    });

    it('should return an error if the addressUnit is undefined', () => {
      const postalCode = '3000';
      expect(() => {
        AddressUtil.getMunicipalityValue(postalCode, undefined);
      }).toThrowError();
    });
  });

  describe('Filters', () => {
    beforeEach(() => {
      mockMunicipalities = [
        { postalCode: '12345', location: 'Testville' },
        { postalCode: '67890', location: 'Exampletown' },
      ];
      mockStreets = [
        addressUnitTestfactory.build({ id: '1', name: 'Teststreet1', postalCode: '12345' }),
        addressUnitTestfactory.build({ id: '2', name: 'Teststreet2', postalCode: '67890' }),
      ];

      mockFacade = {
        getMunicipalities: jest.fn().mockReturnValue(of(mockMunicipalities)),
        getStreets: jest.fn().mockImplementation((value: string, municipalityValue) => {
          return of(
            mockStreets.filter(
              (street) =>
                street.name.toLowerCase().includes(value.toLowerCase()) && street.postalCode === municipalityValue
            )
          );
        }),
      };

      TestBed.configureTestingModule({
        providers: [{ provide: AddressFormFieldFacade, useValue: mockFacade }],
      });
    });

    xit('should filter municipalities based on the filter value', (done) => {
      const filterValue = '12345 - Testville';
      const facade = TestBed.inject(AddressFormFieldFacade);

      AddressUtil.getFilteredMunicipalities(filterValue, facade).subscribe((result) => {
        expect(result).toEqual([{ postalCode: '12345', location: 'Testville' }]);
        done();
      });
    });
  });
});

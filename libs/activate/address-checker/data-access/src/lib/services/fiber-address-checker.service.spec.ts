import { FiberAddressCheckerService } from './fiber-address-checker.service';
import { CitySuggestionsMapper } from '../mappers/city-suggestions.mapper';
import { StreetSuggestionsMapper } from '../mappers/street-suggestions.mapper';
import { NumberSuggestionsMapper } from '../mappers/number-suggestions.mapper';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FiberStatusMapper } from '../mappers/fiber-status.mapper';
import { OmapiQueryCallConfig, OmapiQueryService } from '@telenet/ng-lib-omapi-query';
import { expect } from '@jest/globals';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';
import { AddressGeoIdMapper } from '../mappers/address-geo-id.mapper';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

const mockCitySuggestionsResponse = require('../../data/city-suggestions.json');
const mockNumberSuggestionsResponse = require('../../data/number-suggestions.json');
const mockStreetSuggestionsResponse = require('../../data/street-suggestions.json');
const mockFiberStatusResponse = require('../../data/fiber-eligibility.json');

describe('FiberAddressCheckerService', () => {
  let fiberAddressCheckerService: FiberAddressCheckerService;
  let omapiQueryService: OmapiQueryService;
  let citySuggestionsMapper: CitySuggestionsMapper;
  let streetSuggestionsMapper: StreetSuggestionsMapper;
  let numberSuggestionsMapper: NumberSuggestionsMapper;
  let fiberStatusMapper: FiberStatusMapper;
  let addressGeoIdMapper: AddressGeoIdMapper;
  const addressId = '123';
  const messageGroup = 'messageGroup';

  const fiberNotFoundErrorResponse: HttpErrorResponse = new HttpErrorResponse({
    status: 404,
    error: { errorCode: 'Address not found' },
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FiberAddressCheckerService,
        CitySuggestionsMapper,
        StreetSuggestionsMapper,
        NumberSuggestionsMapper,
        FiberStatusMapper,
        AddressGeoIdMapper,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [HttpClientTestingModule],
    });
    fiberAddressCheckerService = TestBed.inject(FiberAddressCheckerService);
    omapiQueryService = TestBed.inject(OmapiQueryService);
    citySuggestionsMapper = TestBed.inject(CitySuggestionsMapper);
    streetSuggestionsMapper = TestBed.inject(StreetSuggestionsMapper);
    numberSuggestionsMapper = TestBed.inject(NumberSuggestionsMapper);
    fiberStatusMapper = TestBed.inject(FiberStatusMapper);
    addressGeoIdMapper = TestBed.inject(AddressGeoIdMapper);
  });

  describe('getSuggestionsForZipcodeOrCity', () => {
    beforeEach(() => {
      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockCitySuggestionsResponse);
    });
    it('get suggestions for city and zipcode', () => {
      const endpoint = `/address/v1/suggest/city?searchTerm=2812`;
      fiberAddressCheckerService.getSuggestionsForZipcodeOrCity('2812', messageGroup);

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        new OmapiQueryCallConfig(messageGroup, endpoint, citySuggestionsMapper)
      );
    });
  });

  describe('getSuggestionsForStreet', () => {
    beforeEach(() => {
      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockStreetSuggestionsResponse);
    });
    it('get suggestions for street', () => {
      const endpoint = `/address/v1/suggest/street?municipalityGeoId=47bda15e-839f-6b81-e054-00144f80cbe2&searchTerm=koekoek`;
      fiberAddressCheckerService.getSuggestionsForStreet(
        messageGroup,
        'koekoek',
        '47bda15e-839f-6b81-e054-00144f80cbe2'
      );

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        new OmapiQueryCallConfig(messageGroup, endpoint, streetSuggestionsMapper)
      );
    });
  });

  describe('getSuggestionsForNumber', () => {
    beforeEach(() => {
      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockNumberSuggestionsResponse);
    });
    it('get suggestions for number', () => {
      const endpoint =
        '/address/v1/suggest/number?municipalityGeoId=47bda15e-839f-6b81-e054-00144f80cbe2&streetName=Koekoekstraat&searchTerm=12';
      fiberAddressCheckerService.getSuggestionsForNumber(
        messageGroup,
        '12',
        'Koekoekstraat',
        '47bda15e-839f-6b81-e054-00144f80cbe2'
      );

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        new OmapiQueryCallConfig(messageGroup, endpoint, numberSuggestionsMapper)
      );
    });
  });

  describe('getFiberStatusForAddress', () => {
    it('get fiber status for addresses', () => {
      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockFiberStatusResponse);

      fiberAddressCheckerService.getFiberStatusForAddress(messageGroup, addressId);

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/address/v1/fiber/eligible?geoId=${addressId}`,
          mapper: fiberStatusMapper,
          errorHandler: expect.any(Function),
        })
      );
    });

    it('return error code when error is thrown', () => {
      jest.spyOn(omapiQueryService, 'doGet').mockImplementation(() => throwError(() => fiberNotFoundErrorResponse));

      fiberAddressCheckerService.getFiberStatusForAddress(messageGroup, addressId).subscribe({
        next: () => {
          fail('Expected an error, but got a next value');
        },
        error: (error) => {
          expect(error.error.errorCode).toBe('Address not found');
        },
      });
    });
  });

  describe('getAddressGeoId', () => {
    const customerAddress: CustomerAddressInterface = {
      id: '123',
      houseNumber: '2',
      postalCode: '1000',
      municipality: 'Brussels',
      street: 'Street number 2',
    };
    it('get geo id of a customer address', () => {
      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockFiberStatusResponse);

      fiberAddressCheckerService.getAddressGeoId(messageGroup, customerAddress);

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/address/v1/geoId?zipCode=${customerAddress.postalCode}&streetName=${customerAddress.street}&houseNumber=${customerAddress.houseNumber}`,
          mapper: addressGeoIdMapper,
        })
      );
    });

    it('get geo id of a customer address has sub house number', () => {
      const customerAddress: CustomerAddressInterface = {
        id: '123',
        houseNumber: '2',
        postalCode: '1000',
        municipality: 'Brussels',
        street: 'Street number 2',
        subHouseNumber: 'A',
      };

      jest.spyOn(omapiQueryService, 'doGet').mockReturnValue(mockFiberStatusResponse);

      fiberAddressCheckerService.getAddressGeoId(messageGroup, customerAddress);

      expect(omapiQueryService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `/address/v1/geoId?zipCode=${customerAddress.postalCode}&streetName=${customerAddress.street}&houseNumber=${customerAddress.houseNumber}${customerAddress.subHouseNumber}`,
          mapper: addressGeoIdMapper,
        })
      );
    });
  });
});

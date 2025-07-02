import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Address } from '../../../shared/common/models/address.model';
import { AddressMapper } from './address.mapper';
import { expect } from '@jest/globals';

const mockSuccessResponse = require('../../../../../../../../fixtures/http/fleet/addresses/address.json');
const mockEnhancedSuccessResponse = require('../../../../../../../../fixtures/http/fleet/addresses/enhanced-address.json');

describe('AddressMapper', () => {
  let addressMapper: AddressMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    addressMapper = TestBed.inject(AddressMapper);
  });

  describe('toModel', () => {
    let address: Address[];

    it('should MAP the address data', () => {
      // @ts-ignore
      address = addressMapper.toModel(mockSuccessResponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe('Geographical Address');
      expect(address[0].country).toBe('België');
      expect(address[0].countryCode).toBe('BE');
      expect(address[0].municipality).toBe('Mechelen');
      expect(address[0].postalCode).toBe('2800');
      expect(address[0].street).toBe('Elektriciteitstraat');
      expect(address[0].streetId).toBe('9153462896013523500');
      expect(address[0].houseNumber).toBe('6');
      expect(address[0].boxNumber).toBe('5');
      expect(address[0].floorNumber).toBe('2');
      expect(address[0].tinaLocationId).toBe('2');

      expect(address[1].country).toBe('België');
      expect(address[1].countryCode).toBe('BE');
      expect(address[1].municipality).toBe('Mechelen');
      expect(address[1].postalCode).toBe('2800');
      expect(address[1].street).toBe('Abeelstraat');
      expect(address[1].streetId).toBe('9153462896013523501');
      expect(address[1].houseNumber).toBe('5');
      expect(address[1].addressId).toBe('9152527990413378524');
      expect(address[1].boxNumber).toBe('115/t');
      expect(address[1].floorNumber).toBe('7');
      expect(address[1].type).toBe('Geographical Address');
      expect(address[1].tinaLocationId).toBe('2');
    });

    it('should MAP the address data for enhanced response', () => {
      // @ts-ignore
      address = addressMapper.toModel(mockEnhancedSuccessResponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe('Geographical Address');
      expect(address[0].country).toBe('België');
      expect(address[0].countryCode).toBe('BE');
      expect(address[0].municipality).toBe('Mechelen');
      expect(address[0].postalCode).toBe('2800');
      expect(address[0].street).toBe('Elektriciteitstraat');
      expect(address[0].streetId).toBe('9153462896013523500');
      expect(address[0].houseNumber).toBe('6');
      expect(address[0].boxNumber).toBe('5');
      expect(address[0].floorNumber).toBe('2');
      expect(address[0].tinaLocationId).toBe('2');

      expect(address[1].country).toBe('België');
      expect(address[1].countryCode).toBe('BE');
      expect(address[1].municipality).toBe('Mechelen');
      expect(address[1].postalCode).toBe('2800');
      expect(address[1].street).toBe('Elektriciteitstraat');
      expect(address[1].streetId).toBe('9153462896013523500');
      expect(address[1].houseNumber).toBe('6');
      expect(address[1].addressId).toBe('9152527990413378524');
      expect(address[1].boxNumber).toBe('115/t');
      expect(address[1].floorNumber).toBe('7');
      expect(address[1].type).toBe('Geographical Address');
      expect(address[1].tinaLocationId).toBe('2');
    });

    it('should MAP the address data for response with empty address array', () => {
      const mockresponse = {
        type: 'Geographical Address',
        country: 'België',
        countryCode: 'BE',
        municipality: 'Mechelen',
        postalCode: '2800',
        street: 'Elektriciteitstraat',
        streetId: '9153462896013523500',
        houseNumber: '6',
        address: [],
      };

      address = addressMapper.toModel(mockresponse);
      expect(address[0].addressId).toBeUndefined();
      expect(address[0].type).toBe('Geographical Address');
      expect(address[0].country).toBe('België');
      expect(address[0].countryCode).toBe('BE');
      expect(address[0].municipality).toBe('Mechelen');
      expect(address[0].postalCode).toBe('2800');
      expect(address[0].street).toBe('Elektriciteitstraat');
      expect(address[0].streetId).toBe('9153462896013523500');
      expect(address[0].houseNumber).toBe('6');
      expect(address[0].boxNumber).toBeUndefined();
      expect(address[0].floorNumber).toBeUndefined();
      expect(address[0].tinaLocationId).toBeUndefined();
    });

    it('should MAP the address data for response without address array', () => {
      const mockresponse = {
        type: 'Geographical Address',
        country: 'België',
        countryCode: 'BE',
        municipality: 'Mechelen',
        postalCode: '2800',
        street: 'Elektriciteitstraat',
        streetId: '9153462896013523500',
        houseNumber: '6',
        id: '9153462896013523517',
        boxNumber: '5',
        floorNumber: '2',
        tinaLocationId: '2',
      };

      address = addressMapper.toModel(mockresponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe('Geographical Address');
      expect(address[0].country).toBe('België');
      expect(address[0].countryCode).toBe('BE');
      expect(address[0].municipality).toBe('Mechelen');
      expect(address[0].postalCode).toBe('2800');
      expect(address[0].street).toBe('Elektriciteitstraat');
      expect(address[0].streetId).toBe('9153462896013523500');
      expect(address[0].houseNumber).toBe('6');
      expect(address[0].boxNumber).toBe('5');
      expect(address[0].floorNumber).toBe('2');
      expect(address[0].tinaLocationId).toBe('2');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

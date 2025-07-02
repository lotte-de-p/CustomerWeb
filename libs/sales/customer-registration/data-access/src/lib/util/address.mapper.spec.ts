import { TestBed } from '@angular/core/testing';
import { AddressMapper } from './address.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Address } from '../entities/models/address.model';
import { addressConfigurationTestFactory } from '../entities/interfaces/address-request.interface.testfactory';

const mockSuccessResponse = [
  addressConfigurationTestFactory.build({
    id: '9153462896013523517',
    street: 'Elektriciteitstraat',
    streetId: '9153462896013523500',
    houseNumber: '6',
    boxNumber: '5',
    floorNumber: '2',
    tinaLocationId: '2',
  }),
  addressConfigurationTestFactory.build({
    id: '9152527990413378524',
    street: 'Abeelstraat',
    streetId: '9153462896013523501',
    houseNumber: '5',
    boxNumber: '115/t',
    subHouseNumber: '6A',
    floorNumber: '7',
    tinaLocationId: '2',
  }),
];

describe('AddressMapper', () => {
  let service: AddressMapper;
  const addressType = 'Geographical Address';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AddressMapper);
  });

  describe('toModel', () => {
    let address: Address[];

    it('should MAP the address data', () => {
      address = service.toModel(mockSuccessResponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe(addressType);
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
      expect(address[1].type).toBe(addressType);
      expect(address[1].tinaLocationId).toBe('2');
    });

    it('should MAP the address data for enhanced response', () => {
      const mockEnhancedSuccessResponse = addressConfigurationTestFactory.build({
        street: 'Elektriciteitstraat',
        streetId: '9153462896013523500',
        houseNumber: '6',
        boxNumber: '5',
        address: [
          {
            id: '9153462896013523517',
            boxNumber: '5',
            floorNumber: '2',
            tinaLocationId: '2',
          },
          {
            id: '9152527990413378524',
            boxNumber: '115/t',
            floorNumber: '7',
            tinaLocationId: '2',
          },
        ],
      });
      address = service.toModel(mockEnhancedSuccessResponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe(addressType);
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
      expect(address[1].type).toBe(addressType);
      expect(address[1].tinaLocationId).toBe('2');
    });

    it('should MAP the address data for response with empty address array', () => {
      const mockresponse = addressConfigurationTestFactory.build({
        id: '',
        street: 'Elektriciteitstraat',
        streetId: '9153462896013523500',
        housenr: '6',
        boxNumber: '',
      });

      address = service.toModel(mockresponse);
      expect(address[0].addressId).toBe('');
      expect(address[0].type).toBe(addressType);
      expect(address[0].country).toBe('België');
      expect(address[0].countryCode).toBe('BE');
      expect(address[0].municipality).toBe('Mechelen');
      expect(address[0].postalCode).toBe('2800');
      expect(address[0].street).toBe('Elektriciteitstraat');
      expect(address[0].streetId).toBe('9153462896013523500');
      expect(address[0].houseNumber).toBe('6');
      expect(address[0].boxNumber).toBe('');
      expect(address[0].floorNumber).toBeUndefined();
      expect(address[0].tinaLocationId).toBeUndefined();
    });

    it('should MAP the address data for response without address array', () => {
      const mockresponse = addressConfigurationTestFactory.build({
        street: 'Elektriciteitstraat',
        streetId: '9153462896013523500',
        houseNumber: '6',
        postalCode: undefined,
        addresstype: addressType,
        postalcode: '2800',
        id: '9153462896013523517',
        boxNumber: '5',
        floorNumber: '2',
        tinaLocationId: '2',
      });

      address = service.toModel(mockresponse);
      expect(address[0].addressId).toBe('9153462896013523517');
      expect(address[0].type).toBe(addressType);
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
});

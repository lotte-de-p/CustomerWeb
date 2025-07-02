import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Address } from './address.model';
import { AddressMapper } from '../mappers/address.mapper';
import { CafeContactDetailsAddressFactory } from '../../../cafe/contact-details/models/cafe-contact-details.testfactory';

const mockSuccessResponse = require('../../../../../../../../../fixtures/http/common/address/address.json');

describe('AddressModel', () => {
  let addressMapper: AddressMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    addressMapper = TestBed.inject(AddressMapper);
  });

  describe('toModel', () => {
    let addresses: Address[];
    let address: Address;
    beforeEach(() => {
      addresses = addressMapper.toModel(mockSuccessResponse);
      address = addresses[0];
    });

    it('should MAP the address data', () => {
      expect(addresses[0].addressId).toBe('9153462896013523517');
      expect(addresses[0].type).toBe('Geographical Address');
      expect(addresses[0].country).toBe('België');
      expect(addresses[0].countryCode).toBe('BE');
      expect(addresses[0].municipality).toBe('Mechelen');
      expect(addresses[0].postalCode).toBe('2800');
      expect(addresses[0].street).toBe('Elektriciteitstraat');
      expect(addresses[0].streetId).toBe('9153462896013523500');
      expect(addresses[0].houseNumber).toBe('6');
      expect(addresses[0].boxNumber).toBe('5');
      expect(addresses[0].floorNumber).toBe('2');

      expect(addresses[1].country).toBe('België');
      expect(addresses[1].countryCode).toBe('BE');
      expect(addresses[1].municipality).toBe('Mechelen');
      expect(addresses[1].postalCode).toBe('2800');
      expect(addresses[1].street).toBe('Abeelstraat');
      expect(addresses[1].streetId).toBe('9153462896013523501');
      expect(addresses[1].houseNumber).toBe('5');
      expect(addresses[1].addressId).toBe('9152527990413378524');
      expect(addresses[1].boxNumber).toBe('115/t');
      expect(addresses[1].floorNumber).toBe('7');
      expect(addresses[1].type).toBe('Geographical Address');
    });

    describe('isAppartment', () => {
      it('should return true if there is a floornumber', () => {
        expect(address.isAppartment()).toBe(true);
      });

      it('should return false if there is no floornumber', () => {
        address.floorNumber = '';
        expect(address.isAppartment()).toBe(false);
      });
    });

    describe('getLocation', () => {
      it('should return location', () => {
        const location = address.getLocation();
        expect(location.postalCode).toBe('2800');
        expect(location.location).toBe('Mechelen');
      });
    });

    describe('getDisplayAddress', () => {
      it('should return display address', () => {
        const displayAddress1 = address.getDisplayAddress();
        expect(displayAddress1.country).toBe('België');
        expect(displayAddress1.houseNrSubHouseNr).toBe('6');
        expect(displayAddress1.zipMunicipality).toBe('2800 Mechelen');
        expect(displayAddress1.address).toBe('Elektriciteitstraat 6/5');
        expect(displayAddress1.addressId).toBe('9153462896013523517');

        const displayAddress2 = addresses[1].getDisplayAddress();
        expect(displayAddress2.country).toBe('België');
        expect(displayAddress2.houseNrSubHouseNr).toBe('5/5');
        expect(displayAddress2.zipMunicipality).toBe('2800 Mechelen');
        expect(displayAddress2.address).toBe('Abeelstraat 5/5/115/t');

        const displayAddress3 = addresses[3].getDisplayAddress();
        expect(displayAddress3.zipMunicipality).toBe('');
        expect(displayAddress3.houseNrSubHouseNr).toBe('6');
        expect(displayAddress3.country).toBe('België');
      });
      it('should return full display address', () => {
        const displayAddress1 = address.getDisplayAddress(true);
        expect(displayAddress1.address).toBe('Elektriciteitstraat 6/5, \n2800 Mechelen');
      });
      it('should return full display address on single line', () => {
        const displayAddress1 = address.getDisplayAddress(true, true);
        expect(displayAddress1.address).toBe('Elektriciteitstraat 6/5, 2800 Mechelen');
      });
    });

    describe('connectFiveAddressFormat', () => {
      it('should return the address in the proper connect five address format', () => {
        const actual = address.connectFiveAddressFormat();

        expect(actual).toEqual({
          city: address.municipality,
          zip: address.postalCode,
          street: address.street,
          nr: address.houseNumber,
          box: '5',
          floor: '',
        });
      });
    });
  });

  describe('doesContainAllDataNeededForConnectFiveCheckout', () => {
    it('should return true if the address contains all the data needed for the c5 checkout order', () => {
      const addressWithAllNeededData = CafeContactDetailsAddressFactory.build();

      const actual = addressWithAllNeededData.doesContainAllDataNeededForConnectFiveCheckout();

      expect(actual).toBe(true);
    });
    it('should return false if the address does not contain all the data needed for the c5 checkout order', () => {
      const addressWithAllNeededData = CafeContactDetailsAddressFactory.build();
      addressWithAllNeededData.postalCode = '';

      const actual = addressWithAllNeededData.doesContainAllDataNeededForConnectFiveCheckout();

      expect(actual).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

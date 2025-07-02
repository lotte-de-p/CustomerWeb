import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { CacheService, LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AddressConstants } from './address.constant';
import { Address } from '../entities/models/address.model';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';

let ocapiService: OcapiService,
  addressService: AddressService,
  languageService: LanguageService,
  address: Address[],
  cacheService: CacheService,
  messageService: MessageService,
  backend: HttpTestingController;

const data: AddressRequestInterface = {
  postalCode: '2800',
  municipality: 'Mechelen',
  street: 'Caputsteenstraat',
  houseNumber: '70',
  type: '',
};
const mockErrorResponse = { status: 400, statusText: 'Internal Server Error' };
const streetsEndPoint = '/telenet/data/municipalities?language=nl';
describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressService,
        OcapiService,
        LanguageService,
        CookieService,
        { provide: 'Window', useValue: {} },
        CacheService,
      ],
      imports: [HttpClientTestingModule],
    });
    cacheService = TestBed.inject(CacheService);
    messageService = TestBed.inject(MessageService);
    addressService = TestBed.inject(AddressService);
    ocapiService = TestBed.inject(OcapiService);
    languageService = TestBed.inject(LanguageService);
    backend = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getAddressByData', () => {
    it('should add correct message when API fails with error OCAPI-ERR-ODCT101', () => {
      const error = { code: 'OCAPI-ERR-ODCT101' };
      jest.spyOn(messageService, 'addMessage');
      addressService.getAddressByData(AddressConstants.ADDRESS_MESSSAGE_GROUP, data).subscribe((response) => {
        expect(response).toBeDefined();
      });
      const callUserDetails = backend.expectOne(`/oauth/userdetails`);
      callUserDetails.flush({ data: '' });
      const ocapiCall = backend.expectOne(
        `/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70`
      );
      ocapiCall.flush(error, mockErrorResponse);
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(AddressConstants.ADDRESS_MESSSAGE_GROUP, 'address-message.OCAPI-ERR-ODCT101')
      );
    });

    it('should add correct message when API fails with status 400', () => {
      const error = { code: '400' };
      jest.spyOn(messageService, 'addMessage');
      addressService.getAddressByData(AddressConstants.ADDRESS_MESSSAGE_GROUP, data).subscribe((response) => {
        expect(response).toBeDefined();
      });
      const callUserDetails = backend.expectOne(`/oauth/userdetails`);
      callUserDetails.flush({ data: '' });
      const ocapiCall = backend.expectOne(
        `/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70`
      );
      ocapiCall.flush(error, mockErrorResponse);
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(AddressConstants.ADDRESS_MESSSAGE_GROUP, 'ocapi.400')
      );
    });

    it('should add correct message when API fails with status 500', () => {
      const error = { code: '500' };
      const mockErrorResponse = { status: 500, statusText: 'Internal Server Error' };
      jest.spyOn(messageService, 'addMessage');
      addressService.getAddressByData(AddressConstants.ADDRESS_MESSSAGE_GROUP, data).subscribe((response) => {
        expect(response).toBeDefined();
      });
      const callUserDetails = backend.expectOne(`/oauth/userdetails`);
      callUserDetails.flush({ data: '' });
      const ocapiCall = backend.expectOne(
        `/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70`
      );
      ocapiCall.flush(error, mockErrorResponse);
      expect(messageService.addMessage).toHaveBeenCalledWith(
        new ErrorMessage(AddressConstants.ADDRESS_MESSSAGE_GROUP, 'ocapi.500')
      );
    });

    it('should return the address data', () => {
      const address$ = of(address);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', data).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenNthCalledWith(
          3,
          '/public/api/contact-service/v1/contact/addresses/9153462896013523517'
        );
      });
    });

    it('should return the address data with fields filter in data', () => {
      const address$ = of(address);
      const addressData = Object.assign({}, data);
      addressData.customHeaders = {
        range: '300',
      };
      addressData.fields = 'id,houseNumber,subHouseNumber,boxNumber,streetId';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', addressData).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenCalledWith({
          messageGroupName: 'address',
          customHeaders: { range: '300' },
          endpoint:
            '/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70&fields=id,houseNumber,subHouseNumber,boxNumber,streetId',
        });
      });
    });

    it('should return the address data with exactAddressSearch in data', () => {
      const address$ = of(address);
      const addressData = Object.assign({}, data);
      addressData.exactAddressSearch = true;
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', addressData).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenCalledWith({
          messageGroupName: 'address',
          endpoint:
            '/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70&exactAddressSearch=true',
        });
      });
    });

    it('should return the address data with both box and sub house no in data', () => {
      const address$ = of(address);
      const addressData = Object.assign({}, data);
      addressData.boxNumber = '1';
      addressData.subHouseNumber = '1';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', addressData).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenCalledWith({
          messageGroupName: 'address',
          endpoint:
            '/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70&subHouseNumber=1&boxNumber=1',
        });
      });
    });

    it('should return the address data with sub house no but no box no in data', () => {
      const address$ = of(address);
      const addressData = Object.assign({}, data);
      addressData.subHouseNumber = '1';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', addressData).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenCalledWith({
          messageGroupName: 'address',
          endpoint:
            '/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70&subHouseNumber=1',
        });
      });
    });

    it('should return the address data with box no but no subhouse no in data', () => {
      const address$ = of(address);
      const addressData = Object.assign({}, data);
      addressData.boxNumber = '1';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressByData('address', addressData).subscribe((response) => {
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(addressService.selectedAddress).toBe(response);
        expect(ocapiService.doGet).toHaveBeenCalledWith({
          messageGroupName: 'address',
          endpoint:
            '/public/api/contact-service/v1/contact/addresses?postalCode=2800&municipality=Mechelen&street=Caputsteenstraat&houseNumber=70&boxNumber=1',
        });
      });
    });
  });

  describe('getAddressById', () => {
    it('should return the address data based on the id', () => {
      const id = '9153462896013523517';
      const address$ = of(address);
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
      addressService.getAddressById('address', id).subscribe((response) => {
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
      });
      expect(ocapiService.doGet).toHaveBeenCalled();
    });

    it('should return the address data from cache based on id', () => {
      const id = '9153462896013523517';
      cacheService = TestBed.inject(CacheService);
      jest.spyOn(ocapiService, 'doGet');
      cacheService.add(`/public/api/contact-service/v1/contact/addresses/${id}`, of(address));
      addressService.getAddressById('address', id).subscribe((response) => {
        expect(response[0].addressId).toBe('9153462896013523517');
        expect(response[0].postalCode).toBe(address[0].postalCode);
        expect(response[0].municipality).toBe(address[0].municipality);
        expect(response[0].street).toBe(address[0].street);
        expect(response[0].houseNumber).toBe(address[0].houseNumber);
      });
      expect(ocapiService.doGet).not.toHaveBeenCalledWith({
        messageGroupName: 'address',
        endpoint: `/public/api/contact-service/v1/contact/addresses/${id}`,
      });
    });
  });
  describe('getStreets', () => {
    it('should get streets', () => {
      const fakeResponse = ['street1', 'street2'];
      const url = `/telenet/data/streets?postalCode=1234`;
      addressService.getStreets('1234').subscribe((response) => {
        expect(response[0]).toBe('street1');
        expect(response[1]).toBe('street2');
      });
      const api = backend.expectOne(url);
      expect(api.request.url).toBe(url);
      api.flush(fakeResponse);
    });
  });
  describe('getLocations', () => {
    it('should get locations', () => {
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
      const fakeResponse = [{ postalCode: '7340', location: 'Colfontaine' }];
      addressService.getMunicipalities().subscribe((response) => {
        expect(response[0]['postalCode']).toBe('7340');
        expect(response[0]['location']).toBe('Colfontaine');
      });
      const api = backend.expectOne(streetsEndPoint);
      expect(api.request.url).toBe(streetsEndPoint);
      api.flush(fakeResponse);
    });

    describe('getAddressById', () => {
      it('should return the address data based on id', () => {
        const id = '9153462896013523517';
        const address$ = of(address);
        jest.spyOn(ocapiService, 'doGet').mockReturnValue(address$);
        addressService.getAddressById('address', id).subscribe((response) => {
          expect(response[0].addressId).toBe('9153462896013523517');
          expect(response[0].postalCode).toBe(address[0].postalCode);
          expect(response[0].municipality).toBe(address[0].municipality);
          expect(response[0].street).toBe(address[0].street);
          expect(response[0].houseNumber).toBe(address[0].houseNumber);
        });
        expect(ocapiService.doGet).toHaveBeenCalled();
      });

      it('should return the address data from cache based on id', () => {
        const id = '9153462896013523517';
        cacheService = TestBed.inject(CacheService);
        jest.spyOn(ocapiService, 'doGet');
        cacheService.add(`/public/api/contact-service/v1/contact/addresses/${id}`, of(address));
        addressService.getAddressById('address', id).subscribe((response) => {
          expect(response[0].addressId).toBe('9153462896013523517');
          expect(response[0].postalCode).toBe(address[0].postalCode);
          expect(response[0].municipality).toBe(address[0].municipality);
          expect(response[0].street).toBe(address[0].street);
          expect(response[0].houseNumber).toBe(address[0].houseNumber);
        });
        expect(ocapiService.doGet).not.toHaveBeenCalledWith({
          messageGroupName: 'address',
          endpoint: `/public/api/contact-service/v1/contact/addresses/${id}`,
        });
      });
    });

    describe('getLocations', () => {
      it('should get locations', () => {
        jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
        const fakeResponse = [{ postalCode: '7340', location: 'Colfontaine' }];
        addressService.getMunicipalities().subscribe((response) => {
          expect(response[0]['postalCode']).toBe('7340');
          expect(response[0]['location']).toBe('Colfontaine');
        });
        const api = backend.expectOne(streetsEndPoint);
        expect(api.request.url).toBe(streetsEndPoint);
        api.flush(fakeResponse);
      });

      it('should get NL locations for EN language', () => {
        jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.EN);
        const fakeResponse = [{ postalCode: '7340', location: 'Colfontaine' }];
        addressService.getMunicipalities().subscribe((response) => {
          expect(response[0]['postalCode']).toBe('7340');
          expect(response[0]['location']).toBe('Colfontaine');
        });
        const api = backend.expectOne(streetsEndPoint);
        expect(api.request.url).toBe(streetsEndPoint);
        api.flush(fakeResponse);
      });
    });

    describe('getStreets', () => {
      it('should get streets', () => {
        const fakeResponse = ['street1', 'street2'];
        const url = `/telenet/data/streets?postalCode=1234`;
        addressService.getStreets('1234').subscribe((response) => {
          expect(response[0]).toBe('street1');
          expect(response[1]).toBe('street2');
        });
        const api = backend.expectOne(url);
        expect(api.request.url).toBe(url);
        api.flush(fakeResponse);
      });
    });
  });
});

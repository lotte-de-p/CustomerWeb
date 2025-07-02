import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddressReverseProxyService } from './address-reverse-proxy.service';
import { ConfigService } from '@telenet/ng-lib-config';
import { UrlService, LanguageService } from '@telenet/ng-lib-page';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { addressUnitTestfactory } from './../interfaces/address-unit.testfactory';

describe('AddressReverseProxyService', () => {
  let service: AddressReverseProxyService;
  let httpMock: HttpTestingController;
  let configServiceMock: Partial<ConfigService>;
  let urlServiceMock: Partial<UrlService>;
  let languageServiceMock: Partial<LanguageService>;

  const addressManagementApi = '/v1/addressManagement/address';

  beforeEach(() => {
    configServiceMock = {
      getConfig: jest.fn().mockReturnValue('https://mockapi.com'),
    };

    urlServiceMock = {
      getCurrentUrl: jest.fn().mockReturnValue('https://current-url.com'),
    };

    languageServiceMock = {
      getLanguage: jest.fn().mockReturnValue('nl'),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddressReverseProxyService,
        { provide: ConfigService, useValue: configServiceMock },
        { provide: UrlService, useValue: urlServiceMock },
        { provide: LanguageService, useValue: languageServiceMock },
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AddressReverseProxyService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fail if ocapi configuration not set', () => {
    jest.spyOn(configServiceMock, 'getConfig').mockReturnValue('');
    expect(() => {
      service = new AddressReverseProxyService(
        TestBed.inject(HttpClient),
        TestBed.inject(UrlService),
        TestBed.inject(ConfigService),
        TestBed.inject(LanguageService)
      );
    }).toThrow(new Error('Ocapi not configured'));
  });

  describe('getMunicipalities', () => {
    it('should fetch municipalities successfully', () => {
      const mockMunicipalities = [{ id: 1, name: 'Test' }];

      service.getMunicipalities().subscribe((municipalities) => {
        expect(municipalities).toEqual(mockMunicipalities);
      });

      const req = httpMock.expectOne('/telenet/data/municipalities?language=nl');
      expect(req.request.method).toBe('GET');
      req.flush(mockMunicipalities);
    });

    it('should handle error when fetching municipalities', () => {
      service.getMunicipalities().subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error) => {
          expect(error.status).toEqual(404);
          expect(error.statusText).toEqual('Not Found');
        },
      });

      const req = httpMock.expectOne(`/telenet/data/municipalities?language=nl`);
      req.flush('404 error', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('getStreets', () => {
    it('should fetch streets successfully', () => {
      const mockStreets = [{ id: 1, name: 'Test' }];

      service.getStreets('2800').subscribe((streets) => {
        expect(streets).toEqual(mockStreets);
      });

      const req = httpMock.expectOne(`/telenet/data/streets?postalCode=2800`);
      expect(req.request.method).toBe('GET');
      req.flush(mockStreets);
    });

    it('should handle error when fetching streets', () => {
      service.getStreets('2800').subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error) => {
          expect(error.status).toEqual(404);
          expect(error.statusText).toEqual('Not Found');
        },
      });

      const req = httpMock.expectOne(`/telenet/data/streets?postalCode=2800`);
      req.flush('404 error', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('getGeographicalAddresses', () => {
    it('should fetch geographical addresses successfully', () => {
      const mockAddresses = [{ id: 1, name: 'Test' }];

      service.getGeographicalAddresses('street', '1234').subscribe((addresses) => {
        expect(addresses).toEqual(mockAddresses);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}${service.basePath}${addressManagementApi}?addressUnitTypeId=9148294798613629978&name.s=street&parentAddressUnit.id=1234`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockAddresses);
    });

    it('should handle error when fetching geographical addresses', () => {
      service.getGeographicalAddresses('street', '1234').subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error) => {
          expect(error.status).toEqual(404);
          expect(error.statusText).toEqual('Not Found');
        },
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}${service.basePath}${addressManagementApi}?addressUnitTypeId=9148294798613629978&name.s=street&parentAddressUnit.id=1234`
      );
      req.flush('404 error', { status: 404, statusText: 'Not Found' });
    });
  });

  describe('getStreetAddressUnit', () => {
    it('returns the first address unit if municipalities are found', () => {
      const mockMunicipalities = addressUnitTestfactory.build({
        id: '1',
        name: 'Test',
        addressUnitTypeId: 'type1',
        externalId: 'ext1',
        href: 'href1',
        type: 'type1',
      });
      const mockAddressUnits = addressUnitTestfactory.build({
        id: '2',
        name: 'Street',
        addressUnitTypeId: 'type2',
        externalId: 'ext2',
        href: 'href2',
        type: 'type2',
      });
      jest.spyOn(service, 'getMunicipalityAddressUnit').mockReturnValue(of([mockMunicipalities]));
      jest.spyOn(service as any, 'doGet').mockReturnValue(of(mockAddressUnits));

      service.getStreetAddressUnit('Street', '1000').subscribe((addressUnit) => {
        expect(addressUnit).toEqual(mockAddressUnits[0]);
      });
    });

    it('returns null if no address units are found', () => {
      const mockMunicipalities = addressUnitTestfactory.build({
        id: '1',
        name: 'Test',
        addressUnitTypeId: 'type1',
        externalId: 'ext1',
        href: 'href1',
        type: 'type1',
      });
      jest.spyOn(service, 'getMunicipalityAddressUnit').mockReturnValue(of([mockMunicipalities]));
      jest.spyOn(service as any, 'doGet').mockReturnValue(of([]));

      service.getStreetAddressUnit('Street', '1000').subscribe((addressUnit) => {
        expect(addressUnit).toBeNull();
      });
    });

    it('returns null if no municipalities are found', () => {
      jest.spyOn(service, 'getMunicipalityAddressUnit').mockReturnValue(of([]));

      service.getStreetAddressUnit('Street', '1000').subscribe((addressUnit) => {
        expect(addressUnit).toBeNull();
      });
    });

    it('uses Leuven address unit id if postal code is 3000 and Leuven is found', () => {
      const mockMunicipalities = addressUnitTestfactory.build({
        id: '1',
        name: 'Test',
        addressUnitTypeId: 'type1',
        externalId: 'ext1',
        href: 'href1',
        type: 'type1',
      });
      const mockAddressUnits = [{ id: '3', name: 'Street' }];
      jest.spyOn(service, 'getMunicipalityAddressUnit').mockReturnValue(of([mockMunicipalities]));
      jest.spyOn(service as any, 'doGet').mockReturnValue(of(mockAddressUnits));

      service.getStreetAddressUnit('Street', '3000').subscribe((addressUnit) => {
        expect(addressUnit).toEqual(mockAddressUnits[0]);
      });
    });

    it('uses the first municipality id if postal code is 3000 and Leuven is not found', () => {
      const mockMunicipalities = addressUnitTestfactory.build({
        id: '1',
        name: 'Test',
        addressUnitTypeId: 'type1',
        externalId: 'ext1',
        href: 'href1',
        type: 'type1',
      });
      const mockAddressUnits = [{ id: '2', name: 'Street' }];
      jest.spyOn(service, 'getMunicipalityAddressUnit').mockReturnValue(of([mockMunicipalities]));
      jest.spyOn(service as any, 'doGet').mockReturnValue(of(mockAddressUnits));

      service.getStreetAddressUnit('Street', '3000').subscribe((addressUnit) => {
        expect(addressUnit).toEqual(mockAddressUnits[0]);
      });
    });
  });

  describe('getAddressByLocationId', () => {
    it('should fetch address by location id successfully', () => {
      const mockAddress = { id: 1, name: 'Test' };

      service.getAddressById('1234').subscribe((address) => {
        expect(address).toEqual(mockAddress);
      });

      const req = httpMock.expectOne(`${service.baseUrl}${service.basePath}${addressManagementApi}/1234`);
      expect(req.request.method).toBe('GET');
      req.flush(mockAddress);
    });

    it('should handle error when fetching address by location id', () => {
      service.getAddressById('1234').subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error) => {
          expect(error.status).toEqual(404);
          expect(error.statusText).toEqual('Not Found');
        },
      });

      const req = httpMock.expectOne(`${service.baseUrl}${service.basePath}${addressManagementApi}/1234`);
      req.flush('404 error', { status: 404, statusText: 'Not Found' });
    });
  });
});

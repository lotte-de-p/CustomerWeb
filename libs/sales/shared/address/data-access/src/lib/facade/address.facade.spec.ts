import { TestBed } from '@angular/core/testing';
import { AddressFacade } from './address.facade';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddressReverseProxyService } from '../services/address-reverse-proxy.service';
import { of, throwError } from 'rxjs';
import { Municipality } from '../interfaces/municipality.interface';

describe('AddressFacade', () => {
  let service: AddressFacade;
  let httpMock: HttpTestingController;
  let addressReverseProxyServiceMock: Partial<AddressReverseProxyService>;

  beforeEach(() => {
    addressReverseProxyServiceMock = {
      getMunicipalities: jest.fn(),
      getStreets: jest.fn(),
      getGeographicalAddresses: jest.fn(),
      getAddressById: jest.fn(),
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddressFacade, { provide: AddressReverseProxyService, useValue: addressReverseProxyServiceMock }],
    });

    service = TestBed.inject(AddressFacade);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getMunicipalities', () => {
    it('should fetch municipalities successfully', () => {
      const mockMunicipalities: Municipality[] = [];

      jest.spyOn(addressReverseProxyServiceMock, 'getMunicipalities').mockReturnValue(of(mockMunicipalities));

      service.getMunicipalities().subscribe((municipalities) => {
        expect(municipalities).toEqual(mockMunicipalities);
      });
    });

    it('should handle error when fetching municipalities', () => {
      jest.spyOn(addressReverseProxyServiceMock, 'getMunicipalities').mockReturnValue(throwError({ status: 404 }));

      service.getMunicipalities().subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error) => {
          expect(error.status).toEqual(404);
        },
      });
    });
  });
});

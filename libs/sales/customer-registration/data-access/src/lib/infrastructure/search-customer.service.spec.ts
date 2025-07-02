import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { SearchCustomerService } from './search-customer.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { jest } from '@jest/globals';
import { SearchCustomerMapper } from './search-customer.mapper';

describe('searchCustomerService', () => {
  let ocapiService: OcapiService;
  let searchCustomerService: SearchCustomerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCustomerService, OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    searchCustomerService = TestBed.inject(SearchCustomerService);
  });

  describe('searchResidentialCustomer', () => {
    it('should call ocapi service with ocapiCallConfig', () => {
      jest.spyOn(ocapiService, 'doPost').mockReturnValue(of('succes'));
      searchCustomerService
        .searchCustomer({
          customerCategory: 'residential',
          firstName: 'John',
          lastName: 'Smith',
          rrn: '60102854019',
          birthday: '04/02/1999',
        })
        .subscribe((response) => {
          expect(response).toBe('succes');
          expect(ocapiService.doPost).toHaveBeenCalled();
        });
    });
    it('should handle HTTP error correctly', (done) => {
      const url = `/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales`;
      jest.spyOn(ocapiService, 'doPost').mockReturnValueOnce(
        throwError(
          () =>
            new HttpErrorResponse({
              error: 'error',
              status: 500,
            })
        )
      );

      const residentialCustomer = {
        customerCategory: 'residential',
        firstName: 'John',
        lastName: 'Smith',
        rrn: '60102854019',
        birthday: '04/02/1999',
      };

      searchCustomerService.searchCustomer(residentialCustomer).subscribe({
        error: () => done(),
      });
      const expectedOcapiCallConfig = new OcapiCallConfig('', url, new SearchCustomerMapper(), residentialCustomer);
      expectedOcapiCallConfig.errorHandler = expect.any(Function);
      expect(ocapiService.doPost).toHaveBeenCalledWith(expectedOcapiCallConfig);
    });
  });
});

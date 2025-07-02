import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerProductHolding } from '../../../entities/product-finder/customerproductholding/customer-product-holding.interface';
import { CustomerProductHoldingMapper } from './customer-product-holding.mapper';
import { CustomerProductHoldingService } from './customer-product-holding.service';

describe('CustomerProductHoldingService', () => {
  let customerProductHoldingService: CustomerProductHoldingService;
  let customerProductHoldingMapper: CustomerProductHoldingMapper;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    customerProductHoldingService = TestBed.inject(CustomerProductHoldingService);
    customerProductHoldingMapper = TestBed.inject(CustomerProductHoldingMapper);
    ocapiService = TestBed.inject(OcapiService);
  });

  describe('getCustomerProductHolding', () => {
    it('should call ocapi', fakeAsync(() => {
      const expected: CustomerProductHolding[] = [
        {
          identifier: '1',
          specUrl: 'specUrl/1',
          products: [
            {
              identifier: '2',
              specUrl: 'specUrl/2',
              products: [],
              options: [],
            },
          ],
          options: [
            {
              specUrl: 'specUrl/3',
            },
          ],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ];

      const doGetPromotionsSpy = jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(expected));

      const result$: Observable<CustomerProductHolding[]> = customerProductHoldingService.getCustomerProductHolding();

      result$.subscribe((actual: CustomerProductHolding[]) => {
        expect(actual).toEqual(expected);
        expect(doGetPromotionsSpy).toHaveBeenCalledWith(
          new OcapiCallConfig(
            'product-finder',
            '/public/?p=customerproductholding',
            customerProductHoldingMapper,
            undefined,
            undefined,
            undefined,
            undefined,
            true
          )
        );
      });
      tick();
    }));
  });
});

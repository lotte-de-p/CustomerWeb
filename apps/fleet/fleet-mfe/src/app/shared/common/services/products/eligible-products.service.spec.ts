import { Observable, of } from 'rxjs';
import { EligibleProductInterface } from '../../interfaces/products/eligible-product.interface';
import { expect, jest } from '@jest/globals';
import { EligibleProductsMapper } from '../../mappers/products/eligible-products.mapper';

import { OcapiService } from '@telenet/ng-lib-ocapi';
import { EligibleProductsService } from './eligible-products.service';
import { TestBed } from '@angular/core/testing';
import { CustomerProductHoldingMapper } from '../../mappers/customer-product-holding/customer-product-holding.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EligibleProductsService', () => {
  let eligibleProductsService: EligibleProductsService, ocapiService: OcapiService;
  const defaultUrl = '/public/api/fleet-product-service/v1';
  const messageGroup = 'sales';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, CustomerProductHoldingMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    eligibleProductsService = TestBed.inject(EligibleProductsService);
  });

  describe('getEligibleProducts', () => {
    let eligibleProducts$: Observable<EligibleProductInterface[]>;
    beforeEach(function () {
      eligibleProducts$ = of(<EligibleProductInterface[]>[{ id: 'BOYO0020', label: '20 Based on you' }]);
    });

    it('should get eligible products by identifier', (done) => {
      const identifier = 'BOYO0020';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(eligibleProducts$);
      eligibleProductsService.getEligibleProductsByIdentifier(messageGroup, identifier).subscribe((response) => {
        expect(response[0].id).toBe('BOYO0020');
        expect(response[0].label).toBe('20 Based on you');
        done();
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/products/eligibleproducts?identifier=${identifier}`,
          mapper: expect.any(EligibleProductsMapper),
        })
      );
    });

    it('should get eligible products when identifier is not passed', (done) => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(eligibleProducts$);
      eligibleProductsService.getEligibleProducts(messageGroup).subscribe((response) => {
        expect(response[0].id).toBe('BOYO0020');
        expect(response[0].label).toBe('20 Based on you');
        done();
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/products/eligibleproducts`,
          mapper: expect.any(EligibleProductsMapper),
        })
      );
    });

    it('should get eligible products by identifier and producttype if present', (done) => {
      const identifier = 'BOYO0020';
      const producttype = 'INTERNET';
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(eligibleProducts$);
      eligibleProductsService
        .getEligibleProductsByIdentifier(messageGroup, identifier, producttype)
        .subscribe((response) => {
          expect(response[0].id).toBe('BOYO0020');
          expect(response[0].label).toBe('20 Based on you');
          done();
        });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/products/eligibleproducts?identifier=${identifier}&producttype=${producttype}`,
          mapper: expect.any(EligibleProductsMapper),
        })
      );
    });
  });
});

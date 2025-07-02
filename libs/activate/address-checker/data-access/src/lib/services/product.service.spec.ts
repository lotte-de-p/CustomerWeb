import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { ProductSubscriptionsMapper } from '../mappers/product-subscriptions.mapper';
import { expect } from '@jest/globals';

describe('ProductService', () => {
  let productService: ProductService;
  let ocapiService: OcapiService;
  let productSubscriptionsMapper: ProductSubscriptionsMapper;
  const messageGroup = 'messageGroup';
  const defaultUrl = '/public/api/product-service/v1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    productService = TestBed.inject(ProductService);
    ocapiService = TestBed.inject(OcapiService);
    productSubscriptionsMapper = TestBed.inject(ProductSubscriptionsMapper);
  });

  describe('getProductLinesByType', () => {
    it('should get product subscriptions by type, category & status', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));
      const type = 'plan';
      const status = 'ACTIVE';
      productService.getProductLinesByType(messageGroup, type, status);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/product-subscriptions?producttypes=${type}&status=${status}`,
          mapper: productSubscriptionsMapper,
        })
      );
    });
  });
});

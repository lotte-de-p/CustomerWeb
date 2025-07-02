import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OmapiProduct, OmapiProductService, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { ProductService } from './product.service';
import { jest } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let omapiProductService: OmapiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, OmapiProductService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    omapiProductService = TestBed.inject(OmapiProductService);
  });

  describe('getOmapiProducts', () => {
    it('should return an array of Observables of OmapiProducts when offerIds are present', (done) => {
      const offerIds: string[] = ['1', '2', '3'];
      const omapiProducts: OmapiProduct[] = [
        OmapiProductTestfactory.build({ productId: offerIds[0] }),
        OmapiProductTestfactory.build({ productId: offerIds[1] }),
        OmapiProductTestfactory.build({ productId: offerIds[2] }),
      ];

      jest
        .spyOn(omapiProductService, 'getProductById')
        .mockReturnValueOnce(of(omapiProducts[0]))
        .mockReturnValueOnce(of(omapiProducts[1]))
        .mockReturnValueOnce(of(omapiProducts[2]));

      const observables = service.getOmapiProducts(offerIds);
      expect(observables.length).toEqual(3);
      observables[0].subscribe((product) => {
        expect(product.productId).toEqual(omapiProducts[0].productId);
      });
      observables[1].subscribe((product) => {
        expect(product.productId).toEqual(omapiProducts[1].productId);
      });
      observables[2].subscribe((product) => {
        expect(product.productId).toEqual(omapiProducts[2].productId);
      });
      done();
    });

    it('should return an array with an empty Observable when no offerIds are present', (done) => {
      const offerIds: string[] = [];

      const observables = service.getOmapiProducts(offerIds);
      expect(observables.length).toEqual(1);
      done();
    });
  });
});

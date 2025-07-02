import { TestBed } from '@angular/core/testing';
import { from, of, throwError } from 'rxjs';
import { OmapiProduct, OmapiProductService, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { ExtractOmapiProductService } from './extract-omapi-product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { jest } from '@jest/globals';
import { Offer } from '../entities/interfaces/raw-sales-order-request.interface';
import { UrlRetrievalService } from './url-retrieval-service';
import { ProductService } from './product.service';

describe('ExtractOmapiProductService', () => {
  let service: ExtractOmapiProductService;
  let productService: ProductService;
  let urlRetrievalService: UrlRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExtractOmapiProductService,
        UrlRetrievalService,
        ProductService,
        OmapiProductService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ExtractOmapiProductService);
    urlRetrievalService = TestBed.inject(UrlRetrievalService);
    productService = TestBed.inject(ProductService);
  });

  describe('extractOmapiProduct', () => {
    it('should return an array of OmapiProducts when offers are present', (done) => {
      const offers: Offer[] = [
        { id: '1', type: 'someType', offers: [{ id: '2', type: 'someType' }] },
        { id: '3', type: 'someType' },
      ];
      const omapiProducts: OmapiProduct[] = [
        OmapiProductTestfactory.build({ productId: offers[0].id }),
        OmapiProductTestfactory.build({ productId: offers[1].id }),
      ];

      if (offers[0].offers) {
        omapiProducts.push(OmapiProductTestfactory.build({ productId: offers[0].offers[0].id }));
      }

      jest.spyOn(urlRetrievalService, 'getOffersFromUrl').mockReturnValue(of(offers));
      jest.spyOn(productService, 'getOmapiProducts').mockReturnValue([from(omapiProducts)]);

      service.extractOmapiProduct().subscribe((products) => {
        expect(products.length).toEqual(3);
        expect(products[0].productId).toEqual(omapiProducts[0].productId);
        expect(products[1].productId).toEqual(omapiProducts[1].productId);
        expect(products[2].productId).toEqual(omapiProducts[2].productId);
        done();
      });
    });

    it('should return empty array when no offers present', (done) => {
      const offers: Offer[] = [];
      jest.spyOn(urlRetrievalService, 'getOffersFromUrl').mockReturnValue(of(offers));

      service.extractOmapiProduct().subscribe((products) => {
        expect(products.length).toEqual(0);
        done();
      });
    });

    it('should throw an error if getOffersFromUrl fails', (done) => {
      jest
        .spyOn(urlRetrievalService, 'getOffersFromUrl')
        .mockReturnValue(throwError(() => new Error('Decompression error')));

      service.extractOmapiProduct().subscribe({
        next: () => done.fail('expected an error, not OmapiProduct[]'),
        error: (error) => {
          expect(error.message).toEqual('Decompression error');
          done();
        },
      });
    });
  });
});

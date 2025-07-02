import { TestBed } from '@angular/core/testing';
import { ProductRecommendationMapper } from './product-recommendation.mapper';
import { RawProductRecommendationResult } from './raw-product-recommendation-result.interface';
import { Offer, Product, ProductService } from '@sales/shared/data-access';
import { Observable, of } from 'rxjs';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductRecommendationMapper', () => {
  let productRecommendationMapper: ProductRecommendationMapper;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductRecommendationMapper,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    productRecommendationMapper = TestBed.inject(ProductRecommendationMapper);
    productService = TestBed.inject(ProductService);
  });

  describe('toModel', () => {
    it('should map raw product recommendation result to model', (done) => {
      const offers: Offer[] = [
        {
          id: '1',
          type: 'IDTV LINE',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const rawProductRecommendationResult: RawProductRecommendationResult = {
        productRecommendations: [
          {
            offers,
            salesOffer: {
              price: 1,
              promo: {
                price: 1,
                durationInMonths: 12,
              },
            },
          },
        ],
        mostRecommendedIndex: 0,
      };
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct: OmapiProductTestfactory.build(),
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const expected: ProductRecommendationResult = {
        productRecommendations: [
          {
            offers,
            salesOffer: {
              price: 1,
              promo: {
                price: 1,
                durationInMonths: 12,
              },
            },
            products,
          },
        ],
        mostRecommendedIndex: 0,
      };

      const getProductsSpy = jest.spyOn(productService, 'getProducts').mockReturnValue(of(products));

      const result$: Observable<ProductRecommendationResult> =
        productRecommendationMapper.toModel(rawProductRecommendationResult);

      result$.subscribe((result: ProductRecommendationResult) => {
        expect(result).toEqual(expected);
        expect(getProductsSpy).toHaveBeenCalledWith({ offers });
        done();
      });
    });
  });
});

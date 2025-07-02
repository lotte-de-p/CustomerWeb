import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiQueryProductInterface } from '../interfaces/omapi-query-product.interface';
import { QueryProductInfoTransformer } from './query-product-info-transformer.model';

const queryProductInfo = {
  products: [
    {
      labelKey: 'Galaxy S10 Black 128GB',
      productFamily: 'smartphones',
      variants: [
        {
          productId: '2063620',
          extraAtHomeDelivery: true,
          prices: {
            priceType: 'Non Recurrent Charge',
          },
          images: [
            {
              value: 'image_url',
            },
          ],
          shortDescription: {
            localizedContent: [
              {
                locale: 'en',
                data: 'Galaxy S10 128GB Black',
              },
            ],
          },
          brand: {
            localizedContent: [
              {
                locale: 'en',
                value: ['Samsung'],
              },
            ],
          },
        },
      ],
    },
  ],
} as OmapiQueryProductInterface;

const mockLanguageService = {
  getLanguage: jest.fn().mockReturnValue(LanguageEnum.EN),
};

describe('QueryProductInfoTransformer', () => {
  let queryProductInfoTransformer: QueryProductInfoTransformer, omapiProduct: OmapiProduct;
  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QueryProductInfoTransformer,
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    queryProductInfoTransformer = TestBed.inject(QueryProductInfoTransformer);
    omapiProduct = queryProductInfoTransformer.toModel(queryProductInfo);
  });

  describe('toModel', () => {
    it('should transform the omapi query product to omapi product', () => {
      expect(omapiProduct.labelKey).toEqual('Galaxy S10 Black 128GB');
      expect(omapiProduct.productType).toEqual('SMARTPHONE');
      expect(omapiProduct.productId).toEqual('2063620');
      expect(omapiProduct.extraAtHomeDelivery).toEqual(true);
      expect(omapiProduct.priceType).toEqual('Non Recurrent Charge');
      expect(omapiProduct.imageUrl).toEqual('image_url');
      expect(omapiProduct.name).toEqual('Galaxy S10 128GB Black');
      expect(omapiProduct.brand).toEqual('Samsung');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

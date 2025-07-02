import { LanguageEnum } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiQueryProductMapper } from './omapi-query-product.mapper';
import { RawOmapiQueryProductInterface } from '../interfaces/raw-omapi-query-product.interface';
import { OmapiQueryProductInterface } from '../interfaces/omapi-query-product.interface';

const mockQueryProductsResponse = require('../../data/http/common/omapi/omapi-query-product-response.json');

const mockQueryProduct = mockQueryProductsResponse as RawOmapiQueryProductInterface;

describe('OmapiQueryProductMapper', () => {
  let omapiQueryProductMapper: OmapiQueryProductMapper, omapiQueryProduct: OmapiQueryProductInterface;
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
      providers: [OmapiQueryProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    omapiQueryProductMapper = TestBed.inject(OmapiQueryProductMapper);
    omapiQueryProduct = omapiQueryProductMapper.toModel(mockQueryProduct);
  });

  describe('toModel', () => {
    it('should map the omapi query product data', () => {
      expect(omapiQueryProduct.products[0].labelKey).toEqual('Galaxy S10 Black 128GB');
      expect(omapiQueryProduct.products[0].productFamily).toEqual('smartphones');
    });

    it('should map the omapi query variants data', () => {
      expect(omapiQueryProduct.products[0].variants[0].productId).toEqual('2063620');
      expect(omapiQueryProduct.products[0].variants[0].prices.priceType).toEqual('Non Recurrent Charge');
      expect(omapiQueryProduct.products[0].variants[0].extraAtHomeDelivery).toEqual(true);
    });

    it('should map the omapi query variants image data', () => {
      expect(omapiQueryProduct.products[0].variants[0].images[0].value).toEqual(
        `https://s3.eu-central-1.amazonaws.com/994842004184-pim-dev-akeneo/4/0/5/5/405577bdaec21d4b51a5368fedb7905b0db19893_galaxy_s10.png`
      );
      expect(omapiQueryProduct.products[0].variants[0].images[0].attributeKey).toEqual('main_image');
    });

    it('should map the omapi query shortDescription data', () => {
      expect(omapiQueryProduct.products[0].variants[0].shortDescription.localizedContent[0].data).toEqual(
        'Galaxy S10 128GB Black'
      );
      expect(omapiQueryProduct.products[0].variants[0].shortDescription.localizedContent[0].locale).toEqual('en');
    });

    it('should map the omapi query brand value', () => {
      expect(omapiQueryProduct.products[0].variants[0].brand.localizedContent[0].value[0]).toEqual('Samsung');
      expect(omapiQueryProduct.products[0].variants[0].brand.localizedContent[0].locale).toEqual('nl');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

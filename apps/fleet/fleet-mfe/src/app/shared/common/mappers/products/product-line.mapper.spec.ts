import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { HttpHeaders } from '@angular/common/http';
import { ProductLineMapper } from './product-line.mapper';

const productLines = require('../../../../../../../../../fixtures/http/netcracker/products/product-lines.json');

describe('ProductLineMapper', () => {
  let productLineMapper: ProductLineMapper;
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
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    TestBed.overrideProvider('Window', {
      useValue: setLang(LanguageEnum.NL),
    });
    productLineMapper = TestBed.inject(ProductLineMapper);
  });

  it('toModel', () => {
    const rawCustomerProduct = JSON.parse(JSON.stringify(productLines));
    rawCustomerProduct.headers = new HttpHeaders().append('content-range', '20-400/*');
    const actual = productLineMapper.toModel(rawCustomerProduct);
    expect(actual.range).toBe('20-400/*');
    expect(actual.lines.length).toEqual(42);
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

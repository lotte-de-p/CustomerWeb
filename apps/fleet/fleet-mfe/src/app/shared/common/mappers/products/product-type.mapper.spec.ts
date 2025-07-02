import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ProductTypeMapper } from './product-type.mapper';

describe('ProductTypeMapper', () => {
  let productTypeMapper: ProductTypeMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    productTypeMapper = TestBed.inject(ProductTypeMapper);
  });

  describe('toModel', () => {
    it('should map product types', () => {
      const brand = 'BASE';
      const rawProductBrandMock = {
        brand: brand,
      };

      const actual = productTypeMapper.toModel(rawProductBrandMock);

      expect(actual.brand).toBe(brand);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

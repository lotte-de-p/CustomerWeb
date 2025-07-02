import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductMapper } from './product.mapper';
import { AddressMapper } from '../../../common/address/mappers/address.mapper';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { RawProductInterface } from '../interfaces/raw-product-holding.interface';

const mockProductJson: RawProductInterface = require('../../../../../../../../../fixtures/http/cafe/product-holding/product.json');

describe('ProductMapper', () => {
  let productMapper: ProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressMapper, OmapiProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    productMapper = TestBed.inject(ProductMapper);
  });

  describe('toModel', () => {
    it('should return a valid product object', () => {
      const actual = productMapper.toModel(mockProductJson);

      expect(actual.identifier).toBe('DTV2710555');
      expect(actual.lineIdentifier).toBe('DTV2710544');
      expect(actual.customerProductId).toBe(158495352);
      expect(actual.specUrl).toBe('https://api.dvp.telenet.be/omapi/public/product/285');
      expect(actual.label).toBe('tv.feature.digital.interactive.package.digitaalzenderpakket');
      expect(actual.products.length).toBe(0);
      expect(actual.options.length).toBe(1);
    });

    it('should not process the address if there is no address', () => {
      delete mockProductJson['address'];

      const actual = productMapper.toModel(mockProductJson);
      expect(actual.address).toBe(undefined);
    });

    it('should not process the address if there is no address', () => {
      const mockProduct = Object.assign({}, mockProductJson);
      mockProductJson['products'] = [];
      mockProductJson['products'].push(mockProduct);
      mockProductJson['products'].push(mockProduct);

      const actual = productMapper.toModel(mockProductJson);
      expect(actual.products.length).toBe(2);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

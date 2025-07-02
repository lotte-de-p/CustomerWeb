import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressMapper } from '../../../common/address/mappers/address.mapper';
import { RawProductInterface } from '../interfaces/raw-product-holding.interface';
import { ProductHoldingMapper } from './product-holding.mapper';
import { ProductMapper } from './product.mapper';

const mockProductJson: {
  customerproductholding: RawProductInterface[];
} = require('../../../../../../../../../fixtures/http/cafe/product-holding/customer-product-holding.json');

describe('ProductHoldingMapper', () => {
  let productHoldingMapper: ProductHoldingMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressMapper, ProductMapper, ProductHoldingMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    productHoldingMapper = TestBed.inject(ProductHoldingMapper);
  });

  describe('toModel', () => {
    it('should return a valid product object', () => {
      const moveOrderResponse = productHoldingMapper.toModel(mockProductJson);
      expect(moveOrderResponse.products.length).toBe(3);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

import { AbstractMapper } from './abstract.mapper';
import { Label } from '../model/priced-cph-data.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

class TestMapper extends AbstractMapper {
  constructor() {
    super('test-icon');
  }

  protected getLabel(_product?: Product, _parent?: Product): Label {
    return { key: 'test-key', args: [{ data: 'test-data' }] };
  }
}

describe('AbstractMapper', function () {
  const mapper = new TestMapper();

  describe('map', function () {
    it('should return a undefined if product is not defined', function () {
      const actual = mapper.map(undefined, undefined);

      expect(actual).toBeUndefined();
    });
    it('should return a PricedCphItem with max weight when product has no omapi info', function () {
      const actual = mapper.map(new Product(), undefined);

      expect(actual?.weight).toBe(999);
    });
    it('should return a PricedCphItem with all fiels correctly filled in', function () {
      const product = new Product();
      product.productInfo = new OmapiProduct();
      product.productInfo.weight = 3;
      const actual = mapper.map(product, undefined);

      expect(actual?.weight).toBe(3);
      expect(actual?.key).toEqual('test-key');
      expect(actual?.amount).toBe(1);
      expect(actual?.icon).toEqual('test-icon');
      expect(actual?.label.key).toEqual('test-key');
      expect(actual?.label.args).toEqual([{ data: 'test-data' }]);
    });
  });
});

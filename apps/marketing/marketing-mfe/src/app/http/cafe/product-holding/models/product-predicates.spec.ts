import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Product } from './product.model';
import { ProductPredicates } from './product-predicates';

describe('ProductPredicates', function () {
  describe('get c5ProductPredicate', function () {
    const productInfo: OmapiProduct = new OmapiProduct();
    const product: Product = new Product();

    beforeEach(() => {
      product.productInfo = productInfo;
    });

    it('should return false if not a connect5 or connect5soho product', function () {
      productInfo.isConnect5 = jest.fn().mockReturnValue(false);
      productInfo.isConnect5Soho = jest.fn().mockReturnValue(false);

      const actual = [product].find(ProductPredicates.c5ProductPredicate);

      expect(actual).toBeUndefined();
    });

    it('should return true if a connect5 and not connect5soho product', function () {
      productInfo.isConnect5 = jest.fn().mockReturnValue(true);
      productInfo.isConnect5Soho = jest.fn().mockReturnValue(false);

      const actual = [product].find(ProductPredicates.c5ProductPredicate);

      expect(actual).toBe(product);
    });

    it('should return true if not connect5 and is connect5soho product', function () {
      productInfo.isConnect5 = jest.fn().mockReturnValue(false);
      productInfo.isConnect5Soho = jest.fn().mockReturnValue(true);

      const actual = [product].find(ProductPredicates.c5ProductPredicate);

      expect(actual).toBe(product);
    });

    it('should return true if connect5 and connect5soho product', function () {
      productInfo.isConnect5 = jest.fn().mockReturnValue(true);
      productInfo.isConnect5Soho = jest.fn().mockReturnValue(true);

      const actual = [product].find(ProductPredicates.c5ProductPredicate);

      expect(actual).toBe(product);
    });
  });
});

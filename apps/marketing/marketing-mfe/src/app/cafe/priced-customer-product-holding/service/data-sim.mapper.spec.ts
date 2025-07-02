import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { DataSimMapper } from './data-sim.mapper';

describe('DataSimMapper', function () {
  const expectedIcon = 'icon-sim-card-data';
  const expectedKey = 'ng.product-finder.step-card-offer.mobile-data-sim';

  const mapper = new DataSimMapper();

  const parent: Product | undefined = undefined;
  let product: Product | undefined;
  let productInfo: OmapiProduct | undefined;

  beforeEach(() => {
    product = new Product();
    productInfo = new OmapiProduct();
    product.productInfo = productInfo;
  });

  describe('map', function () {
    it('should set icon and key correctly', function () {
      (product as Product).productInfo = undefined;
      const actual = mapper.map(product, parent);

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual(expectedKey);
      expect(actual?.label.key).toEqual(expectedKey);
    });
  });
});

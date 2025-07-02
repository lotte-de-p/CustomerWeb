import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { FixedTelMapper } from './fixed-tel.mapper';

describe('FixedTelMapper', function () {
  const expectedIcon = 'icon-telephone';
  const expectedKey = 'ng.product-finder.step-card-offer.fixed-tel';

  const mapper = new FixedTelMapper();

  const product = new Product();
  let parent: Product;
  let parentInfo: OmapiProduct;

  beforeEach(() => {
    parent = new Product();
    parentInfo = new OmapiProduct();

    parent.productInfo = parentInfo;
  });

  describe('map', function () {
    it('should set icon and key correctly', function () {
      parent.is4P = jest.fn().mockReturnValue(false);
      parent.is3P = jest.fn().mockReturnValue(false);

      const actual = mapper.map(product, parent);

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual(expectedKey);
      expect(actual?.label.key).toEqual(expectedKey);
      expect(actual?.label.args).toBeUndefined();
    });
    it('should set label for WIGO 3P correctly', function () {
      parent.is3P = jest.fn().mockReturnValue(true);
      parentInfo.isWigo = jest.fn().mockReturnValue(true);

      const actual = mapper.map(parent, parent);

      expect(actual?.label.key).toEqual(expectedKey + '-wigo3P');
    });
    it('should set label for WIGO 4P correctly', function () {
      parent.is4P = jest.fn().mockReturnValue(true);
      parentInfo.isWigo = jest.fn().mockReturnValue(true);

      const actual = mapper.map(parent, parent);

      expect(actual?.label.key).toEqual(expectedKey + '-wigo4P');
    });
    it('should set label for ONE(up) correctly', function () {
      parentInfo.isConnect5 = jest.fn().mockReturnValue(true);

      const actual = mapper.map(parent, parent);

      expect(actual?.label.key).toEqual(expectedKey + '-one');
    });
  });
});

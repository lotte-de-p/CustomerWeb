import { DigitalTvMapper } from './digital-tv.mapper';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('DigitalTvMapper', function () {
  const expectedIcon = 'icon-tv';
  const expectedKey = 'ng.product-finder.step-card-offer.dtv';

  const mapper = new DigitalTvMapper();

  let parent: Product;
  let product: Product;
  let parentInfo: OmapiProduct;

  beforeEach(() => {
    parent = new Product();
    product = new Product();
    parentInfo = new OmapiProduct();

    parent.productInfo = parentInfo;
  });

  describe('map', function () {
    it('should set icon and key correctly', function () {
      parentInfo.isWigo = jest.fn().mockReturnValue(false);
      parentInfo.isHighTier = jest.fn().mockReturnValue(false);
      product.isFlow = jest.fn().mockReturnValue(false);
      product.isIconic = jest.fn().mockReturnValue(false);
      product.isYugoTv = jest.fn().mockReturnValue(false);

      const actual = mapper.map(product, parent);

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual(expectedKey);
      expect(actual?.label.key).toEqual(expectedKey);
      expect(actual?.label.args).toBeUndefined();
    });
    it('should set label for flow correctly', function () {
      product.isFlow = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, undefined);

      expect(actual?.label.key).toEqual(expectedKey + '-flow');
    });
    it('should set label for iconic tv correctly', function () {
      product.isIconic = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, undefined);

      expect(actual?.label.key).toEqual(expectedKey + '-terugkijk-play');
    });
    it('should set label for yugo tv correctly', function () {
      product.isYugoTv = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, undefined);

      expect(actual?.label.key).toEqual(expectedKey + '-yugo');
    });
    it('should set label for high tier WIGO correctly', function () {
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.isHighTier = jest.fn().mockReturnValue(true);

      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + '-terugkijk');
    });
    it('should set label for low tier WIGO correctly', function () {
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.isHighTier = jest.fn().mockReturnValue(false);

      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey);
    });
  });
});

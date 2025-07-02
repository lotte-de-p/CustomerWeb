import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { DefaultMapper } from './default.mapper';
import { TranslateHelperService } from './translate-helper.service';

describe('DefaultMapper', function () {
  const expectedIcon = '';
  const expectedKey = 'ng.priced-cph.item.lbl';

  const mapper = new DefaultMapper(new TranslateHelperService());

  const parent: Product | undefined = undefined;
  let product: Product;
  let productInfo: OmapiProduct;

  beforeEach(() => {
    product = new Product();
    productInfo = new OmapiProduct();
    product.productInfo = productInfo;
  });

  describe('map', function () {
    it('should set icon and key correctly', function () {
      product.productInfo = undefined;
      const actual = mapper.map(product, parent);

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual('unknown');
      expect(actual?.label.key).toEqual(expectedKey);
      expect(actual?.label.args).toEqual({ itemName: 'unknown' });
    });
    it('should set label arguments with correct name', function () {
      productInfo.name = 'test name';
      const actual = mapper.map(product, parent);

      expect(actual?.key).toEqual('test name');
      expect(actual?.label.args).toEqual({ itemName: 'test name' });
    });
  });
});

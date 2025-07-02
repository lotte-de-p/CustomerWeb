import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Option } from './option.model';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

describe('OptionModel', () => {
  let option: Option;
  let productInfo: OmapiProduct;

  beforeEach(() => {
    option = new Option();
    productInfo = new OmapiProduct();
  });

  describe('getOmapiId', () => {
    it('should return undefined if no productinfo', function () {
      expect(option.getOmapiId()).toBeUndefined();
    });
    it('should return product id productinfo', function () {
      productInfo.productId = '123456';
      option.productInfo = productInfo;
      expect(option.getOmapiId()).toEqual('123456');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

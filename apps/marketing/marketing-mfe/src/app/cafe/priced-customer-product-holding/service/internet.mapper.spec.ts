import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { OmapiProduct, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { InternetMapper } from './internet.mapper';

describe('InternetMapper', function () {
  const expectedIcon = 'icon-wifi-signal';
  const expectedKey = 'ng.product-finder.step-card-offer.internet';

  const mapper = new InternetMapper();

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
      const actual = mapper.map(product, parent);
      product.productInfo = undefined;

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual(expectedKey);
      expect(actual?.label.key).toEqual(expectedKey);
      expect(actual?.label.args).toBeUndefined();
    });
    it('should set label arguments with correct download speed', function () {
      const specification: SpecificationInterface = {
        value: '500',
        labelKey: '',
        visible: true,
        weight: '1',
        unit: 'mb',
        id: '',
        localizedContent: undefined,
        serviceType: '',
      };
      const infoSpy = jest.fn();

      productInfo.getServiceSpecificationByLabelKey = infoSpy;

      infoSpy.mockImplementation((arg) => {
        if (arg === 'spec.fixedinternet.speed.download') {
          return specification;
        } else {
          return undefined;
        }
      });

      const actual = mapper.map(product, undefined);

      expect(actual?.label.args).toEqual({ internetSpeed: '500 mb' });
      expect(infoSpy).toHaveBeenCalledWith('spec.fixedinternet.speed.download');
    });
    it('should set download speed to undefined if not known', function () {
      productInfo.getServiceSpecificationByLabelKey = jest.fn().mockReturnValue(undefined);

      const actual = mapper.map(product, undefined);

      expect(actual?.label.args).toBeUndefined();
    });
  });
});

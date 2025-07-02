import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { MobileMapper } from './mobile.mapper';
import { OmapiProduct, SpecificationInterface } from '@telenet/ng-lib-omapi';

describe('MobileMapper', function () {
  const expectedIcon = 'icon-mobile';
  const expectedKey = 'ng.product-finder.step-card-offer.mobile-data-';
  const singleSim = 'wigo.single-sim-cards';
  const mapper = new MobileMapper();

  let product: Product;
  let parent: Product;
  let parentInfo: OmapiProduct;
  let productInfo: OmapiProduct;

  beforeEach(() => {
    product = new Product();
    parent = new Product();
    productInfo = new OmapiProduct();
    parentInfo = new OmapiProduct();

    parent.productInfo = parentInfo;
  });

  describe('map', function () {
    it('should set icon and label correctly for standalone', function () {
      product.isPVV = jest.fn().mockReturnValue(false);
      const spec: SpecificationInterface = {
        id: '',
        labelKey: 'spec-mobileinternet-volume-cap',
        localizedContent: undefined,
        serviceType: 'MOBILE_INTERNET',
        value: '4',
        unit: 'GB',
        visible: true,
        weight: '',
      };
      productInfo.services = [
        {
          serviceType: 'MOBILE_INTERNET',
          specifications: [spec],
        },
      ];

      product.productInfo = productInfo;

      const actual = mapper.map(product, undefined);

      expect(actual?.icon).toEqual(expectedIcon);
      expect(actual?.key).toEqual(expectedKey + 'standalone');
      expect(actual?.label.key).toEqual(expectedKey + 'standalone');
      expect(actual?.label.args).toEqual({ data: '4 GB' });
    });
    it('should map to standalone when parent product has no productInfo', function () {
      parent.productInfo = undefined;
      const actual = mapper.map(product, undefined);

      expect(actual?.key).toEqual(expectedKey + 'standalone');
    });
    it('should map to standalone when parent product is not wigo or C5', function () {
      parentInfo.isWigo = jest.fn().mockReturnValue(false);
      parentInfo.isConnect5 = jest.fn().mockReturnValue(false);
      const actual = mapper.map(product, undefined);

      expect(actual?.key).toEqual(expectedKey + 'standalone');
    });
    it('should map to single SIM wigo when parent product is wigo and has 1 sim and product as no info', function () {
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.getMaxMobileLines = jest.fn().mockReturnValue('1');
      parentInfo.getSharedMobileData = jest.fn().mockReturnValue('20');
      const actual = mapper.map(product, parent);

      expect(actual?.key).toEqual(expectedKey + singleSim);
      expect(actual?.label.key).toEqual(expectedKey + singleSim);
      expect(actual?.label.args).toEqual({ data: '20 GB', simCards: 1 });
    });
    it('should map to single SIM wigo when parent product is wigo and has 1 sim and product is not unlimited', function () {
      product.productInfo = productInfo;
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.getMaxMobileLines = jest.fn().mockReturnValue('1');
      parentInfo.getSharedMobileData = jest.fn().mockReturnValue('20');
      productInfo.hasUnlimitedInternetBasedOnLabelKey = jest.fn().mockReturnValue(false);
      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + singleSim);
      expect(actual?.label.args).toEqual({ data: '20 GB', simCards: 1 });
    });
    it('should map to single SIM wigo when parent product is wigo and has 1 sim and unlimited data', function () {
      product.productInfo = productInfo;
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.getMaxMobileLines = jest.fn().mockReturnValue('1');
      parentInfo.getSharedMobileData = jest.fn().mockReturnValue('20');
      productInfo.hasUnlimitedInternetBasedOnLabelKey = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + singleSim);
      expect(actual?.label.args).toEqual({ data: 'Unlimited', simCards: 1 });
    });
    it('should map to multiple SIM wigo when parent product is wigo and has more than 1 sim and unlimited data', function () {
      product.productInfo = productInfo;
      parentInfo.isWigo = jest.fn().mockReturnValue(true);
      parentInfo.getMaxMobileLines = jest.fn().mockReturnValue('2');
      parentInfo.getSharedMobileData = jest.fn().mockReturnValue('20');
      productInfo.hasUnlimitedInternetBasedOnLabelKey = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + 'wigo.multiple-sim-cards');
      expect(actual?.label.args).toEqual({ data: 'Unlimited', simCards: 2 });
    });
    it('should map to ONE label for Connect 5 products', function () {
      parentInfo.isConnect5 = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + 'one');
      expect(actual?.label.args).toBeUndefined();
    });
    it('should map to PVV label for PVV products', function () {
      product.isPVV = jest.fn().mockReturnValue(true);
      const actual = mapper.map(product, parent);

      expect(actual?.label.key).toEqual(expectedKey + 'pvv');
      expect(actual?.label.args).toBeUndefined();
    });
  });
});

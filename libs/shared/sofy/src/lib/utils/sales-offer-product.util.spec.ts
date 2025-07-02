import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { SalesOfferProductUtil } from './sales-offer-product.util';
import {
  salesOfferProductComfortInstallTypeFactory,
  salesOfferProductFactory,
  SalesOfferProductInstallType,
} from '../models/response';

describe('SalesOfferProductUtil', function () {
  describe('isResidentialProduct', () => {
    it('should return true if RMD product', function () {
      const rmdInfo: OmapiProduct = OmapiProductTestfactory.build({ characteristics: { productSegment: 'RMD' } });
      const rmdProduct = salesOfferProductFactory.build({ productInfo: rmdInfo });

      expect(SalesOfferProductUtil.isResidentialProduct(rmdProduct)).toBe(true);
    });
    it('should return false if not RMD product', function () {
      const tbInfo: OmapiProduct = OmapiProductTestfactory.build({ characteristics: { productSegment: 'TB' } });
      const tbProduct = salesOfferProductFactory.build({ productInfo: tbInfo });

      expect(SalesOfferProductUtil.isResidentialProduct(tbProduct)).toBe(false);
    });
  });

  describe('hasAnyInstallTypes', () => {
    it('should return true if product has install types', function () {
      const installType: SalesOfferProductInstallType = salesOfferProductComfortInstallTypeFactory.build();
      const product = salesOfferProductFactory.build({ installtypes: [installType] });

      expect(SalesOfferProductUtil.hasAnyInstallTypes(product)).toBe(true);
    });
    it('should return false if product has no install types', function () {
      const product = salesOfferProductFactory.build({ installtypes: [] });

      expect(SalesOfferProductUtil.hasAnyInstallTypes(product)).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

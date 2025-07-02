import {
  CafeRawCustomerproductholdingModel,
  CafeRawCustomerproductholdingRawomapiProductModel,
} from './cafe-raw-customerproductholding.model';
import { OmapiProductType } from '@telenet/ng-lib-omapi';

describe('CafeRawCustomerproductholdingModel', (): void => {
  describe('isProductTypeBundle', (): void => {
    it('should return true given producttype is bundle', (): void => {
      const actual = new CafeRawCustomerproductholdingModel();
      actual.rawOmapi = {
        product: { producttype: OmapiProductType.BUNDLE },
      } as CafeRawCustomerproductholdingRawomapiProductModel;

      expect(actual.isProductTypeBundle()).toEqual(true);
    });
    it('should return false given producttype is not bundle', (): void => {
      const actual = new CafeRawCustomerproductholdingModel();
      actual.rawOmapi = {
        product: { producttype: OmapiProductType.PRODUCT },
      } as CafeRawCustomerproductholdingRawomapiProductModel;

      expect(actual.isProductTypeBundle()).toEqual(false);
    });
  });
});

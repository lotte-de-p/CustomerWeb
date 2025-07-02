import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SalesOfferProductOptinUtil } from './sales-offer-product-optin.util';
import { salesOfferProductOptinFactory } from '../models/response';

describe('SalesOfferProductOptinUtil', function () {
  describe('hasMobileInternetOptin', function () {
    it('should return false if array is empty', function () {
      const actual = SalesOfferProductOptinUtil.hasMobileInternetOptin([]);
      expect(actual).toBeFalsy();
    });
    it('should return false if array does not contain optins with product info', function () {
      const optin = salesOfferProductOptinFactory.build({ productInfo: undefined });
      const actual = SalesOfferProductOptinUtil.hasMobileInternetOptin([optin]);
      expect(actual).toBeFalsy();
    });
    it("should return false if array does not contain optins of type 'MOBILE_INTERNET'", function () {
      const optin = salesOfferProductOptinFactory.build();
      const actual = SalesOfferProductOptinUtil.hasMobileInternetOptin([optin]);
      expect(actual).toBeFalsy();
    });
    it("should return true if array does contain optins of type 'MOBILE_INTERNET'", function () {
      const optin = salesOfferProductOptinFactory.build({
        productInfo: {
          hasServiceType(serviceType: string): boolean {
            return serviceType === 'MOBILE_INTERNET';
          },
        } as OmapiProduct,
      });
      const actual = SalesOfferProductOptinUtil.hasMobileInternetOptin([optin]);
      expect(actual).toBeTruthy();
    });
  });
});

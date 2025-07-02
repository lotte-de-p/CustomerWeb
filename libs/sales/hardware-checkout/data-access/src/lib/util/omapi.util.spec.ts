import { OmapiUtil } from './omapi.util';
import { hardwareOrderItem } from '../+state/hardware-checkout.testfactory';
import { rawOmapiQueryProductInterfaceDataFactory, rawVariantsInterfaceFactory } from '@telenet/ng-lib-omapi-query';

describe('OmapiUtil', () => {
  describe('getProductType', () => {
    it('should return the productFamily in upper case of matching omapi product', () => {
      const omapiQuery = rawOmapiQueryProductInterfaceDataFactory.build({
        variants: [rawVariantsInterfaceFactory.build({ productId: 'prod-id' })],
        productFamily: 'charger',
      });

      const orderItem = hardwareOrderItem.build({ chars: { 'Item Code': 'prod-id' } });
      const actual = OmapiUtil.getProductType(orderItem, [omapiQuery]);

      expect(actual).toEqual('CHARGER');
    });
    it('should return undefined if no matching omapi product', () => {
      const omapiQuery = rawOmapiQueryProductInterfaceDataFactory.build({
        variants: [rawVariantsInterfaceFactory.build({ productId: 'other-id' })],
        productFamily: 'charger',
      });

      const orderItem = hardwareOrderItem.build({ chars: { 'Item Code': 'prod-id' } });
      const actual = OmapiUtil.getProductType(orderItem, [omapiQuery]);

      expect(actual).toBeUndefined();
    });
    it("should return 'SMARTPHONE' if matching omapi product is of type SMARTPHONES", () => {
      const omapiQuery = rawOmapiQueryProductInterfaceDataFactory.build({
        variants: [rawVariantsInterfaceFactory.build({ productId: 'prod-id' })],
        productFamily: 'smartphones',
      });

      const orderItem = hardwareOrderItem.build({ chars: { 'Item Code': 'prod-id' } });
      const actual = OmapiUtil.getProductType(orderItem, [omapiQuery]);

      expect(actual).toEqual('SMARTPHONE');
    });
    it('should return undefined if no matching omapi product', () => {
      const orderItem = hardwareOrderItem.build({ chars: { 'Item Code': 'prod-id' } });
      const actual = OmapiUtil.getProductType(orderItem, []);

      expect(actual).toBeUndefined();
    });
  });
});

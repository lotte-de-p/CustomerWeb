import '@angular/common/locales/global/eu';
import { ConnectFivePriceFromFlowTypeUtil } from './connect-five-price-from-flow-type.util';
import { FlowTypeEnum } from '../enums/flow-type.enum';

describe('ConnectFivePriceFromFlowTypeUtil ', () => {
  describe('connectFivePriceWithFlowTypeConsidered', () => {
    it('should return price excl vat if the flow type is soho', () => {
      const exclVatPrice = 5;
      const pricedObject = { price: 10, priceexclvat: exclVatPrice };

      const actual = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(
        FlowTypeEnum.SOHO,
        pricedObject
      );

      expect(actual).toBe(exclVatPrice);
    });
    it('should return price with vat if the flow type is not soho', () => {
      const vatInclPrice = 10;
      const pricedObject = { price: vatInclPrice, priceexclvat: 5 };

      const actual = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(
        FlowTypeEnum.RES,
        pricedObject
      );

      expect(actual).toBe(vatInclPrice);
    });
  });
});

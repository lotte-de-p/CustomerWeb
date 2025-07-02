import { FlowTypeEnum } from '../enums/flow-type.enum';
import { SalesOfferPricedItem } from '../models/response';

export class ConnectFivePriceFromFlowTypeUtil {
  static connectFivePriceWithFlowTypeConsidered<T extends SalesOfferPricedItem>(
    flowType: FlowTypeEnum,
    objectContainingPriceWithVatAndPriceWithoutVat: T
  ): number {
    if (flowType === FlowTypeEnum.SOHO) {
      return objectContainingPriceWithVatAndPriceWithoutVat.priceexclvat;
    } else {
      return objectContainingPriceWithVatAndPriceWithoutVat.price;
    }
  }
}

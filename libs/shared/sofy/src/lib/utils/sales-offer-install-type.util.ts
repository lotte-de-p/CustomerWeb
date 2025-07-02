import { SalesOfferProductInstallType, SalesOfferPromo } from '../models/response';
import { SelfInstallTypeEnum } from '../enums/self-install-type.enum';
import { DeliveryOptionInterface } from '../interfaces/delivery-option.interface';
import { InstallTypeEnum } from '../enums/ocapi-move-order.enum';
import { FlowTypeEnum } from '../enums/flow-type.enum';
import { ConnectFivePriceFromFlowTypeUtil } from './connect-five-price-from-flow-type.util';

export class SalesOfferInstallTypeUtil {
  public static getInstallType(
    type: InstallTypeEnum,
    installTypes: SalesOfferProductInstallType[]
  ): SalesOfferProductInstallType | undefined {
    return installTypes.find((installType) => installType.description === type);
  }

  public static getInstallTypeForFlowType(
    type: InstallTypeEnum,
    installTypes: SalesOfferProductInstallType[],
    flowType: FlowTypeEnum
  ): SalesOfferProductInstallType | undefined {
    const foundInstallType = this.getInstallType(type, installTypes);
    if (typeof foundInstallType === 'undefined') {
      return undefined;
    }
    const installType: SalesOfferProductInstallType = JSON.parse(JSON.stringify(foundInstallType));
    installType.price = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, installType);
    installType.promos.forEach(
      (promo: SalesOfferPromo) =>
        (promo.price = ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, promo))
    );
    return installType;
  }

  public static getDeliveryOption(
    type: SelfInstallTypeEnum,
    installType: SalesOfferProductInstallType
  ): DeliveryOptionInterface | undefined {
    return installType?.options
      ? installType.options.find(
          (installTypeOption: DeliveryOptionInterface) => installTypeOption?.description === type
        )
      : undefined;
  }

  public static hasHomeDelivery(installType: SalesOfferProductInstallType): boolean {
    return !!installType.options?.some(
      (installTypeOption) => installTypeOption?.description === SelfInstallTypeEnum.HOME_DELIVERY
    );
  }

  public static hasPickup(installType: SalesOfferProductInstallType): boolean {
    return !!installType.options?.some(
      (installTypeOption) => installTypeOption?.description === SelfInstallTypeEnum.PICKUP
    );
  }
}

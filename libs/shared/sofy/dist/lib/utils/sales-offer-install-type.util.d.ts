import { SalesOfferProductInstallType } from '../models/response';
import { SelfInstallTypeEnum } from '../enums/self-install-type.enum';
import { DeliveryOptionInterface } from '../interfaces/delivery-option.interface';
import { InstallTypeEnum } from '../enums/ocapi-move-order.enum';
import { FlowTypeEnum } from '../enums/flow-type.enum';
export declare class SalesOfferInstallTypeUtil {
    static getInstallType(type: InstallTypeEnum, installTypes: SalesOfferProductInstallType[]): SalesOfferProductInstallType | undefined;
    static getInstallTypeForFlowType(type: InstallTypeEnum, installTypes: SalesOfferProductInstallType[], flowType: FlowTypeEnum): SalesOfferProductInstallType | undefined;
    static getDeliveryOption(type: SelfInstallTypeEnum, installType: SalesOfferProductInstallType): DeliveryOptionInterface | undefined;
    static hasHomeDelivery(installType: SalesOfferProductInstallType): boolean;
    static hasPickup(installType: SalesOfferProductInstallType): boolean;
}
//# sourceMappingURL=sales-offer-install-type.util.d.ts.map
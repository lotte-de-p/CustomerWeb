import { InstallTypeInterface } from '../interfaces/install-type.interface';
import { PromoModel } from './promo.model';
import { DeliveryOptionInterface } from '../interfaces/delivery-option.interface';
export declare class InstallTypeModel implements InstallTypeInterface {
    description: string;
    mutuallyexclusive: string;
    price: number;
    priceexclvat: number;
    promos: PromoModel[];
    selected: boolean;
    options?: DeliveryOptionInterface[];
    withSelected(): InstallTypeModel;
    withDescription(description: string): InstallTypeModel;
    withPrice(price: number): InstallTypeModel;
    isPreInstall(): boolean;
    isComfortInstall(): boolean;
    isSelfInstall(): boolean;
    isModemSwap(): boolean;
}
//# sourceMappingURL=install-type.model.d.ts.map
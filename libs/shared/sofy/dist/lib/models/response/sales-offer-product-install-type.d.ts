import { DeliveryOptionInterface } from '../../interfaces/delivery-option.interface';
import { SalesOfferPromo } from './sales-offer-promo.model';
import { SalesOfferPricedItem } from './sales-offer-priced-item.model';
import { InstallTypeEnum } from '../../enums/ocapi-move-order.enum';
export interface SalesOfferProductInstallType extends SalesOfferPricedItem {
    selected: boolean;
    description: InstallTypeEnum;
    mutuallyexclusive: string;
    promos: SalesOfferPromo[];
    options?: DeliveryOptionInterface[];
}
//# sourceMappingURL=sales-offer-product-install-type.d.ts.map
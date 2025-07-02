import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SalesOfferPricedItem } from './sales-offer-priced-item.model';
import { SalesOfferPromo } from './sales-offer-promo.model';
export interface SalesOfferProductOptin extends SalesOfferPricedItem {
    specurl: string;
    productInfo?: OmapiProduct;
    omapiid: string;
    mutuallyexclusive?: string;
    selected: boolean;
    description: string;
    originalprice: number;
    promos: SalesOfferPromo[];
}
//# sourceMappingURL=sales-offer-product-optin.model.d.ts.map
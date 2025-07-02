import { SalesOfferPricedItem, SalesOfferPromo } from '../models/response';
export interface CostInterface extends SalesOfferPricedItem {
    name: string;
    recurring: number;
    promotions: SalesOfferPromo[];
}
//# sourceMappingURL=cost.interface.d.ts.map
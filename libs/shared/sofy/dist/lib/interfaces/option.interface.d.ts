import { SalesOfferPromo } from '../models/response';
export interface OptionInterface {
    specUrl: string;
    omapiId: string;
    mutuallyExclusive: string;
    selected: boolean;
    description: string;
    price: number;
    priceexclvat: number;
    originalprice: number;
    promos: SalesOfferPromo[];
}
//# sourceMappingURL=option.interface.d.ts.map
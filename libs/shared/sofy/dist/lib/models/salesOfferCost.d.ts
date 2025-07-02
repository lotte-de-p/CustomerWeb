import { CostInterface } from '../interfaces/cost.interface';
import { PromoModel } from './promo.model';
export declare class SalesOfferCost implements CostInterface {
    name: string;
    price: number;
    priceexclvat: number;
    promotions: PromoModel[];
    recurring: number;
}
//# sourceMappingURL=salesOfferCost.d.ts.map
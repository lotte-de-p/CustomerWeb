import { PromoMapper } from './promo.mapper';
import { CostInterface } from '../interfaces/cost.interface';
import { SalesOfferCost } from '../models/salesOfferCost';
import * as i0 from "@angular/core";
export declare class CostMapper {
    private readonly promoMapper;
    constructor(promoMapper: PromoMapper);
    map(rawCost: CostInterface): SalesOfferCost;
    private mapPromotions;
    static ɵfac: i0.ɵɵFactoryDeclaration<CostMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CostMapper>;
}
//# sourceMappingURL=cost.mapper.d.ts.map
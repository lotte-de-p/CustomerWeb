import { SalesOfferPromo, SalesOfferPromoPeriod } from './response';
export declare class PromoModel implements SalesOfferPromo {
    backendid: number;
    duration: number;
    legalid: string;
    name: string;
    period: SalesOfferPromoPeriod;
    price: number;
    priceexclvat: number;
    puk: string;
    tags: string[];
    getNormalizedName(): string;
    getAbsoluteAmount(): number;
}
//# sourceMappingURL=promo.model.d.ts.map
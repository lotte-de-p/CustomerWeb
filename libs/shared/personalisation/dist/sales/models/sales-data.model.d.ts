import { SalesDataType } from './sales-data.type';
export interface RawSalesData {
    products: string[];
    options: string[];
    optins: string[];
}
export declare class SalesData {
    private offers;
    constructor(salesData?: SalesData);
    hasOffers(): boolean;
    setOffers(offers: SalesDataOffer[]): void;
    getOffers(): SalesDataOffer[];
    flatten(): SalesData;
}
export declare class SalesDataOffer {
    id: string;
    type: SalesDataType;
    offers?: SalesDataOffer[];
    amountOfLimitedSims?: number;
    static flattenSalesDataOffer(salesDataOffer: SalesDataOffer): SalesDataOffer[];
    static of(id: string, type: SalesDataType, offers?: SalesDataOffer[]): SalesDataOffer;
}
//# sourceMappingURL=sales-data.model.d.ts.map
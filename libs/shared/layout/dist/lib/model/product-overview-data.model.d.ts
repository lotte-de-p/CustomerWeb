export interface OverviewItem {
    label: OverviewItemLabel;
    price?: OverviewPrice;
    promos?: OverviewPromo[];
    subItems?: OverviewItem[];
    weight?: number;
    hidePromoLabels?: boolean;
}
export interface OverviewPrice {
    value: number;
    type?: OverviewPriceType;
}
export declare enum OverviewPriceType {
    MONTHLY = 0,
    ONE_TIME = 1
}
export interface OverviewPromo {
    value: number;
    duration: number;
    legalInformation?: string;
    label: string;
}
export interface OverviewItemLabel {
    key: string;
    values: unknown;
}
//# sourceMappingURL=product-overview-data.model.d.ts.map
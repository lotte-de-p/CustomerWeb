export declare const PRICING_TYPES: {
    readonly text: "text";
    readonly patch: "patch";
    readonly subtle: "subtle text";
};
export type PricingType = (typeof PRICING_TYPES)[keyof typeof PRICING_TYPES];
export declare const LANGUAGES: {
    readonly nl: "NL";
    readonly fr: "FR";
    readonly en: "EN";
};
export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export declare const PRICING_ALIGN: {
    readonly left: "left";
    readonly center: "center";
    readonly right: "right";
};
export type PricingAlign = (typeof PRICING_ALIGN)[keyof typeof PRICING_ALIGN];

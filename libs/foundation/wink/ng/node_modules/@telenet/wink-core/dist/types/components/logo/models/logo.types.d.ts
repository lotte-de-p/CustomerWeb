export declare const LogoVariantsArray: string[];
export type logoVariant = (typeof LogoVariantsArray)[number];
export declare const LOGO_CATEGORIES: {
    readonly telenet: "telenet";
    readonly base: "base";
    readonly entPlay: "entertainment-play";
    readonly entStream: "entertainment-streaming";
};
export type LogoCategories = (typeof LOGO_CATEGORIES)[keyof typeof LOGO_CATEGORIES];

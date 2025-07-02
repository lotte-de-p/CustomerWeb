export declare const TITLE_SIZES: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
};
export type TitleSize = (typeof TITLE_SIZES)[keyof typeof TITLE_SIZES];
export declare const TITLE_SPACINGS_Y: {
    readonly default: "default";
    readonly top: "top";
    readonly bottom: "bottom";
    readonly none: "none";
};
export type TitleSpacingY = (typeof TITLE_SPACINGS_Y)[keyof typeof TITLE_SPACINGS_Y];

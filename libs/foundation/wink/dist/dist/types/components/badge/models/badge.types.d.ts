export declare const BADGE_SIZES: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
};
export type BadgeSize = (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];
export declare const BADGE_COLORS: {
    readonly darkBrown: "darkBrown";
    readonly white: "white";
    readonly yellow: "yellow";
    readonly lemon: "lemon";
    readonly brightBlue: "brightBlue";
    readonly jeansBlue: "jeansBlue";
    readonly lila: "lila";
    readonly olivine: "olivine";
    readonly turquoise: "turquoise";
    readonly watermelon: "watermelon";
};
export type BadgeColor = (typeof BADGE_COLORS)[keyof typeof BADGE_COLORS];

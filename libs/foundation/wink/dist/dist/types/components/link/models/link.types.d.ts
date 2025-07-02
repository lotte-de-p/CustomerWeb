export declare const LINK_APPEARANCES_DEFAULT: {
    readonly default: "default";
    readonly subtle: "subtle";
    readonly area: "area";
};
export type LinkAppearanceDefault = (typeof LINK_APPEARANCES_DEFAULT)[keyof typeof LINK_APPEARANCES_DEFAULT];
export declare const LINK_APPEARANCES_SNOWFLAKES: {
    readonly dropdownMenuLink: "dropdown-menu-link";
    readonly menuSecondary: "menu-secondary";
    readonly menuBack: "menu-back";
};
export type LinkAppearanceSnowflake = (typeof LINK_APPEARANCES_SNOWFLAKES)[keyof typeof LINK_APPEARANCES_SNOWFLAKES];
export declare const LINK_APPEARANCES: {
    readonly dropdownMenuLink: "dropdown-menu-link";
    readonly menuSecondary: "menu-secondary";
    readonly menuBack: "menu-back";
    readonly default: "default";
    readonly subtle: "subtle";
    readonly area: "area";
};
export type LinkAppearance = (typeof LINK_APPEARANCES)[keyof typeof LINK_APPEARANCES];
export declare const LINK_SIZES: {
    readonly inherit: "inherit";
    readonly bodyRegular: "body-regular";
};
export type LinkSize = (typeof LINK_SIZES)[keyof typeof LINK_SIZES];
export declare const LINK_SIZES_SNOWFLAKES: {
    readonly captionBold: "caption-bold";
};
export type LinkSizeSnowflake = (typeof LINK_SIZES_SNOWFLAKES)[keyof typeof LINK_SIZES_SNOWFLAKES];
export declare const LINK_ICON_POSITIONS: {
    readonly left: "left";
    readonly right: "right";
};
export type LinkPositions = (typeof LINK_ICON_POSITIONS)[keyof typeof LINK_ICON_POSITIONS];

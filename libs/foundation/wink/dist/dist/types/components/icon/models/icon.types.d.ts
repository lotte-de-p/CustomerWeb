export declare const ICON_TYPES_BASIS: {
    readonly default: "default";
    readonly primary: "primary";
    readonly secondary: "secondary";
};
export type IconTypeBasis = (typeof ICON_TYPES_BASIS)[keyof typeof ICON_TYPES_BASIS];
export declare const ICON_TYPES: {
    readonly transparent: "transparent";
    readonly default: "default";
    readonly primary: "primary";
    readonly secondary: "secondary";
};
export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];
export declare const ICON_SIZES: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
};
export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

export declare const BUTTON_APPEARANCES: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly tertiary: "tertiary";
};
export type ButtonAppearance = (typeof BUTTON_APPEARANCES)[keyof typeof BUTTON_APPEARANCES];
export declare const TYPES: {
    readonly button: "button";
    readonly submit: "submit";
    readonly reset: "reset";
    readonly file: "file";
};
export type ButtonType = (typeof TYPES)[keyof typeof TYPES];
export declare const BUTTON_ELEMENTS: {
    readonly button: "button";
    readonly input: "input";
    readonly a: "a";
};
export type ButtonElement = (typeof BUTTON_ELEMENTS)[keyof typeof BUTTON_ELEMENTS];
export declare const BUTTON_SIZES: {
    readonly md: string;
    readonly sm: string;
};
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export declare const BUTTON_WIDTHS: {
    readonly none: "none";
    readonly full: string;
};
export type ButtonWidth = (typeof BUTTON_WIDTHS)[keyof typeof BUTTON_WIDTHS];
export declare const BUTTON_STATUSES: {
    readonly none: "none";
    readonly disable: "disable";
    readonly loading: "loading";
    readonly skeleton: "skeleton";
};
export type ButtonState = (typeof BUTTON_STATUSES)[keyof typeof BUTTON_STATUSES];
export declare const BUTTON_ICON_POSITIONS: {
    readonly left: "left";
    readonly right: "right";
};
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[keyof typeof BUTTON_ICON_POSITIONS];

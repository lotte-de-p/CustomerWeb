export declare const TOGGLE_ALIGNMENT: {
    readonly nextTo: "nextToEachOther";
    readonly spaceBetween: "spaceBetween";
};
export type toggleAlignment = (typeof TOGGLE_ALIGNMENT)[keyof typeof TOGGLE_ALIGNMENT];

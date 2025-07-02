export declare const SLIDER_TYPES: {
    readonly single: "single";
    readonly range: "range";
};
export type SliderType = (typeof SLIDER_TYPES)[keyof typeof SLIDER_TYPES];
export declare const SLIDER_DIRECTIONS: {
    readonly from: "from";
    readonly to: "to";
};
export type SliderDirections = (typeof SLIDER_DIRECTIONS)[keyof typeof SLIDER_DIRECTIONS];

export declare const INDICATOR_DIRECTIONS: {
    readonly left: "left";
    readonly right: "right";
    readonly up: "up";
    readonly down: "down";
};
export type IndicatorDirection = (typeof INDICATOR_DIRECTIONS)[keyof typeof INDICATOR_DIRECTIONS];

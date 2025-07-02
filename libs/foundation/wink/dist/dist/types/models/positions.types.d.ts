export declare const POSITIONS_HORIZONTAL: {
    readonly left: "left";
    readonly center: "center";
    readonly right: "right";
};
export type PositionHorizontal = (typeof POSITIONS_HORIZONTAL)[keyof typeof POSITIONS_HORIZONTAL];
export declare const DIRECTIONS: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
export type Directions = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

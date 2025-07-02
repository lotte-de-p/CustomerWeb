export declare const FLEX_DIRECTIONS: {
    readonly row: "row";
    readonly rowReverse: "row-reverse";
    readonly column: "column";
    readonly columnReverse: "column-reverse";
};
export type FlexDirection = (typeof FLEX_DIRECTIONS)[keyof typeof FLEX_DIRECTIONS];
export declare const JUSTIFY_CONTENTS: {
    readonly flexStart: "flex-start";
    readonly center: "center";
    readonly flexEnd: "flex-end";
    readonly unset: "unset";
    readonly spaceAround: "space-around";
    readonly spaceBetween: "space-between";
    readonly spaceEvenly: "space-evenly";
    readonly stretch: "stretch";
    readonly left: "left";
    readonly inherit: "inherit";
    readonly normal: "normal";
};
export type JustifyContent = (typeof JUSTIFY_CONTENTS)[keyof typeof JUSTIFY_CONTENTS];
export declare const ALIGN_ITEMS: {
    readonly flexStart: "flex-start";
    readonly center: "center";
    readonly flexEnd: "flex-end";
    readonly baseline: "baseline";
    readonly stretch: "stretch";
    readonly inherit: "inherit";
};
export type AlignItems = (typeof ALIGN_ITEMS)[keyof typeof ALIGN_ITEMS];
export declare const WRAPS: {
    readonly wrap: "wrap";
    readonly nowrap: "nowrap";
    readonly wrapReverse: "wrap-reverse";
    readonly initial: "initial";
};
export type Wrap = (typeof WRAPS)[keyof typeof WRAPS];

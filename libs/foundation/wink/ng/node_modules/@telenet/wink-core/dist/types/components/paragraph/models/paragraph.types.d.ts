export declare const PARAGRAPH_APPEARANCES: {
    readonly body: "body";
    readonly caption: "caption";
};
export type ParagraphAppearance = (typeof PARAGRAPH_APPEARANCES)[keyof typeof PARAGRAPH_APPEARANCES];
export declare const PARAGRAPH_SIZES: {
    readonly regular: "regular";
    readonly small: "small";
    readonly large: "large";
    readonly bold: "bold";
};
export type ParagraphSize = (typeof PARAGRAPH_SIZES)[keyof typeof PARAGRAPH_SIZES];

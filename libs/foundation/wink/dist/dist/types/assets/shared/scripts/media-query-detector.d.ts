export declare const BREAKPOINTS: {
    readonly SM: 576;
    readonly MD: 769;
    readonly LG: 1192;
};
export declare const HEADER_BREAKPOINTS: {
    readonly MD: 1024;
};
export declare const BREAKPOINT_TYPES: {
    readonly DEFAULT: {
        readonly SM: 576;
        readonly MD: 769;
        readonly LG: 1192;
    };
    readonly HEADER: {
        readonly MD: 1024;
    };
};
export declare class MediaQueryDetector {
    private static mediaQueryMatch;
    static get isFromSm(): boolean;
    static get isFromMd(): boolean;
    static get isFromLg(): boolean;
    static get isUntilSm(): boolean;
    static get isUntilMd(): boolean;
    static get isUntilLg(): boolean;
    static get isFromMdHeader(): boolean;
    static get isUntilMdHeader(): boolean;
}

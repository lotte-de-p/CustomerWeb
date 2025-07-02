const BREAKPOINTS = {
    SM: 576,
    MD: 769,
    LG: 1192,
};
const HEADER_BREAKPOINTS = {
    MD: 1024,
};
const BREAKPOINT_TYPES = {
    DEFAULT: BREAKPOINTS,
    HEADER: HEADER_BREAKPOINTS,
};
class MediaQueryDetector {
    static mediaQueryMatch(size, minOrMax, breakpointType = 'DEFAULT') {
        const breakpoints = BREAKPOINT_TYPES[breakpointType];
        const pixels = minOrMax === 'min' ? breakpoints[size] : breakpoints[size] - 1;
        return window.matchMedia(`(${minOrMax}-width: ${pixels}px)`).matches;
    }
    static get isFromSm() {
        return MediaQueryDetector.mediaQueryMatch('SM', 'min');
    }
    static get isFromMd() {
        return MediaQueryDetector.mediaQueryMatch('MD', 'min');
    }
    static get isFromLg() {
        return MediaQueryDetector.mediaQueryMatch('LG', 'min');
    }
    static get isUntilSm() {
        return MediaQueryDetector.mediaQueryMatch('SM', 'max');
    }
    static get isUntilMd() {
        return MediaQueryDetector.mediaQueryMatch('MD', 'max');
    }
    static get isUntilLg() {
        return MediaQueryDetector.mediaQueryMatch('LG', 'max');
    }
    static get isFromMdHeader() {
        return MediaQueryDetector.mediaQueryMatch('MD', 'min', 'HEADER');
    }
    static get isUntilMdHeader() {
        return MediaQueryDetector.mediaQueryMatch('MD', 'max', 'HEADER');
    }
}

export { MediaQueryDetector as M };

//# sourceMappingURL=media-query-detector-52eaefcd.js.map
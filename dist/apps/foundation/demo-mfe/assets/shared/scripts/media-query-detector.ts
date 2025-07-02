export const BREAKPOINTS = {
  SM: 576,
  MD: 769,
  LG: 1192,
} as const;
type Breakpoint = keyof typeof BREAKPOINTS;

export const HEADER_BREAKPOINTS = {
  MD: 1024,
} as const;
type HeaderBreakpoint = keyof typeof HEADER_BREAKPOINTS;

export const BREAKPOINT_TYPES = {
  DEFAULT: BREAKPOINTS,
  HEADER: HEADER_BREAKPOINTS,
} as const;
type BreakpointType = keyof typeof BREAKPOINT_TYPES;

export class MediaQueryDetector {
  private static mediaQueryMatch(
    size: Breakpoint | HeaderBreakpoint,
    minOrMax: 'min' | 'max',
    breakpointType: BreakpointType = 'DEFAULT'
  ): boolean {
    const breakpoints = BREAKPOINT_TYPES[breakpointType];
    const pixels = minOrMax === 'min' ? breakpoints[size] : breakpoints[size] - 1;
    return window.matchMedia(`(${minOrMax}-width: ${pixels}px)`).matches;
  }

  static get isFromSm(): boolean {
    return MediaQueryDetector.mediaQueryMatch('SM', 'min');
  }

  static get isFromMd(): boolean {
    return MediaQueryDetector.mediaQueryMatch('MD', 'min');
  }

  static get isFromLg(): boolean {
    return MediaQueryDetector.mediaQueryMatch('LG', 'min');
  }

  static get isUntilSm(): boolean {
    return MediaQueryDetector.mediaQueryMatch('SM', 'max');
  }

  static get isUntilMd(): boolean {
    return MediaQueryDetector.mediaQueryMatch('MD', 'max');
  }

  static get isUntilLg(): boolean {
    return MediaQueryDetector.mediaQueryMatch('LG', 'max');
  }

  static get isFromMdHeader(): boolean {
    return MediaQueryDetector.mediaQueryMatch('MD', 'min', 'HEADER');
  }

  static get isUntilMdHeader(): boolean {
    return MediaQueryDetector.mediaQueryMatch('MD', 'max', 'HEADER');
  }
}

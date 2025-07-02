export const SLIDER_TYPES = {
  single: 'single',
  range: 'range',
} as const;
export type SliderType = (typeof SLIDER_TYPES)[keyof typeof SLIDER_TYPES];

export const SLIDER_DIRECTIONS = {
  from: 'from',
  to: 'to',
} as const;
export type SliderDirections = (typeof SLIDER_DIRECTIONS)[keyof typeof SLIDER_DIRECTIONS];

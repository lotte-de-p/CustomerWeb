export const INDICATOR_DIRECTIONS = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down',
} as const;
export type IndicatorDirection = (typeof INDICATOR_DIRECTIONS)[keyof typeof INDICATOR_DIRECTIONS];

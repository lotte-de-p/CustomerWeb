export const POSITIONS_HORIZONTAL = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;
export type PositionHorizontal = (typeof POSITIONS_HORIZONTAL)[keyof typeof POSITIONS_HORIZONTAL];

export const POSITIONS_VERTICAL = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
} as const;
export type PositionVertical = (typeof POSITIONS_VERTICAL)[keyof typeof POSITIONS_VERTICAL];

export const DIRECTIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical',
} as const;

export type Directions = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

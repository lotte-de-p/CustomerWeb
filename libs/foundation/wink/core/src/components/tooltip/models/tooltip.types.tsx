import { POSITIONS_HORIZONTAL, POSITIONS_VERTICAL } from '../../../models/positions.types';

export const HORIZONTAL_TOOLTIP_POSITIONS = {
  left: POSITIONS_HORIZONTAL.left,
  center: POSITIONS_HORIZONTAL.center,
  right: POSITIONS_HORIZONTAL.right,
} as const;
export type HorizontalTooltipPositions =
  (typeof HORIZONTAL_TOOLTIP_POSITIONS)[keyof typeof HORIZONTAL_TOOLTIP_POSITIONS];

export const VERTICAL_TOOLTIP_POSITIONS = {
  top: POSITIONS_VERTICAL.top,
  bottom: POSITIONS_VERTICAL.bottom,
} as const;
export type VerticalTooltipPositions = (typeof VERTICAL_TOOLTIP_POSITIONS)[keyof typeof VERTICAL_TOOLTIP_POSITIONS];

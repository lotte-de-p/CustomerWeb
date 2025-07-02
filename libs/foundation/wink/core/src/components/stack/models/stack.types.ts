import { SIZES } from '../../../models/sizes.types';
import { AlignItems, FlexDirection, JustifyContent, Wrap } from '../../../models/flex.types';

export type CssClass = { [className: string]: boolean };

export const STACK_SIZES = {
  '3xs': SIZES['3xs'],
  '2xs': SIZES['2xs'],
  xs: SIZES.xs,
  sm: SIZES.sm,
  md: SIZES.md,
  lg: SIZES.lg,
  none: SIZES.none,
} as const;
export type StackSize = (typeof STACK_SIZES)[keyof typeof STACK_SIZES];

export type Size = {
  default?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
  sm?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
  md?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
};

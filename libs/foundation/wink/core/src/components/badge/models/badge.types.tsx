import { SIZES } from '../../../models/sizes.types';

export const BADGE_SIZES = {
  sm: SIZES.sm,
  md: SIZES.md,
  lg: SIZES.lg,
} as const;
export type BadgeSize = (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];

export const BADGE_COLORS = {
  default: 'default',
  brand: 'brand',
  dark: 'dark',
  light: 'light',
  accent1: 'accent1',
  accent2: 'accent2',
  accent3: 'accent3',
  accent4: 'accent4',
  accent5: 'accent5',
} as const;
export type BadgeColor = (typeof BADGE_COLORS)[keyof typeof BADGE_COLORS];

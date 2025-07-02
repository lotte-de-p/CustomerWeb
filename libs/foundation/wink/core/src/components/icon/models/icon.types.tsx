import { COLORS } from '../../../models/colors';
import { SIZES } from '../../../models/sizes.types';

export const ICON_TYPES_BASIS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
} as const;
export type IconTypeBasis = (typeof ICON_TYPES_BASIS)[keyof typeof ICON_TYPES_BASIS];

export const ICON_TYPES = {
  ...ICON_TYPES_BASIS,
  transparent: 'transparent',
} as const;
export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];

export const ICON_SIZES = {
  sm: SIZES.sm,
  md: SIZES.md,
  lg: SIZES.lg,
  xl: SIZES.xl,
} as const;
export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

export const ICON_COLORS = {
  default: COLORS.default,
  subtle: COLORS.subtle,
  subtlest: COLORS.subtlest,
  inverse: COLORS.inverse,
  promo: COLORS.promo,
} as const;
export type IconColors = (typeof ICON_COLORS)[keyof typeof ICON_COLORS];

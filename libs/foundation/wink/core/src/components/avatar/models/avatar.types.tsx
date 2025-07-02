import { SIZES } from '../../../models/sizes.types';

export const AVATAR_SIZES = {
  sm: SIZES.sm,
  md: SIZES.md,
  lg: SIZES.lg,
  xl: SIZES.xl,
} as const;

export type AvatarSize = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];

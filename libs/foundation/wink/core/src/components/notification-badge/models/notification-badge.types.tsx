import { SIZES } from '../../../models/sizes.types';

export const NOTIFICATION_BADGE_SIZES = {
  sm: SIZES.sm,
  md: SIZES.md,
} as const;
export type NotificationBadgeSize = (typeof NOTIFICATION_BADGE_SIZES)[keyof typeof NOTIFICATION_BADGE_SIZES];

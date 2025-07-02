import { STATUS_VARIANTS } from '../../../models/statuses.types';

export const NOTIFICATION_TYPES = {
  information: STATUS_VARIANTS.information,
  success: STATUS_VARIANTS.success,
  error: STATUS_VARIANTS.error,
  warning: STATUS_VARIANTS.warning,
} as const;
export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];
